resource "google_service_account" "sa" {
  project      = var.project_id
  account_id   = "${var.name}-cr-sa"
  display_name = "${var.display_name} cloud run account"
  description  = var.description
}

resource "google_project_iam_member" "iam" {
  for_each = toset(var.iam_roles)

  project = var.project_id
  role    = each.value
  member  = "serviceAccount:${google_service_account.sa.email}"
}

resource "google_cloud_run_service" "cr" {
  project                    = var.project_id
  location                   = var.location
  name                       = var.name
  autogenerate_revision_name = true

  template {
    spec {
      container_concurrency = var.container_concurrency
      timeout_seconds       = var.timeout_request
      service_account_name  = google_service_account.sa.email

      containers {
        image   = var.image_name
        command = var.entrypoint
        args    = var.args


        ports {
          name           = "http1"
          container_port = var.port
        }


        resources {
          limits = {
            cpu    = "${var.cpus * 1000}m"
            memory = "${var.memory}Mi"
          }
        }

        # Populate straight environment variables.
        dynamic "env" {
          for_each = [for e in var.env : e if e.value != null]

          content {
            name  = env.value.key
            value = env.value.value
          }
        }
      }
    }


    metadata {
      annotations = merge(
        {
          "autoscaling.knative.dev/maxScale"        = var.max_instances
          "autoscaling.knative.dev/minScale"        = var.min_instances
          "run.googleapis.com/client-name"          = "terraform"
          "run.googleapis.com/vpc-access-egress"    = var.vpc_connector_name != null ? "all" : null
          "run.googleapis.com/vpc-access-connector" = var.vpc_connector_name
          "run.googleapis.com/execution-environment" = var.generation
        }
      )
    }
  }

  traffic {
    percent         = 100
    latest_revision = var.revision == null
    revision_name   = var.revision != null ? "${var.name}-${var.revision}" : null
  }

  lifecycle {
    ignore_changes = [
      metadata.0.annotations,
    ]
  }
}

resource "google_cloud_run_service_iam_binding" "invoker-binding" {
  project  = var.project_id
  location = var.location
  service  = google_cloud_run_service.cr.name
  role     = "roles/run.invoker"
  members  = var.members
}
# ------------------------------------------------------------------------------
# Registry
# ------------------------------------------------------------------------------
module "registry" {
  source = "./modules/artifact-registry"

  project_id  = var.project_id
  location    = var.location
  name        = "demo-registry"
  description = "demo-registry"

  members = [
    "serviceAccount:${module.cicd_sa.sa_email}",
    "serviceAccount:${module.backend.sa_email}",
    "serviceAccount:${module.frontend.sa_email}"
  ]
}

# ------------------------------------------------------------------------------
# SA
# ------------------------------------------------------------------------------
module "cicd_sa" {
  source = "./modules/sa"

  project_id = var.project_id
  location   = var.location
  name       = "cicd"
  display_name = "CI/CD Service Account"
  description  = "CI/CD Service Account"

  iam_roles = [
    "roles/storage.objectUser",
    "roles/run.developer",
  ]
}

# ------------------------------------------------------------------------------
# Cloud Run
# ------------------------------------------------------------------------------

module "backend" {
  source = "./modules/cloud-run"

  location   = var.location
  project_id = var.project_id

  name         = "wtb-backend"
  display_name = "Backend Service for WherToBin"
  description  = "Backend Service for WherToBin"

  image_name      = var.backend_image_name
  container_concurrency = "300"
  timeout_request = 120
  cpus            = 2
  memory          = 4096
  max_instances   = 1
  min_instances   = 0
  port            = 80

  members = [
    "allUsers"
  ]
}

module "frontend" {
  source = "./modules/cloud-run"

  location   = var.location
  project_id = var.project_id

  name         = "wtb-frontend"
  display_name = "Frontend Service for WherToBin"
  description  = "Frontend Service for WherToBin"

  image_name      = var.frontend_image_name
  container_concurrency = "300"
  timeout_request = 120
  cpus            = 1
  memory          = 1024
  max_instances   = 1
  min_instances   = 0
  port            = 80

  members = [
    "allUsers"
  ]
}
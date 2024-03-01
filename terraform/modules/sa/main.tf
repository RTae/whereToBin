resource "google_service_account" "sa" {
  project      = var.project_id
  account_id   = "${var.name}-sa"
  display_name = "${var.display_name} cloud run account"
  description  = var.description
}

resource "google_project_iam_member" "iam" {
  for_each = toset(var.iam_roles)

  project = var.project_id
  role    = each.value
  member  = "serviceAccount:${google_service_account.sa.email}"
}
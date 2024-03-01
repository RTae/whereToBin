output "sa_email" {
  value       = google_service_account.sa.email
  description = "Service account email of the Cloud Run service"
}

output "url" {
  value       = google_cloud_run_service.cr.status[0].url
  description = "The URL of the Cloud Run service"
}

variable "project_id" {
  type        = string
  description = "The GCP project ID"
}

variable "location" {
  type        = string
  description = "The Region of the GKE cluster"
  default     = "asia-southeast1"
}

# Cloud Run
variable "backend_image_name" {
  type        = string
  description = "The name of the backend image"
  default     = "gcr.io/cloudrun/hello"
}

variable "frontend_image_name" {
  type        = string
  description = "The name of the frontend image"
  default     = "gcr.io/cloudrun/hello"
}
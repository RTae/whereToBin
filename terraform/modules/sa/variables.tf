variable "project_id" {
  type        = string
  description = "The GCP project ID"
}

variable "location" {
  type        = string
  description = "The Region of the Workflow"
  default     = "asia-southeast1"
}

variable "display_name" {
  type        = string
  description = "The display name of the Service account for this Cloud Run service"
}

variable "description" {
  type        = string
  description = "The description for the Service account and Cloud Run service"
}

variable "name" {
  type        = string
  description = "The name of the Cloud Run service"
}

variable "iam_roles" {
  type        = list(string)
  description = "The roles to be granted to the members"
  default     = []
}
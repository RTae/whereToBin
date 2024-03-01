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

variable "image_name" {
  type        = string
  description = "The image name for the Cloud Run service"
  default     = "gcr.io/cloudrun/hello"
}

variable "port" {
  type        = number
  description = "The port for the Cloud Run service"
  default     = 8080
}

variable "container_concurrency" {
  type        = string
  description = "The concurrency limit for the Cloud Run service"
  default     = "80"
}

variable "timeout_request" {
  type        = number
  description = "The timeout for the Cloud Run service in seconds"
  default     = 3600
}

variable "cpus" {
  type        = number
  description = "The number of CPUs to allocate to the Cloud Run service in cores"
  default     = 2
}

variable "memory" {
  type        = number
  description = "The amount of memory to allocate to the Cloud Run service in MiB"
  default     = 1024
}

variable "env" {
  type        = list(object({ key = string, value = string }))
  description = "The environment variables to set for the Cloud Run service"
  default     = []
}

variable "entrypoint" {
  type        = list(string)
  default     = []
  description = "Entrypoint command. Defaults to the image's ENTRYPOINT if not provided."
}

variable "args" {
  type        = list(string)
  default     = []
  description = "Arguments to pass to the entrypoint."
}

variable "max_instances" {
  type        = string
  description = "The maximum number of instances to scale to for the Cloud Run service"
  default     = "1"
}

variable "min_instances" {
  type        = string
  description = "The minimum number of instances to scale to for the Cloud Run service"
  default     = "1"
}

variable "vpc_connector_name" {
  type        = string
  description = "The name of the VPC connector to use for the Cloud Run service"
  default     = null
}

variable "revision" {
  type        = string
  description = "value of the revision label to set for the Cloud Run service"
  default     = null
}

variable "members" {
  type        = list(string)
  description = "The members to be granted the role"
}

variable "generation" {
  type        = string
  description = "The generation of the Cloud Run service"
  default     = "gen1"
}

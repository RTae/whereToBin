terraform {
  source = "../..//"
}

locals {
  project_id = "personal-388003"
  location = "asia-southeast1"
}

inputs = {
  project_id = local.project_id
  location = local.location
  
  backend_image_name = "gcr.io/cloudrun/hello"
  frontend_image_name = "gcr.io/cloudrun/hello"
}
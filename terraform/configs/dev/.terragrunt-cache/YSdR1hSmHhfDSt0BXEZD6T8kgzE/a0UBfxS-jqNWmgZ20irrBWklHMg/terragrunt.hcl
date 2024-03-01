terraform {
  source = "../..//"
}

locals {
  project_id = "	personal-388003"
  location = "asia-southeast1"
}

# remote_state {
#   backend "gcs" 
  
#   config = {
#     bucket  = "wtb-tf-state"
#     prefix = "${path_relative_to_include()}/terraform.tfstate"
#   }
# }

inputs = {
  project_id = local.project_id
  location = local.location
  
  backend_image_name = "gcr.io/cloudrun/hello"
  frontend_image_name = "gcr.io/cloudrun/hello"
}
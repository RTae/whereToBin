terraform {
  source = "../..//"
}

locals {
  project_id = "personal-388003"
  location = "asia-southeast1"
  image_tag = get_env("IMAGE_TAG", "latest")
}

inputs = {
  project_id = local.project_id
  location = local.location
  
  backend_image_name = "asia-southeast1-docker.pkg.dev/personal-388003/demo-registry-gar/backend:${image_tag}"
  frontend_image_name = "asia-southeast1-docker.pkg.dev/personal-388003/demo-registry-gar/frontend:${image_tag}"
}
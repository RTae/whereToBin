terraform {
  backend "gcs" {
    bucket  = "wtb-tf-state"
    prefix  = "terraform/state"
  }
}

<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_google"></a> [google](#requirement\_google) | ~> 4.48.0 |

## Providers

No providers.

## Modules

| Name | Source | Version |
|------|--------|---------|
| <a name="module_registry"></a> [registry](#module\_registry) | ./modules/artifact-registry | n/a |
| <a name="module_backend"></a> [backend](#module\_backend) | ./modules/cloud-run | n/a |
| <a name="module_frontend"></a> [frontend](#module\_frontend) | ./modules/cloud-run | n/a |

## Resources

No resources.

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_project_id"></a> [project\_id](#input\_project\_id) | The GCP project ID | `string` | n/a | yes |
| <a name="input_location"></a> [location](#input\_location) | The Region of the GKE cluster | `string` | `"asia-southeast1"` | no |
| <a name="input_backend_image_name"></a> [backend\_image\_name](#input\_backend\_image\_name) | The name of the backend image | `string` | `"gcr.io/cloudrun/hello"` | no |
| <a name="input_frontend_image_name"></a> [frontend\_image\_name](#input\_frontend\_image\_name) | The name of the frontend image | `string` | `"gcr.io/cloudrun/hello"` | no |

## Outputs

No outputs.
<!-- END_TF_DOCS -->
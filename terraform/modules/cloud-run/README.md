<!-- BEGIN_TF_DOCS -->
## Requirements

No requirements.

## Providers

| Name | Version |
|------|---------|
| <a name="provider_google"></a> [google](#provider\_google) | n/a |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [google_cloud_run_service.cr](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/cloud_run_service) | resource |
| [google_cloud_run_service_iam_binding.invoker-binding](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/cloud_run_service_iam_binding) | resource |
| [google_project_iam_member.iam](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/project_iam_member) | resource |
| [google_service_account.sa](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/service_account) | resource |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_project_id"></a> [project\_id](#input\_project\_id) | The GCP project ID | `string` | n/a | yes |
| <a name="input_location"></a> [location](#input\_location) | The Region of the Workflow | `string` | `"asia-southeast1"` | no |
| <a name="input_display_name"></a> [display\_name](#input\_display\_name) | The display name of the Service account for this Cloud Run service | `string` | n/a | yes |
| <a name="input_description"></a> [description](#input\_description) | The description for the Service account and Cloud Run service | `string` | n/a | yes |
| <a name="input_name"></a> [name](#input\_name) | The name of the Cloud Run service | `string` | n/a | yes |
| <a name="input_iam_roles"></a> [iam\_roles](#input\_iam\_roles) | The roles to be granted to the members | `list(string)` | `[]` | no |
| <a name="input_image_name"></a> [image\_name](#input\_image\_name) | The image name for the Cloud Run service | `string` | `"gcr.io/cloudrun/hello"` | no |
| <a name="input_port"></a> [port](#input\_port) | The port for the Cloud Run service | `number` | `8080` | no |
| <a name="input_container_concurrency"></a> [container\_concurrency](#input\_container\_concurrency) | The concurrency limit for the Cloud Run service | `string` | `"80"` | no |
| <a name="input_timeout_request"></a> [timeout\_request](#input\_timeout\_request) | The timeout for the Cloud Run service in seconds | `number` | `3600` | no |
| <a name="input_cpus"></a> [cpus](#input\_cpus) | The number of CPUs to allocate to the Cloud Run service in cores | `number` | `2` | no |
| <a name="input_memory"></a> [memory](#input\_memory) | The amount of memory to allocate to the Cloud Run service in MiB | `number` | `1024` | no |
| <a name="input_env"></a> [env](#input\_env) | The environment variables to set for the Cloud Run service | `list(object({ key = string, value = string }))` | `[]` | no |
| <a name="input_entrypoint"></a> [entrypoint](#input\_entrypoint) | Entrypoint command. Defaults to the image's ENTRYPOINT if not provided. | `list(string)` | `[]` | no |
| <a name="input_args"></a> [args](#input\_args) | Arguments to pass to the entrypoint. | `list(string)` | `[]` | no |
| <a name="input_max_instances"></a> [max\_instances](#input\_max\_instances) | The maximum number of instances to scale to for the Cloud Run service | `string` | `"1"` | no |
| <a name="input_min_instances"></a> [min\_instances](#input\_min\_instances) | The minimum number of instances to scale to for the Cloud Run service | `string` | `"1"` | no |
| <a name="input_vpc_connector_name"></a> [vpc\_connector\_name](#input\_vpc\_connector\_name) | The name of the VPC connector to use for the Cloud Run service | `string` | `null` | no |
| <a name="input_revision"></a> [revision](#input\_revision) | value of the revision label to set for the Cloud Run service | `string` | `null` | no |
| <a name="input_members"></a> [members](#input\_members) | The members to be granted the role | `list(string)` | n/a | yes |
| <a name="input_generation"></a> [generation](#input\_generation) | The generation of the Cloud Run service | `string` | `"gen1"` | no |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_sa_email"></a> [sa\_email](#output\_sa\_email) | Service account email of the Cloud Run service |
| <a name="output_url"></a> [url](#output\_url) | The URL of the Cloud Run service |
<!-- END_TF_DOCS -->
.PHONY: help

help:
	@echo "Usage: make [target] ENV=[environment]"
	@echo "Targets:"
	@echo " int     - Initialize the Terraform backend"
	@echo " plan    - Generate and show an execution plan"
	@echo " apply   - Builds or changes infrastructure"
	@echo " destroy - Destroy Terraform-managed infrastructure"
	@echo " help    - Show this help message"
	@echo ""
	@echo "Environments:"
	@echo " dev     	- Development environment"

define terragrunt_command
	cd configs/$(1) && terragrunt $(2) $(3)
endef

all: $(ENV)

TEMPLATES_DIR = ./modules/*
gen-tf-docs:
	@terraform-docs markdown table --output-file README.md --output-mode inject ./ --sort=false
	@$(foreach file, $(wildcard $(TEMPLATES_DIR) ), \
		terraform-docs markdown table --output-file README.md --output-mode inject $(file) --sort=false ;)

format-tf:
	terraform fmt -diff

ENV ?= ""
init plan:
ifeq ($(ENV),dev)
	$(call terragrunt_command,dev,$@,)
else
	$(info Available environments are dev)
endif

apply destroy:
ifeq ($(ENV),dev)
	$(call terragrunt_command,dev,$@,-auto-approve)
else
	$(info Available environments are dev)
endif

%:
	make help
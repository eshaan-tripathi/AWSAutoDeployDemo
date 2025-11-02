terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  required_version = ">= 1.5.0"

  # Backend to store Terraform state in S3
  backend "s3" {
    bucket = "eshaan-terra-backend"       
    key    = "terraform/state.tfstate"   
    region = "us-east-1"
    encrypt = true                       
  }
}

provider "aws" {
  region = var.region
}

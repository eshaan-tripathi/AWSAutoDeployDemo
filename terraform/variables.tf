variable "region" { type = string description = "AWS region" }

variable "function_name" { type = string description = "Lambda function name" }
variable "runtime" { type = string description = "Lambda runtime" }
variable "handler" { type = string description = "Lambda handler" }
variable "role_arn" { type = string description = "Lambda IAM role ARN" }
variable "memory_size" { type = number description = "Lambda memory" }
variable "timeout" { type = number description = "Lambda timeout" }
variable "s3_bucket_name" { type = string description = "S3 bucket name" }
variable "s3_acl" { type = string description = "S3 ACL" }
variable "s3_versioning" { type = bool description = "Enable bucket versioning" }
variable "s3_encryption" { type = string description = "Bucket encryption" }
variable "s3_force_destroy" { type = bool description = "Force destroy bucket" }
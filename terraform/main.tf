resource "aws_lambda_function" "demo_lambda" {
  function_name    = var.function_name
  runtime          = var.runtime
  handler          = var.handler
  role             = var.role_arn
  memory_size      = var.memory_size
  timeout          = var.timeout
  filename         = "lambda_function_payload.zip"
  source_code_hash = filebase64sha256("lambda_function_payload.zip")

  # Prevent accidental deletion or recreation if exists
  lifecycle {
    prevent_destroy = true
  }
}

# S3 Bucket resource
resource "aws_s3_bucket" "demo_s3" {
  bucket        = var.s3_bucket_name
  force_destroy = var.s3_force_destroy

  # Use separate aws_s3_bucket_versioning resource
  # because versioning block in aws_s3_bucket is deprecated
  lifecycle {
    prevent_destroy = true
  }

  dynamic "server_side_encryption_configuration" {
    for_each = var.s3_encryption != "none" ? [1] : []
    content {
      rule {
        apply_server_side_encryption_by_default {
          sse_algorithm = "aws:kms"
        }
      }
    }
  }
}

# Separate resource for versioning
resource "aws_s3_bucket_versioning" "demo_s3_versioning" {
  bucket = aws_s3_bucket.demo_s3.id
  versioning_configuration {
    status = var.s3_versioning ? "Enabled" : "Suspended"
  }
}

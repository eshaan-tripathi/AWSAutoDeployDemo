resource "aws_lambda_function" "demo_lambda" {
  function_name    = var.function_name
  runtime          = var.runtime
  handler          = var.handler
  role             = var.role_arn
  memory_size      = var.memory_size
  timeout          = var.timeout
  filename         = "lambda_function_payload.zip"
  source_code_hash = filebase64sha256("lambda_function_payload.zip")
}
resource "aws_s3_bucket" "demo_s3" {
  bucket        = var.s3_bucket_name
  force_destroy = var.s3_force_destroy

  versioning {
    enabled = var.s3_versioning
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
output "lambda_function_name" {
  value = aws_lambda_function.demo_lambda.function_name
}

output "lambda_function_arn" {
  value = aws_lambda_function.demo_lambda.arn
}

output "s3_bucket_name" {
  value = aws_s3_bucket.demo_s3.bucket
}

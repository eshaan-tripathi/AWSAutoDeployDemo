### AwsAutoDeploy

##Fully automated CI/CD Pipeline
Automate safe, repeatable CI/CD for an AWS Lambda (Node.js) and its Terraform-managed infra to eliminate manual packaging, state drift, and risky deployments. The workflow should lint and test code, package and upload the Lambda payload, import existing AWS resources into Terraform state if present, apply infrastructure changes, publish a new Lambda version and update the production alias on success, run a load test, automatically roll back the alias on failure, and send a final notification with logs. 

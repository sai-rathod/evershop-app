output "vpc_id" {
  value = aws_vpc.my-vpc.id
}
output "public_subnets" {
    value = aws_subnet.public-subnet[*].id
}
output "private_subnets" {
    value = aws_subnet.private-subnet[*].id
}
output "s3-bucket-name-cloud" {
  value = aws_s3_bucket.cloud-state.bucket
  
}
output "dynamo-db-table" {
  value = aws_dynamodb_table.my-db.name
}
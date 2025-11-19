output "vpc_id" {
    value = module.staging-network.vpc_id
}
output "public_subnets"{
    value = module.staging-network.public_subnets
}
output "private_subnets"{
    value = module.staging-network.private_subnets
}
output "eks_name" {
    value = module.eks.cluster_name
}
output "s3-bucket-name-cloud" {
    value = module.staging-network.s3-bucket-name-cloud
}
output "dynamo-db-table" {
    value = module.staging-network.dynamo-db-table
}
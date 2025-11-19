module "staging-network" {
    source = "./network"
    env = "staging"
    vpc_cidr = "10.10.0.0/16"
    public_subnet_cidr = ["10.10.1.0/24","10.10.2.0/24"]
    private_subnet_cidr = ["10.10.10.0/24","10.10.11.0/24"]
    sg_ports = [20,443,3000,8080,80]
    dynamodb_details = {
        name = "state-table"
        hash_key = "StateID"
        type = "S"
    }
    cloud_bucket_s3 = "my-cloud-state-bucket-s3"

}
data "aws_caller_identity" "current" {}
data "aws_partition" "current" {}

module "eks" {
  depends_on = [module.staging-network]
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 21.0"

  name               = "app-cluster"
  kubernetes_version = "1.31"
  create = true
  addons = {
    coredns                = {
        most-recent  = true
    }
    eks-pod-identity-agent = {
      before_compute = true
    }
    kube-proxy             = {
        most-recent = true
    }
    vpc-cni                = {
      before_compute = true
    }
  }

  endpoint_public_access = true

  enable_cluster_creator_admin_permissions = true

  vpc_id                   = module.staging-network.vpc_id
  subnet_ids               = module.staging-network.public_subnets
  control_plane_subnet_ids = module.staging-network.public_subnets

  eks_managed_node_groups = {
    app-node-group = {
      ami_type       = "AL2023_x86_64_STANDARD"
      instance_types = ["t2.medium"]

      min_size     = 2
      max_size     = 3
      desired_size = 2
    }
  }

  tags = {
    Environment = "staging"
  }
}

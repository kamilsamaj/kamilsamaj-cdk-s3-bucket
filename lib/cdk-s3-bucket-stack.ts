import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cdk from "@aws-cdk/core";

export class CdkS3BucketStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const s3Bucket = new s3.Bucket(this, "my-cdk-bucket-28", {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // 👇 Get access to the CfnBucket resource
    const cfnBucket = s3Bucket.node.defaultChild as s3.CfnBucket;

    // 👇 Override the bucket's logical ID
    cfnBucket.overrideLogicalId("myLogicalId");
  }
}

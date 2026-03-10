---
title: "Supabase incident on February 12, 2026"
description: "Thi will help with learning"
author: "Sanele Jeza"
category: "learning"
date: "03-03-2026"
image: "/blog/supabase-incident-on-february-12-2026.webp"
---


On February 12, 2026, at 21:12 UTC, Supabase experienced a major outage affecting all services in the us-east-2 (Ohio) region. The outage lasted 3 hours and 42 minutes, with full service recovery at 00:54 UTC on February 13.

During this period, customers with projects in us-east-2 were unable to access their Postgres databases, Auth, Data APIs, Edge Functions, Storage, Realtime, and any other Supabase service in that region.

I am sorry for the impact this caused. We know you depend on Supabase to be reliable. We let you down. This post is a transparent account of what happened, how it happened, and the concrete steps we are taking to make sure it does not happen again.

Summary#
We deployed a new internal monitoring service on February 12th that inadvertently enabled AWS's VPC Block Public Access feature at the regional level in us-east-2. This blocked all internet gateway traffic across every VPC in the region.

We resolved the outage by rolling back the deployment, which removed the regional block and restored normal network connectivity. This was not caused by an external attack or an AWS service disruption. It was a configuration error stemming from insufficient guardrails in our infrastructure deployment pipeline.

Who was affected#
All Supabase customers with projects hosted in the us-east-2 region were affected. This includes dashboard operations, database connections, Auth, Storage, Realtime, Authentication, and any other service that relied upon the project’s database. Connections via VPC peering and private networking were not affected, as these do not traverse internet gateways.

What is VPC Block Public Access, and why was it so destructive?#
AWS VPC Block Public Access (BPA) is a security feature designed for compliance-sensitive environments where organizations need to guarantee that no resource can accidentally be exposed to the internet. When enabled, it blocks all traffic flowing through all internet gateways in a region, unless specific subnets are explicitly excluded.

When the new monitoring service was deployed to a pre-existing account, it used a shared construct that created a BPA in block-bidirectional mode, blocking all external traffic for production VPCs within the account.

Traffic to external VPCs as well as traffic through VPC peering, VPN connections, Direct Connect, and AWS PrivateLink was unaffected.

Why did resolution take 3 hours and 42 minutes?#
Resolution took an unacceptably long time due to several factors diverting the response team’s attention away from what we ultimately determined to be the root cause.

The outage triggered alarms on shared services in a different region. The investigation initially focused on these services as potential causal factors, when it turned out that their failures were symptoms of network connectivity loss in the us-east-2 region.

The deployment contained additional networking changes. The ModifyVpcBlockPublicAccessOptions event appeared as a single line item in the CloudTrail logs, and did not immediately jump out at the response team. Other networking changes in the same deployment were more complex and prominent in the logs, drawing investigative attention away from the actual issue.

Our pre-production environment did not make use of the us-east-2 region in AWS. The monitoring stack had been deployed to a pre-production environment for a week prior without surfacing any issues. However, that pre-production environment did not match our production environment, so the regional BPA had no visible impact there.

We did not have representation from the right infrastructure teams at the start of the incident. This incident initially manifested in our monitoring and alerting as an API outage, but turned out to be a much wider issue caused by the loss of network connectivity. Had we had the right infrastructure teams involved in the response from the outset, we would have made the connection between the outage and the deployment sooner. Once the relevant infrastructure team was paged, we were able to establish that link by correlating timestamps of the incident and the deployment.

What we are doing about it#
We have organized our response into three categories: immediate actions already completed, near-term safeguards, and structural changes to prevent this class of issue.

Already completed#
We have audited every region where Supabase operates to confirm VPC Block Public Access is not enabled. We have confirmed that no IAC stacks contain VpcBlockPublicAccessOptions resources.

We have deployed AWS Organizations Service Control Policies (SCPs) across both our pre-production and production organizations to prevent VpcBlockPublicAccessOptions and other account/region-scoped resources from being modified outside of a dedicated, controlled pipeline.
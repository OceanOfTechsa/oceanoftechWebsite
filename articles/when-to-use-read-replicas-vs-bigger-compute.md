---
title: "When to use Read Replicas vs. bigger compute"
description: "To Develop The Company"
author: "Sanele Jeza"
category: "Company"
date: "04-03-2026"
image: "/blog/when-to-use-read-replicas-vs-bigger-compute.webp"
---

When to use Read Replicas vs. bigger compute#
When your database starts slowing down, you face a choice: make your existing database bigger, or spread the load across multiple databases. Both approaches work. Neither is universally correct. The right answer depends on your workload, your budget, and where the bottleneck actually is.

This post walks through how to diagnose what is causing your database to slow down, when vertical scaling (bigger compute) makes sense, when horizontal read scaling (Read Replicas) is the better path, and how to make the decision with real numbers.

The scaling decision every growing database faces#
Your Supabase project starts on a Small compute instance. It handles your MVP, your beta users, and your first paying customers. Then, traffic grows and response times creep up. You need to scale.

Here is the quick version:

If this is you...	Do this
Database is slow and CPU (user processes) is consistently above 70%	Upgrade compute
Analytics queries are hurting production	Add a Read Replica
Users in Europe or Asia have high latency	Add a Read Replica in their region
I am maxed out at 16XL and need more read capacity	Add Read Replicas
My workload is mostly writes	Upgrade compute (replicas only help reads)
I want the simplest solution with no code changes	Upgrade compute
The rest of this post explains how to diagnose your specific situation and make the right call with real numbers.

First, diagnose the actual problem#
Before choosing a scaling strategy, figure out what is actually causing the slowdown. Throwing hardware at the wrong problem wastes money. The database performance guide covers diagnostics in depth. Here are the essentials.

Check your query patterns#
Run this query to see what is consuming the most time in your database:

select
calls,
mean_exec_time::numeric(10,2) as avg_ms,
total_exec_time::numeric(10,2) as total_ms,
query
from pg_stat_statements
order by total_exec_time desc
limit 20;

This tells you where time is actually going. You might discover:

A few slow queries dominating execution time (optimize those queries first)
Many fast queries adding up (you need more capacity)
Analytics queries competing with production traffic (you need workload isolation)
Check your read/write ratio#
Read Replicas only help with read traffic. If your workload is write-heavy, replicas will not help. Check your ratio:

select
sum(seq_tup_read + idx_tup_fetch) as reads,
sum(n_tup_ins + n_tup_upd + n_tup_del) as writes,
round(
100.0 * sum(seq_tup_read + idx_tup_fetch) / nullif(
sum(seq_tup_read + idx_tup_fetch + n_tup_ins + n_tup_upd + n_tup_del),
0
),
1
) as read_percentage
from pg_stat_user_tables;

If reads are 80% or more of your traffic, Read Replicas can distribute that load. If writes dominate, you need bigger compute (or query optimization, or Supabase Queues for background processing).

Check CPU and memory utilization#
In the Supabase Dashboard, go to Reports > Database. Look at:

CPU utilization: Sustained above 70% means you are running hot
Connection count: Approaching limits causes connection errors
These metrics tell you whether you are hitting hardware limits or software limits.

When bigger compute is the right choice#
Vertical scaling is the simpler path. One click in the dashboard, a brief restart, and your database has more resources. Choose bigger compute when:

Your workload is write-heavy#
Read Replicas cannot help with writes. All INSERT, UPDATE, and DELETE operations go to the primary database. If writes are your bottleneck, you need a bigger primary.

You have headroom in the compute tiers#
Supabase offers compute tiers from Micro ($10/month) to 16XL ($3,730/month). If you are on Medium and experiencing slowdowns, upgrading to Large or XL is straightforward and immediate.

Current tier	Next tier	Monthly cost increase	What you get
Small ($15)	Medium ($60)	+$45	2x RAM (2GB to 4GB)
Medium ($60)	Large ($110)	+$50	2x RAM, dedicated CPU
Large ($110)	XL ($210)	+$100	2x CPU cores, 2x RAM
XL ($210)	2XL ($410)	+$200	2x CPU cores, 2x RAM
Your queries are already optimized#
Before scaling hardware, check that your queries use indexes effectively. An index is like the index at the back of a book. Instead of reading every page to find a topic, you look it up in the index and jump straight to the right page. Postgres works the same way. Without an index, Postgres reads every row in a table to find matching data. This is called a sequential scan. With an index, Postgres looks up which rows match and jumps directly to them. The difference can be dramatic: a query that takes 30 seconds without an index might take 30 milliseconds with one.

Run EXPLAIN ANALYZE on slow queries to see if Postgres is using indexes or doing sequential scans. If you see "Seq Scan" on a large table, you probably need an index. The Database Advisor in your Supabase Dashboard can also identify missing indexes and other performance issues automatically.

Quick index guidelines:

Add indexes on columns used in WHERE clauses
Add indexes on columns used in JOIN conditions
Add indexes on columns used in ORDER BY
Compound indexes work for queries that filter on multiple columns
Do not add indexes on every column. Each index slows down writes and uses disk space.
Sometimes a $0 index beats a $200/month compute upgrade.

Analyze your queries with Claude Code:

If you use Claude Code with the Supabase MCP Server, you can ask Claude to analyze your database and suggest indexes:

Analyze my Supabase database for missing indexes:

1. Query pg_stat_statements to find the 20 slowest queries by total execution time
2. For each slow query, run EXPLAIN ANALYZE and check for sequential scans on tables with more than 10,000 rows
3. Suggest CREATE INDEX statements for any missing indexes
4. Estimate the performance improvement for each suggested index

Show me the slow queries, what is causing them to be slow, and the exact CREATE INDEX statements I should run.

Claude will connect to your database, run the diagnostics, and give you specific index recommendations.

You need the simplest solution#
Vertical scaling requires no code changes. No connection string updates. No routing logic. If you need immediate relief and simplicity matters, upgrade compute first.

When Read Replicas are the right choice#
Read Replicas add complexity but unlock capabilities that vertical scaling cannot provide. Choose Read Replicas when:

Analytics queries are hurting production#
This is the most common reason teams adopt Read Replicas. The pattern is familiar: your data team connects Metabase or Looker to your production database. They write a query that joins three tables and scans six months of orders. The query runs for 45 seconds. During those 45 seconds, your production database is working hard on that analytical query instead of serving your application. API response times spike and your users notice.

Moving analytical queries to Read Replicas

The problem is that Postgres is optimized for transactional workloads: small, fast queries that touch a few rows at a time. Analytical queries do the opposite. They scan millions of rows, aggregate data, and compute statistics. These two workload types compete for the same CPU, memory, and I/O.

Read Replicas solve this by isolation. Point your analytics tools at a replica. The replica handles the heavy queries. Production stays fast.





"use client"
import * as React from "react"
import { Wrench, Bell, TrendingUp, CheckCircle2, Clock, AlertTriangle, Activity, Zap } from 'lucide-react'

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ')
}

// System Health Monitor
function SystemHealth() {
  const systems = [
    { name: "Web Application", status: "Healthy", uptime: "99.98%", color: "green", icon: Activity },
    { name: "Database Server", status: "Healthy", uptime: "99.99%", color: "green", icon: Activity },
    { name: "API Services", status: "Healthy", uptime: "99.97%", color: "green", icon: Activity },
    { name: "CDN Network", status: "Healthy", uptime: "100%", color: "green", icon: Activity },
  ]

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <Activity className="h-4 w-4 text-green-600 dark:text-green-400" />
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">System Health</span>
        </div>
        <span className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400 animate-pulse" />
          All Systems Operational
        </span>
      </div>
      <div className="p-4 space-y-3">
        {systems.map((system) => {
          const Icon = system.icon
          return (
            <div key={system.name} className="flex items-center justify-between p-3 rounded-lg border border-zinc-200 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-500/10">
                  <Icon className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-900 dark:text-white">{system.name}</div>
                  <div className="text-xs text-green-600 dark:text-green-400">{system.status}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-zinc-900 dark:text-white">{system.uptime}</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">Uptime</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Maintenance Timeline
function MaintenanceTimeline() {
  const tasks = [
    { 
      task: "Security patches applied", 
      status: "completed", 
      time: "2 hours ago",
      type: "security",
      icon: CheckCircle2
    },
    { 
      task: "Database optimization", 
      status: "in-progress", 
      time: "In progress",
      type: "performance",
      icon: Zap
    },
    { 
      task: "Backup verification", 
      status: "completed", 
      time: "4 hours ago",
      type: "backup",
      icon: CheckCircle2
    },
    { 
      task: "SSL certificate renewal", 
      status: "scheduled", 
      time: "Tomorrow 2:00 AM",
      type: "security",
      icon: Clock
    },
  ]

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <Wrench className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Maintenance Tasks</span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        {tasks.map((task, index) => {
          const Icon = task.icon
          return (
            <div key={index} className="flex items-start gap-3 relative">
              {/* Timeline line */}
              {index !== tasks.length - 1 && (
                <div className="absolute left-5 top-10 bottom-0 w-px bg-zinc-200 dark:bg-white/10" />
              )}
              
              <div className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0 relative z-10",
                task.status === "completed" && "bg-green-100 dark:bg-green-500/10",
                task.status === "in-progress" && "bg-blue-100 dark:bg-blue-500/10",
                task.status === "scheduled" && "bg-zinc-100 dark:bg-white/5"
              )}>
                <Icon className={cn(
                  "h-5 w-5",
                  task.status === "completed" && "text-green-600 dark:text-green-400",
                  task.status === "in-progress" && "text-blue-600 dark:text-blue-400",
                  task.status === "scheduled" && "text-zinc-600 dark:text-zinc-400"
                )} />
              </div>
              
              <div className="flex-1 pt-1.5">
                <div className="text-sm font-medium text-zinc-900 dark:text-white">{task.task}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className={cn(
                    "text-xs px-2 py-0.5 rounded-full",
                    task.status === "completed" && "bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400",
                    task.status === "in-progress" && "bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 animate-pulse",
                    task.status === "scheduled" && "bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400"
                  )}>
                    {task.status}
                  </span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">{task.time}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Support Tickets
function SupportTickets() {
  const tickets = [
    { id: "#1247", issue: "Performance optimization request", priority: "high", status: "In Progress" },
    { id: "#1246", issue: "SSL certificate update needed", priority: "medium", status: "Resolved" },
    { id: "#1245", issue: "Database backup verification", priority: "low", status: "Resolved" },
  ]

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <Bell className="h-4 w-4 text-orange-600 dark:text-orange-400" />
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Support Tickets</span>
        </div>
        <button className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">
          View All
        </button>
      </div>
      <div className="p-3">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-300/60 dark:border-white/15 text-zinc-600 dark:text-zinc-400">
            <tr>
              <th className="pb-3 font-medium">ID</th>
              <th className="pb-3 font-medium">Issue</th>
              <th className="pb-3 font-medium">Priority</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="border-t border-zinc-200 dark:border-white/10">
                <td className="py-3 font-mono text-xs text-zinc-600 dark:text-zinc-400">{ticket.id}</td>
                <td className="py-3 text-sm text-zinc-800 dark:text-zinc-200">{ticket.issue}</td>
                <td className="py-3">
                  <span className={cn(
                    "text-xs px-2 py-1 rounded-full",
                    ticket.priority === "high" && "bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400",
                    ticket.priority === "medium" && "bg-yellow-100 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
                    ticket.priority === "low" && "bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400"
                  )}>
                    {ticket.priority}
                  </span>
                </td>
                <td className="py-3 text-xs text-zinc-600 dark:text-zinc-400">{ticket.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// Performance Metrics
function PerformanceMetrics() {
  const metrics = [
    { label: "Avg Response Time", value: "142ms", change: "-12%", trend: "down", icon: Zap },
    { label: "Server Load", value: "34%", change: "-8%", trend: "down", icon: Activity },
    { label: "Error Rate", value: "0.02%", change: "-15%", trend: "down", icon: AlertTriangle },
    { label: "Active Users", value: "1,247", change: "+23%", trend: "up", icon: TrendingUp },
  ]

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <TrendingUp className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Performance Metrics</span>
        </div>
      </div>
      <div className="p-4 grid grid-cols-2 gap-3">
        {metrics.map((metric) => {
          const Icon = metric.icon
          return (
            <div key={metric.label} className="p-3 rounded-lg border border-zinc-200 dark:border-white/10">
              <div className="flex items-center justify-between mb-2">
                <Icon className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                <span className={cn(
                  "text-xs font-medium",
                  metric.trend === "down" ? "text-green-600 dark:text-green-400" : "text-blue-600 dark:text-blue-400"
                )}>
                  {metric.change}
                </span>
              </div>
              <div className="text-xl font-bold text-zinc-900 dark:text-white">{metric.value}</div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">{metric.label}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const MaintenanceSupportShowcase = () => {
  return (
    <section className="w-full py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-4">
            <SystemHealth />
            <SupportTickets />
          </div>
          <div className="flex flex-col gap-4 lg:col-span-4">
            <MaintenanceTimeline />
            <PerformanceMetrics />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MaintenanceSupportShowcase
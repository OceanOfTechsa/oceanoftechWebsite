"use client"
import * as React from "react"
import { Server, Activity, Globe, HardDrive, Cpu, MemoryStick, Clock } from 'lucide-react'

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ')
}

// Server Metrics Dashboard
function ServerMetrics() {
  const metrics = [
    { label: "CPU Usage", value: "23%", status: "good", icon: Cpu },
    { label: "Memory", value: "4.2GB / 16GB", status: "good", icon: MemoryStick },
    { label: "Storage", value: "127GB / 500GB", status: "good", icon: HardDrive },
    { label: "Uptime", value: "99.99%", status: "excellent", icon: Clock },
  ]

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <Activity className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Server Metrics</span>
        </div>
        <span className="text-xs text-green-600 dark:text-green-400">● Live</span>
      </div>
      <div className="p-4 space-y-4">
        {metrics.map((metric) => {
          const Icon = metric.icon
          return (
            <div key={metric.label} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 dark:bg-white/5">
                  <Icon className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                </div>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{metric.label}</span>
              </div>
              <span className="text-sm font-semibold text-zinc-900 dark:text-white">{metric.value}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Deployment Status
function DeploymentStatus() {
  const deployments = [
    { site: "production", status: "deployed", time: "2m ago", color: "green" },
    { site: "staging", status: "building", time: "30s ago", color: "yellow" },
  ]

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <Globe className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Deployments</span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        {deployments.map((deploy) => (
          <div key={deploy.site} className="flex items-center justify-between rounded-lg border border-zinc-200 dark:border-white/10 p-3">
            <div className="flex items-center gap-3">
              <div className={cn(
                "h-2 w-2 rounded-full",
                deploy.color === "green" ? "bg-green-600 dark:bg-green-500" : "bg-yellow-500 animate-pulse"
              )} />
              <div>
                <div className="text-sm font-medium text-zinc-900 dark:text-white">{deploy.site}</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">{deploy.status}</div>
              </div>
            </div>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">{deploy.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Server Console/Logs
function ServerConsole() {
  const logs = [
    { type: "info", message: "Server started on port 3000", time: "14:23:01" },
    { type: "success", message: "SSL certificate renewed successfully", time: "14:23:45" },
    { type: "info", message: "Database connection established", time: "14:24:12" },
    { type: "success", message: "Deployment completed", time: "14:24:30" },
  ]

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">server.log</span>
        </div>
      </div>
      <div className="p-5 font-mono text-xs leading-relaxed bg-zinc-50/50 dark:bg-black/20">
        <div className="space-y-2">
          {logs.map((log, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-zinc-400 dark:text-zinc-600">[{log.time}]</span>
              <span className={cn(
                log.type === "success" ? "text-green-600 dark:text-green-400" : "text-blue-600 dark:text-blue-400"
              )}>
                {log.type.toUpperCase()}
              </span>
              <span className="text-zinc-700 dark:text-zinc-300">{log.message}</span>
            </div>
          ))}
          <div className="flex gap-3 mt-2">
            <span className="text-zinc-400 dark:text-zinc-600">[14:24:31]</span>
            <span className="animate-pulse text-zinc-600 dark:text-zinc-400">_</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Domain & SSL Status
function DomainSSL() {
  const domains = [
    { name: "yourdomain.com", ssl: "Valid", expires: "89 days" },
    { name: "www.yourdomain.com", ssl: "Valid", expires: "89 days" },
    { name: "api.yourdomain.com", ssl: "Valid", expires: "89 days" },
  ]

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <Server className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Domains & SSL</span>
        </div>
      </div>
      <div className="p-3">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-300/60 dark:border-white/15 text-zinc-600 dark:text-zinc-400">
            <tr>
              <th className="pb-3 font-medium">Domain</th>
              <th className="pb-3 font-medium">SSL Status</th>
              <th className="pb-3 font-medium">Expires</th>
            </tr>
          </thead>
          <tbody>
            {domains.map((domain, index) => (
              <tr key={domain.name} className="border-t border-zinc-200 dark:border-white/10">
                <td className="py-3 font-mono text-xs text-zinc-700 dark:text-zinc-300">{domain.name}</td>
                <td className="py-3">
                  <span className="inline-flex items-center gap-1.5 text-xs">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-600 dark:bg-green-500" />
                    <span className="text-green-600 dark:text-green-400">{domain.ssl}</span>
                  </span>
                </td>
                <td className="py-3 text-xs text-zinc-600 dark:text-zinc-400">{domain.expires}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const HostingShowcase = () => {
  return (
    <section className="w-full py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Left Column - Main Console */}
          <div className="lg:col-span-8 space-y-4">
            <DomainSSL />
            <ServerConsole />
          </div>

          {/* Right Column - Metrics & Status */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <ServerMetrics />
            <DeploymentStatus />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HostingShowcase
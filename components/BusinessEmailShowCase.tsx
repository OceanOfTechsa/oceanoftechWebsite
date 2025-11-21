"use client"
import * as React from "react"
import { Mail, Shield, Users, Inbox, Send, Archive, Clock, CheckCircle2, AlertCircle } from 'lucide-react'

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ')
}

// Email Client Preview
function EmailInbox() {
  const emails = [
    { 
      from: "Sarah Johnson", 
      subject: "Q4 Budget Review Meeting", 
      preview: "Hi team, I've scheduled the budget review...",
      time: "10:45 AM",
      unread: true,
      important: true
    },
    { 
      from: "Marketing Team", 
      subject: "New Campaign Launch Success", 
      preview: "Great news! Our latest campaign exceeded...",
      time: "9:32 AM",
      unread: true,
      important: false
    },
    { 
      from: "John Smith", 
      subject: "Project Timeline Update", 
      preview: "Attached are the updated timelines for...",
      time: "Yesterday",
      unread: false,
      important: false
    },
    { 
      from: "HR Department", 
      subject: "Team Building Event - Friday", 
      preview: "Looking forward to seeing everyone at...",
      time: "Yesterday",
      unread: false,
      important: false
    },
  ]

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <Inbox className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Inbox</span>
          <span className="rounded-full bg-blue-100 dark:bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-600 dark:text-blue-400">
            2 new
          </span>
        </div>
        <button className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700 transition-colors">
          <Send className="h-3 w-3 inline mr-1.5" />
          Compose
        </button>
      </div>

      {/* Email List */}
      <div className="divide-y divide-zinc-200 dark:divide-white/10">
        {emails.map((email, index) => (
          <div 
            key={index} 
            className={cn(
              "px-5 py-3 hover:bg-zinc-50 dark:hover:bg-white/5 cursor-pointer transition-colors",
              email.unread && "bg-blue-50/50 dark:bg-blue-500/5"
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={cn(
                    "text-sm truncate",
                    email.unread ? "font-semibold text-zinc-900 dark:text-white" : "font-medium text-zinc-700 dark:text-zinc-300"
                  )}>
                    {email.from}
                  </span>
                  {email.important && (
                    <span className="text-amber-500">★</span>
                  )}
                </div>
                <div className={cn(
                  "text-sm mb-1 truncate",
                  email.unread ? "font-medium text-zinc-800 dark:text-zinc-200" : "text-zinc-600 dark:text-zinc-400"
                )}>
                  {email.subject}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-500 truncate">
                  {email.preview}
                </div>
              </div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
                {email.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Email Security Features
function SecurityFeatures() {
  const features = [
    { label: "Spam Filter", status: "Active", icon: Shield, color: "green" },
    { label: "Virus Scan", status: "Protected", icon: CheckCircle2, color: "green" },
    { label: "Encryption", status: "TLS 1.3", icon: Shield, color: "green" },
    { label: "2FA Enabled", status: "Verified", icon: CheckCircle2, color: "green" },
  ]

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Security Status</span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <div key={feature.label} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-lg",
                  feature.color === "green" ? "bg-green-100 dark:bg-green-500/10" : "bg-zinc-100 dark:bg-white/5"
                )}>
                  <Icon className={cn(
                    "h-4 w-4",
                    feature.color === "green" ? "text-green-600 dark:text-green-400" : "text-zinc-600 dark:text-zinc-400"
                  )} />
                </div>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{feature.label}</span>
              </div>
              <span className="text-xs font-medium text-green-600 dark:text-green-400">{feature.status}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Mailbox Storage Info
function MailboxStorage() {
  const mailboxes = [
    { name: "info@company.com", used: "2.4 GB", total: "50 GB", percent: 5 },
    { name: "support@company.com", used: "8.7 GB", total: "50 GB", percent: 17 },
    { name: "sales@company.com", used: "15.2 GB", total: "50 GB", percent: 30 },
  ]

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Mailboxes</span>
        </div>
      </div>
      <div className="p-4 space-y-4">
        {mailboxes.map((mailbox) => (
          <div key={mailbox.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{mailbox.name}</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                {mailbox.used} / {mailbox.total}
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-zinc-200 dark:bg-white/10 overflow-hidden">
              <div 
                className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all"
                style={{ width: `${mailbox.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Email Activity Log
function EmailActivity() {
  const activities = [
    { action: "Email sent", user: "info@company.com", time: "2 min ago", icon: Send, color: "blue" },
    { action: "Email received", user: "support@company.com", time: "5 min ago", icon: Mail, color: "green" },
    { action: "Email archived", user: "sales@company.com", time: "12 min ago", icon: Archive, color: "zinc" },
    { action: "Spam blocked", user: "System", time: "18 min ago", icon: AlertCircle, color: "red" },
  ]

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <Clock className="h-4 w-4 text-orange-600 dark:text-orange-400" />
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Recent Activity</span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        {activities.map((activity, index) => {
          const Icon = activity.icon
          return (
            <div key={index} className="flex items-start gap-3">
              <div className={cn(
                "flex h-8 w-8 items-center justify-center rounded-lg flex-shrink-0",
                activity.color === "blue" && "bg-blue-100 dark:bg-blue-500/10",
                activity.color === "green" && "bg-green-100 dark:bg-green-500/10",
                activity.color === "zinc" && "bg-zinc-100 dark:bg-white/5",
                activity.color === "red" && "bg-red-100 dark:bg-red-500/10"
              )}>
                <Icon className={cn(
                  "h-4 w-4",
                  activity.color === "blue" && "text-blue-600 dark:text-blue-400",
                  activity.color === "green" && "text-green-600 dark:text-green-400",
                  activity.color === "zinc" && "text-zinc-600 dark:text-zinc-400",
                  activity.color === "red" && "text-red-600 dark:text-red-400"
                )} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-zinc-800 dark:text-zinc-200">{activity.action}</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">{activity.user}</div>
              </div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 whitespace-nowrap">{activity.time}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const BusinessEmailShowcase = () => {
  return (
    <section className="w-full py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Left Column - Email Inbox */}
          <div className="lg:col-span-8">
            <EmailInbox />
          </div>

          {/* Right Column - Security, Storage & Activity */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <SecurityFeatures />
            <MailboxStorage />
            <EmailActivity />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessEmailShowcase
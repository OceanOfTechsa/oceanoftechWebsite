"use client"
import * as React from "react"
import { GraduationCap, Video, BookOpen, Award, Users, Calendar, Clock, TrendingUp, Target, CheckCircle2 } from 'lucide-react'

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ')
}

// Learning Dashboard
function LearningDashboard() {
  const courses = [
    { 
      title: "React Advanced Patterns", 
      progress: 75, 
      duration: "12 hours",
      module: "Module 4 of 6",
      status: "in-progress",
      icon: Video
    },
    { 
      title: "TypeScript Fundamentals", 
      progress: 100, 
      duration: "8 hours",
      module: "Completed",
      status: "completed",
      icon: CheckCircle2
    },
    { 
      title: "System Design Principles", 
      progress: 45, 
      duration: "16 hours",
      module: "Module 2 of 8",
      status: "in-progress",
      icon: Video
    },
  ]

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Your Learning Path</span>
        </div>
        <button className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">
          Browse Courses
        </button>
      </div>
      <div className="p-4 space-y-4">
        {courses.map((course) => {
          const Icon = course.icon
          return (
            <div key={course.title} className="p-4 rounded-lg border border-zinc-200 dark:border-white/10 hover:border-blue-300 dark:hover:border-blue-500/30 transition-colors cursor-pointer">
              <div className="flex items-start gap-3 mb-3">
                <div className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg flex-shrink-0",
                  course.status === "completed" ? "bg-green-100 dark:bg-green-500/10" : "bg-blue-100 dark:bg-blue-500/10"
                )}>
                  <Icon className={cn(
                    "h-5 w-5",
                    course.status === "completed" ? "text-green-600 dark:text-green-400" : "text-blue-600 dark:text-blue-400"
                  )} />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-1">{course.title}</h4>
                  <div className="flex items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {course.duration}
                    </span>
                    <span>•</span>
                    <span>{course.module}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-600 dark:text-zinc-400">Progress</span>
                  <span className="font-medium text-zinc-900 dark:text-white">{course.progress}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-zinc-200 dark:bg-white/10 overflow-hidden">
                  <div 
                    className={cn(
                      "h-full rounded-full transition-all",
                      course.status === "completed" ? "bg-green-600 dark:bg-green-500" : "bg-blue-600 dark:bg-blue-500"
                    )}
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Upcoming Sessions
function UpcomingSessions() {
  const sessions = [
    { 
      title: "1-on-1 Code Review",
      mentor: "Sarah Johnson",
      date: "Today",
      time: "2:00 PM",
      duration: "60 min",
      type: "mentorship"
    },
    { 
      title: "System Design Workshop",
      mentor: "Mike Chen",
      date: "Tomorrow",
      time: "10:00 AM",
      duration: "90 min",
      type: "workshop"
    },
    { 
      title: "Career Development Chat",
      mentor: "Emily Davis",
      date: "Friday",
      time: "3:00 PM",
      duration: "45 min",
      type: "mentorship"
    },
  ]

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <Calendar className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Upcoming Sessions</span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        {sessions.map((session, index) => (
          <div key={index} className="p-3 rounded-lg border border-zinc-200 dark:border-white/10 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex-1">
                <h5 className="text-sm font-semibold text-zinc-900 dark:text-white mb-1">{session.title}</h5>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">with {session.mentor}</p>
              </div>
              <span className={cn(
                "text-xs px-2 py-1 rounded-full",
                session.type === "mentorship" 
                  ? "bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400"
                  : "bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400"
              )}>
                {session.type}
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {session.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {session.time}
              </span>
              <span>•</span>
              <span>{session.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Learning Stats
function LearningStats() {
  const stats = [
    { label: "Courses Completed", value: "12", icon: Award, color: "green" },
    { label: "Hours Learned", value: "87", icon: Clock, color: "blue" },
    { label: "Mentorship Sessions", value: "24", icon: Users, color: "purple" },
    { label: "Skills Gained", value: "18", icon: TrendingUp, color: "orange" },
  ]

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Your Progress</span>
        </div>
      </div>
      <div className="p-4 grid grid-cols-2 gap-3">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="p-3 rounded-lg bg-zinc-50 dark:bg-white/5">
              <Icon className={cn(
                "h-5 w-5 mb-2",
                stat.color === "green" && "text-green-600 dark:text-green-400",
                stat.color === "blue" && "text-blue-600 dark:text-blue-400",
                stat.color === "purple" && "text-purple-600 dark:text-purple-400",
                stat.color === "orange" && "text-orange-600 dark:text-orange-400"
              )} />
              <div className="text-2xl font-bold text-zinc-900 dark:text-white">{stat.value}</div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">{stat.label}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Skills Progress
function SkillsProgress() {
  const skills = [
    { name: "React Development", level: 85, category: "Advanced" },
    { name: "TypeScript", level: 70, category: "Intermediate" },
    { name: "System Design", level: 60, category: "Intermediate" },
    { name: "Testing & QA", level: 75, category: "Advanced" },
  ]

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <Target className="h-4 w-4 text-orange-600 dark:text-orange-400" />
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Skills Development</span>
        </div>
      </div>
      <div className="p-4 space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-sm font-medium text-zinc-900 dark:text-white">{skill.name}</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">{skill.category}</div>
              </div>
              <span className="text-sm font-semibold text-zinc-900 dark:text-white">{skill.level}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-zinc-200 dark:bg-white/10 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full transition-all"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const TrainingMentorshipShowcase = () => {
  return (
    <section className="w-full py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <LearningDashboard />
          </div>
          <div className="flex flex-col gap-4 lg:col-span-4">
            <UpcomingSessions />
            <LearningStats />
            <SkillsProgress />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrainingMentorshipShowcase
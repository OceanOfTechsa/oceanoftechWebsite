"use client"

import React, { useRef } from "react"
import { 
  Code2, 
  Database, 
  Server, 
  Cloud,
  GitBranch,
  Terminal,
  Layers,
  Box,
  Rocket,
  Shield,
  Workflow
} from 'lucide-react'
import Image from "next/image"
import { AnimatedBeam } from "@/components/ui/shadcn-io/animated-beam"

export function TechStackBeams() {
  const containerRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  
  const refs = Array.from({ length: 8 }, () => useRef<HTMLDivElement>(null))

  return (
    <div 
      className="relative flex w-full items-center justify-center overflow-hidden py-10 sm:py-0"
      ref={containerRef}
    >
      {/* Animated Beams from shadcn */}
      {refs.map((ref, i) => (
        <AnimatedBeam
          key={i}
          containerRef={containerRef}
          fromRef={ref}
          toRef={centerRef}
          duration={4}
          delay={i * 0.4}
        />
      ))}

      {/* Layout: Left icons - Center - Right icons */}
      <div className="relative z-10 flex h-full w-full max-w-4xl items-center justify-between">
        
        {/* Left Side — 4 icons in a compact grid */}
        <div className="grid grid-cols-2 gap-3 md:flex md:flex-col md:gap-8">
          <div ref={refs[0]} className="relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#161618] shadow-sm">
            <Code2 className="h-4 w-4 md:h-5 md:w-5 text-blue-500" />
          </div>
          <div ref={refs[1]} className="relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#161618] shadow-sm">
            <Layers className="h-4 w-4 md:h-5 md:w-5 text-purple-500" />
          </div>
          <div ref={refs[2]} className="relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#161618] shadow-sm">
            <Terminal className="h-4 w-4 md:h-5 md:w-5 text-green-500" />
          </div>
          <div ref={refs[3]} className="relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#161618] shadow-sm">
            <GitBranch className="h-4 w-4 md:h-5 md:w-5 text-orange-500" />
          </div>
        </div>

        {/* Center Hub with glow and ping effects */}
        <div 
          ref={centerRef} 
          className="relative flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full border-2 border-green-500/40 bg-[#161618] shadow-[0_0_60px_rgba(34,197,94,0.35)]"
        >
          {/* Outer ping animation */}
          <div 
            className="absolute inset-0 animate-ping rounded-full border-2 border-green-500/30" 
            style={{ animationDuration: '2s' }} 
          />
          
          {/* Middle pulse animation */}
          <div 
            className="absolute inset-3 md:inset-4 animate-pulse rounded-full border border-green-500/20" 
            style={{ animationDuration: '3s' }} 
          />
          
          {/* Inner glow circle */}
          <div className="absolute inset-5 md:inset-6 rounded-full bg-green-500/10 shadow-[0_0_20px_rgba(34,197,94,0.5)]" />
          
          {/* Logo */}
          <Image
            src="/logo.png"
            width={24}
            height={24}
            quality={100}
            priority
            loading="eager"
            alt="Company logo"
            className="md:w-[28px] md:h-[28px] object-cover animate-spin [animation-duration:4s] relative z-10"
          />
        </div>

        {/* Right Side — 4 icons in a compact grid */}
        <div className="grid grid-cols-2 gap-3 md:flex md:flex-col md:gap-8">
          <div ref={refs[4]} className="relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#161618] shadow-sm">
            <Cloud className="h-4 w-4 md:h-5 md:w-5 text-indigo-500" />
          </div>
          <div ref={refs[5]} className="relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#161618] shadow-sm">
            <Rocket className="h-4 w-4 md:h-5 md:w-5 text-pink-500" />
          </div>
          <div ref={refs[6]} className="relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#161618] shadow-sm">
            <Shield className="h-4 w-4 md:h-5 md:w-5 text-cyan-500" />
          </div>
          <div ref={refs[7]} className="relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#161618] shadow-sm">
            <Workflow className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 md:bottom-6 left-0 right-0 text-center top-2">
        <p className="text-xs md:text-sm font-medium text-white">
          Full-Stack <span className="text-green-500">•</span> Modern <span className="text-green-500">•</span> Scalable <span className="text-green-500">•</span> Secure
        </p>
      </div>
    </div>
  )
}
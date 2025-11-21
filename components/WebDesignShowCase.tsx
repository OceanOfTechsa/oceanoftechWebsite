"use client"
import * as React from "react"
import { Palette, Layout, Smartphone, Monitor, Layers, Figma, Paintbrush, Sparkles } from 'lucide-react'

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ')
}

// Design Mockup Preview
function DesignMockup() {
  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">homepage-design.fig</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 text-xs font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            View Prototype
          </button>
        </div>
      </div>
      
      {/* Mockup Content */}
      <div className="p-6 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700">
          {/* Browser Bar */}
          <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-700">
            <div className="flex gap-1.5">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <div className="h-2 w-2 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 mx-4 bg-white dark:bg-zinc-900 rounded px-3 py-1 text-xs text-zinc-500 dark:text-zinc-400">
              https://yourwebsite.com
            </div>
          </div>
          
          {/* Hero Section Mockup */}
          <div className="p-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            <div className="max-w-2xl">
              <div className="h-4 w-32 bg-white/80 rounded mb-4" />
              <div className="h-8 w-96 bg-white rounded mb-2" />
              <div className="h-8 w-80 bg-white/90 rounded mb-6" />
              <div className="flex gap-3">
                <div className="h-10 w-32 bg-white rounded" />
                <div className="h-10 w-32 bg-white/20 border-2 border-white rounded" />
              </div>
            </div>
          </div>
          
          {/* Features Grid Mockup */}
          <div className="p-8 grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/50">
                <div className="h-10 w-10 bg-blue-200 dark:bg-blue-900 rounded-lg mb-3" />
                <div className="h-3 w-24 bg-zinc-200 dark:bg-zinc-700 rounded mb-2" />
                <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-700 rounded mb-1" />
                <div className="h-2 w-4/5 bg-zinc-200 dark:bg-zinc-700 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Design System Components
function DesignSystem() {
  const components = [
    { name: "Buttons", count: 12, icon: Layers, color: "blue" },
    { name: "Forms", count: 8, icon: Layout, color: "purple" },
    { name: "Cards", count: 15, icon: Layout, color: "green" },
    { name: "Navigation", count: 6, icon: Layout, color: "orange" },
  ]

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <Layers className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Design System</span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        {components.map((component) => {
          const Icon = component.icon
          return (
            <div key={component.name} className="flex items-center justify-between p-3 rounded-lg border border-zinc-200 dark:border-white/10 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg",
                  component.color === "blue" && "bg-blue-100 dark:bg-blue-500/10",
                  component.color === "purple" && "bg-purple-100 dark:bg-purple-500/10",
                  component.color === "green" && "bg-green-100 dark:bg-green-500/10",
                  component.color === "orange" && "bg-orange-100 dark:bg-orange-500/10"
                )}>
                  <Icon className={cn(
                    "h-5 w-5",
                    component.color === "blue" && "text-blue-600 dark:text-blue-400",
                    component.color === "purple" && "text-purple-600 dark:text-purple-400",
                    component.color === "green" && "text-green-600 dark:text-green-400",
                    component.color === "orange" && "text-orange-600 dark:text-orange-400"
                  )} />
                </div>
                <span className="text-sm font-medium text-zinc-900 dark:text-white">{component.name}</span>
              </div>
              <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">{component.count} variants</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Color Palette
function ColorPalette() {
  const colors = [
    { name: "Primary", hex: "#3B82F6", rgb: "59, 130, 246" },
    { name: "Secondary", hex: "#8B5CF6", rgb: "139, 92, 246" },
    { name: "Accent", hex: "#10B981", rgb: "16, 185, 129" },
    { name: "Dark", hex: "#1F2937", rgb: "31, 41, 55" },
  ]

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <Palette className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Color Palette</span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        {colors.map((color) => (
          <div key={color.name} className="flex items-center gap-3">
            <div 
              className="h-12 w-12 rounded-lg shadow-md flex-shrink-0 border border-zinc-200 dark:border-zinc-700"
              style={{ backgroundColor: color.hex }}
            />
            <div className="flex-1">
              <div className="text-sm font-medium text-zinc-900 dark:text-white">{color.name}</div>
              <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                <span className="font-mono">{color.hex}</span>
                <span>•</span>
                <span className="font-mono">RGB {color.rgb}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Typography Styles
function Typography() {
  const styles = [
    { name: "Heading 1", size: "48px", weight: "Bold", example: "Aa" },
    { name: "Heading 2", size: "36px", weight: "Semibold", example: "Aa" },
    { name: "Body", size: "16px", weight: "Regular", example: "Aa" },
    { name: "Caption", size: "14px", weight: "Medium", example: "Aa" },
  ]

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <Paintbrush className="h-4 w-4 text-orange-600 dark:text-orange-400" />
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Typography</span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        {styles.map((style) => (
          <div key={style.name} className="flex items-center justify-between p-3 rounded-lg bg-zinc-50 dark:bg-white/5">
            <div className="flex items-center gap-4">
              <div className="text-3xl font-bold text-zinc-900 dark:text-white w-12 text-center">
                {style.example}
              </div>
              <div>
                <div className="text-sm font-medium text-zinc-900 dark:text-white">{style.name}</div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">
                  {style.size} • {style.weight}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Responsive Preview
function ResponsivePreview() {
  const [device, setDevice] = React.useState<'desktop' | 'tablet' | 'mobile'>('desktop')

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <Monitor className="h-4 w-4 text-green-600 dark:text-green-400" />
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Responsive Design</span>
        </div>
        <div className="flex gap-1 bg-zinc-200/70 dark:bg-white/10 rounded-md p-1">
          <button
            onClick={() => setDevice('desktop')}
            className={cn(
              "p-1.5 rounded transition-all",
              device === 'desktop' 
                ? "bg-white dark:bg-white text-black shadow-sm" 
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
            )}
          >
            <Monitor className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => setDevice('tablet')}
            className={cn(
              "p-1.5 rounded transition-all",
              device === 'tablet' 
                ? "bg-white dark:bg-white text-black shadow-sm" 
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
            )}
          >
            <Layout className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => setDevice('mobile')}
            className={cn(
              "p-1.5 rounded transition-all",
              device === 'mobile' 
                ? "bg-white dark:bg-white text-black shadow-sm" 
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
            )}
          >
            <Smartphone className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
      
      <div className="p-8 bg-zinc-50 dark:bg-zinc-900/50 flex items-center justify-center min-h-[300px]">
        <div className={cn(
          "bg-white dark:bg-zinc-900 rounded-lg shadow-2xl border border-zinc-200 dark:border-zinc-700 transition-all duration-300",
          device === 'desktop' && "w-full h-64",
          device === 'tablet' && "w-2/3 h-64",
          device === 'mobile' && "w-64 h-80"
        )}>
          <div className="h-full p-4 space-y-3">
            <div className="h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded" />
            <div className="space-y-2">
              <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4" />
              <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded w-full" />
              <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded w-5/6" />
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="h-16 bg-zinc-100 dark:bg-zinc-800 rounded" />
              <div className="h-16 bg-zinc-100 dark:bg-zinc-800 rounded" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-5 py-3 border-t border-zinc-300/60 dark:border-white/10 bg-zinc-50/90 dark:bg-white/5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-zinc-600 dark:text-zinc-400">
            {device === 'desktop' && 'Desktop • 1920x1080'}
            {device === 'tablet' && 'Tablet • 768x1024'}
            {device === 'mobile' && 'Mobile • 375x812'}
          </span>
          <span className="text-green-600 dark:text-green-400 font-medium">✓ Optimized</span>
        </div>
      </div>
    </div>
  )
}

// Design Tools
function DesignTools() {
  const tools = [
    { name: "Figma", status: "Connected", icon: Figma, color: "purple" },
    { name: "Prototyping", status: "Ready", icon: Sparkles, color: "blue" },
    { name: "Assets", status: "Synced", icon: Layers, color: "green" },
  ]

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <Figma className="h-4 w-4 text-pink-600 dark:text-pink-400" />
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Design Tools</span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        {tools.map((tool) => {
          const Icon = tool.icon
          return (
            <div key={tool.name} className="flex items-center justify-between p-3 rounded-lg border border-zinc-200 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-lg",
                  tool.color === "purple" && "bg-purple-100 dark:bg-purple-500/10",
                  tool.color === "blue" && "bg-blue-100 dark:bg-blue-500/10",
                  tool.color === "green" && "bg-green-100 dark:bg-green-500/10"
                )}>
                  <Icon className={cn(
                    "h-4 w-4",
                    tool.color === "purple" && "text-purple-600 dark:text-purple-400",
                    tool.color === "blue" && "text-blue-600 dark:text-blue-400",
                    tool.color === "green" && "text-green-600 dark:text-green-400"
                  )} />
                </div>
                <span className="text-sm font-medium text-zinc-900 dark:text-white">{tool.name}</span>
              </div>
              <span className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-green-600 dark:bg-green-400" />
                {tool.status}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const WebDesignShowcase = () => {
  return (
    <section className="w-full py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-4">
            <DesignMockup />
            <ResponsivePreview />
          </div>
          <div className="flex flex-col gap-4 lg:col-span-4">
            <DesignSystem />
            <ColorPalette />
            <Typography />
            <DesignTools />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebDesignShowcase;
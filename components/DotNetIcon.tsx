import React from "react";

export function DotNetIcon({ className = "h-4 w-4", color = "currentColor" }: { className?: string, color?: string }) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Circle background */}
        <circle cx="12" cy="12" r="10" fill="#512BD4" />
        {/* .NET text */}
        <text
          x="12"
          y="15"
          fontSize="8"
          fontWeight="bold"
          fill="white"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
        >
          .NET
        </text>
      </svg>
    )
  }
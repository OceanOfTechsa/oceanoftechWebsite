import React from "react";

export interface AnimatedSectionProps {
    children: React.ReactNode
    className?: string
    delay?: number
    direction?: "up" | "down" | "left" | "right"
    once?: boolean
}
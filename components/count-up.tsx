"use client";

import {useState, useEffect} from "react"

interface CountUpProps {
    start?: number
    end: number
    duration?: number
    decimals?: number
}

export default function CountUp({start = 0, end, duration = 2, decimals = 0}: CountUpProps) {
    const [count, setCount] = useState(start)

    useEffect(() => {
        let startTime: number
        let animationFrame: number

        const countUp = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

            setCount(progress * (end - start) + start)

            if (progress < 1) {
                animationFrame = requestAnimationFrame(countUp)
            }
        }

        animationFrame = requestAnimationFrame(countUp)

        return () => cancelAnimationFrame(animationFrame)
    }, [start, end, duration])

    const formatNumber = (num: number) => {
        return num.toLocaleString("en-ZA", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
        })
    }

    return <>{formatNumber(count)}</>
}

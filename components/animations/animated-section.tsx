"use client"

import {useEffect, useState} from "react"
import {motion} from "framer-motion"
import {AnimatedSectionProps} from "@/Shared/IAnimatedSectionsProps";

export default function AnimatedSection({
                                            children,
                                            className = "",
                                            delay = 0,
                                            direction = "up",
                                            once = true,
                                        }: AnimatedSectionProps) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return <div className={className}>{children}</div>

    const getDirectionValues = () => {
        switch (direction) {
            case "up":
                return {initial: {y: 50}, animate: {y: 0}}
            case "down":
                return {initial: {y: -50}, animate: {y: 0}}
            case "left":
                return {initial: {x: 50}, animate: {x: 0}}
            case "right":
                return {initial: {x: -50}, animate: {x: 0}}
            default:
                return {initial: {y: 50}, animate: {y: 0}}
        }
    }

    const {initial, animate} = getDirectionValues()

    return (
        <motion.div
            className={className}
            initial={{...initial, opacity: 0}}
            whileInView={{...animate, opacity: 1}}
            transition={{duration: 0.5, delay}}
            viewport={{once}}
        >
            {children}
        </motion.div>
    )
}


"use client"

import {useEffect, useState} from "react";
import {motion} from "framer-motion";

interface animatedIconProps {
    icon: string;
}

export default function AnimatedIcon({icon}: animatedIconProps) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return <span>{icon}</span>

    return (
        <motion.span
            animate={{
                rotate: [0, -10, 10, -10, 0],
                y: [0, -2, 0, -2, 0],
            }}
            transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
                repeatDelay: 3,
            }}
            className="inline-block"
        >
            {icon}
        </motion.span>
    )
}

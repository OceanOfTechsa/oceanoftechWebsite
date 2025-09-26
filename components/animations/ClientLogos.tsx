"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const logos = [
    "/Logo.svg",
    "/code.webp",
    "/hero.jpg",
    "/menu-blog.jpg",
    "/01.jpg",
    "/06.jpg",
];

export default function ClientSlider() {
    const controls = useAnimation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // autoplay effect
    useEffect(() => {
        if (isHovered) return; // pause on hover

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % Math.ceil(logos.length));
        }, 2500); // pause duration

        return () => clearInterval(interval);
    }, [isHovered]);

    useEffect(() => {
        controls.start({
            x: `-${activeIndex * 160}px`, // adjust logo width + spacing
            transition: { duration: 0.6, ease: "easeInOut" },
        });
    }, [activeIndex, controls]);

    return (
        <div
            className="relative w-full overflow-hidden mb-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Track */}
            <motion.div
                drag="x"
                dragConstraints={{ left: -logos.length * 160, right: 0 }}
                animate={controls}
                className="flex items-center gap-7"
            >
                {logos.map((src, i) => (
                    <div
                        key={i}
                        className="w-[141.5px] flex-shrink-0 flex justify-center"
                    >
                        <Image src={src} className="h-15 w-15 object-cover rounded-full" alt={`client-${i}`} width={18} height={18} quality={100} loading="lazy"/>
                    </div>
                ))}
            </motion.div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-2 gap-2 pb-5">
                {logos.map((_, i) => (
                    <div
                        key={i}
                        className={`h-2 rounded-full transition-all ${
                            i === activeIndex
                                ? "w-6 bg-[#09b850]"
                                : "w-2 bg-gray-400"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

"use client";

import Image from "next/image";
import { motion, MotionValue, useMotionValue } from "framer-motion";
import React, {JSX, RefObject, useEffect, useRef, useState} from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import TypedText from "@/components/animations/TypedText";

const TrustedBySection = (): JSX.Element => {
    const logos: {src: string; url: string}[] = [
        { src: "/clients/the-success-company-logo.webp", url: "https://successco.co.za/" },
        { src: "/clients/ifind101-logo.webp", url: "https://ifind101.com/" },
        { src: "/clients/ncukumanedigital.webp", url: "https://www.ncukumanedigital.com/" },
    ];

    const repeatedLogos: {src: string; url: string}[] = [...logos, ...logos, ...logos];
    const x : MotionValue<number> = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const frameRef: RefObject<number | null> = useRef<number>(null);
    const containerRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const innerRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const [constraints, setConstraints] = useState({ left: 0, right: 0 });

    useEffect((): void => {
        if (containerRef.current && innerRef.current) {
            const containerWidth: number = containerRef.current.offsetWidth;
            const innerWidth: number = innerRef.current.scrollWidth;
            const maxDrag: number = containerWidth - innerWidth;
            setConstraints({ left: maxDrag, right: 0 });
        }
    }, []);

    useEffect((): () => void => {
        const step: () => void = () => {
            if (!isHovered) {
                x.set(x.get() - 0.5);
                const resetPoint = -(logos.length * 140);
                if (x.get() <= resetPoint) {
                    x.set(0);
                }
            }
            frameRef.current = requestAnimationFrame(step);
        };
        frameRef.current = requestAnimationFrame(step);
        return (): void => cancelAnimationFrame(frameRef.current!);
    }, [isHovered, logos.length, x]);

    return (
        <section className="mx-auto my-24">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-10">
                {/* Heading on top for mobile, side-by-side for desktop */}
                <h2 className="text-[#606261] dark:text-[#c4c5c7] text-xl md:text-2xl font-bold md:pr-5 md:border-r border-[#0B9944]/70 text-center md:text-left leading-snug">
                    Join over 3+
                    {" "}companies{" "} <br className="hidden md:block" />
                    <br className="md:hidden" />
                    <span className="text-[#0B9944] dark:text-[#09b850] font-bold inline">
                       Working
                    </span>{" "}
                    with us
                </h2>

                {/* Logos with fade edges */}
                <div
                    className="relative flex-1 cursor-grab active:cursor-grabbing overflow-hidden w-full max-w-full"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Fading edges */}
                    <div className="pointer-events-none absolute top-0 left-0 w-12 sm:w-16 h-full bg-gradient-to-r from-[#fff] via-[#fff]/80 to-transparent dark:from-[#161618] dark:via-[#161618]/80 dark:to-transparent z-10" />
                    <div className="pointer-events-none absolute top-0 right-0 w-12 sm:w-16 h-full bg-gradient-to-l from-[#fff] via-[#fff]/80 to-transparent dark:from-[#161618] dark:via-[#161618]/80 dark:to-transparent z-10" />

                    <motion.div
                        className="flex space-x-4 sm:space-x-5 w-2 md:w-max"
                        style={{ x }}
                        drag="x"
                        dragConstraints={constraints}
                        dragElastic={0.2}
                    >
                        {repeatedLogos.map((logo, idx) => (
                            <div key={idx} className="relative flex-shrink-0 w-20 sm:w-28 h-16 sm:h-20 flex items-center justify-center group">
                                <Link
                                    href={logo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block relative"
                                >
                                    <Image
                                        src={logo.src}
                                        loading="lazy"
                                        quality={75}
                                        alt="Company logo"
                                        width={80}
                                        height={80}
                                        className="object-contain w-16 h-16 sm:w-20 sm:h-20 rounded-full grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBySection;

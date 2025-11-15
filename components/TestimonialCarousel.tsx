"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { GoStarFill } from "react-icons/go";
import Image from "next/image";
import AppSettings from "@/Oceanoftech.Business/ConfigurationBusiness/AppSettings";

export default function TestimonialCarousel() {
    const [page, setPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(2); // 👈 responsive

    // Detect screen size
    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1); // 👈 show 1 on mobile
            } else {
                setItemsPerPage(2); // 👈 show 2 on md+
            }
        };

        updateItemsPerPage(); // run once
        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    const totalPages = Math.ceil(AppSettings.Reviews.length / itemsPerPage);

    const [paused, setPaused] = useState(false);

    // Auto-scroll
    useEffect(() => {
        if (paused) return;
        const interval = setInterval(() => {
            setPage((prev) => (prev + 1) % totalPages);
        }, 4000);
        return () => clearInterval(interval);
    }, [paused, totalPages]);

    const currentItems = AppSettings.Reviews.slice(
        page * itemsPerPage,
        page * itemsPerPage + itemsPerPage
    );

    return (
        <div
            className="w-full max-w-5xl mx-auto select-none"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <motion.div
                key={page}
                drag="x"
                dragConstraints={{ left: -50, right: 50 }}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[200px] relative"
            >
                {currentItems.map((review, i) => (
                    <div key={i} className="flex-shrink-0 basis-[85%] md:basis-[48%] lg:basis-[45%] p-3 rounded-2xl bg-white dark:bg-[#202124] shadow-md">
                        {/* Rating */}
                        <div className="flex gap-1 text-yellow-400 mb-3">
                            {Array.from({ length: review.rating }).map((_, idx) => (
                                <GoStarFill key={idx} />
                            ))}
                        </div>

                        {/* Review text */}
                        <p className="text-gray-800 dark:text-gray-200 mb-4 leading-relaxed line-clamp-3">
                            {review.details}
                        </p>

                        {/* User info */}
                        <div className="flex items-center gap-3">
                            <Image
                                src={review.avatar}
                                className="w-10 h-10 rounded-full object-cover"
                                alt={review.name}
                                title="review photo"
                                placeholder="blur"
                                blurDataURL="/menu-blog.jpg"
                                width={600}
                                height={600}
                                quality={100}
                            />
                            <div>
                                <span className="text-gray-900 dark:text-white font-medium block">
                                  {review.title} {review.surname}
                                </span>
                                <span className="text-sm text-gray-500 hidden">{review.date}</span>
                            </div>
                        </div>
                    </div>
                ))}

                {/* If only one review is visible, show a "Leave a Review" card */}
                {currentItems.length === 1 && (
                    <div className="hidden md:flex-shrink-0 basis-[85%] md:basis-[48%] lg:basis-[45%] p-3 rounded-2xl bg-white dark:bg-[#202124] shadow-md md:flex flex-col items-center justify-center text-center">
                        <h5 className=" text-xl font-bold hover:text-[#09b850] mb-3 text-white">
                            <Image src="/emoji.png" width={38} height={39} alt="thinking emoji" loading="lazy" priority={false} quality={100}/>
                        </h5>
                        <p className="text-gray-800 dark:text-gray-200 mb-4 leading-relaxed font-semibold">
                            Want to share your experience?
                        </p>
                        <Link href="https://g.page/r/CU3CZKX3tetcEAE/review" target="_blank" className="bg-[#09b850] text-white px-4 py-2 rounded-sm font-medium hover:bg-[#08a648] transition">
                            Leave a Review
                        </Link>
                    </div>
                )}

                {/* Fading edges */}
                <div className="pointer-events-none absolute top-0 left-0 w-10 sm:w-14 h-full bg-gradient-to-r from-white via-white/50 to-transparent dark:from-[#161618] dark:via-[#161618]/50 dark:to-transparent z-10" />
                <div className="pointer-events-none absolute top-0 right-0 w-10 sm:w-14 h-full bg-gradient-to-l from-white via-white/50 to-transparent dark:from-[#161618] dark:via-[#161618]/50 dark:to-transparent z-10" />
            </motion.div>

            {/* Pagination + Link */}
            <div className="flex gap-2 mt-5 w-full justify-between items-center">
                {/* Dots */}
                <div
                    className={`
                        flex gap-2
                        ${totalPages > 10 && "hidden md:flex"}
                        ${totalPages > 50 && "hidden"}
                  `}
                >
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setPage(idx)}
                            className={`h-2 rounded-full transition-all cursor-pointer ${
                                idx === page
                                    ? "bg-green-500 w-6"
                                    : "bg-gray-300 dark:bg-gray-600 w-2"
                            }`}
                        />
                    ))}
                </div>


                {/* Link */}
                <Link href="https://g.page/r/CU3CZKX3tetcEAE/review" target="_blank" className="text-[#09b850] flex items-center gap-2 font-semibold group mr-6"
                >
                    Read more
                    <MoveRight className="group-hover:translate-x-1 transition duration-150 ease-in-out" />
                </Link>
            </div>
        </div>
    );
}

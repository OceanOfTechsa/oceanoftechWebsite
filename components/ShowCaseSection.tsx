"use client";

import { IoMicOutline } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { HiPhoneMissedCall } from "react-icons/hi";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

const ShowCaseSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [showMissedCall, setShowMissedCall] = useState(false);

    const handleCallClick = () => {
        setShowMissedCall(true); // Show the missed call button
    };

    return (
        <div className="px-3 sm:p-0">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative rounded-lg border dark:border-card bg-white/10 backdrop-blur p-1 shadow-lg container mx-auto mt-20 mb-16 sm:mb-32"
            >
                <div className="text-green-500 mb-2 mt-5 me-1">
                    <svg
                        className="-mt-4 justify-self-end"
                        width="40"
                        height="10"
                        viewBox="0 0 40 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5Z"
                            fill="currentColor"
                        ></path>
                        <path
                            d="M25 5C25 7.76142 22.7614 10 20 10C17.2386 10 15 7.76142 15 5C15 2.23858 17.2386 0 20 0C22.7614 0 25 2.23858 25 5Z"
                            fill="yellow"
                        ></path>
                        <path
                            d="M40 5C40 7.76142 37.7614 10 35 10C32.2386 10 30 7.76142 30 5C30 2.23858 32.2386 0 35 0C37.7614 0 40 2.23858 40 5Z"
                            fill="red"
                        ></path>
                    </svg>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 rounded-sm overflow-hidden">
                    <div className="sm:col-span-5 relative">
                        <Image
                            src="/SHOT.jpg"
                            alt="call showcase"
                            className="w-full h-full object-cover"
                            width={503}
                            height={566}
                            loading="eager"
                            quality={100}
                            priority={false}
                        />
                        <div className="absolute inset-0 flex flex-col">
                            <ul className="flex gap-3 mb-1 mt-auto mx-auto">
                                <li>
                                    <button className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-700 shadow">
                                        <IoMicOutline size={25} />
                                    </button>
                                </li>
                                <li>
                                    <button className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-700 shadow">
                                        <CiVideoOn size={25} />
                                    </button>
                                </li>
                                {showMissedCall ? (
                                    <li>
                                        <button
                                            className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white shadow"
                                        >
                                            <HiPhoneMissedCall size={25} />
                                        </button>
                                    </li>
                                ) : (
                                    <li>
                                        <button
                                            className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white shadow"
                                            onClick={handleCallClick}
                                        >
                                            <a href="tel:+1234567890" className="flex items-center justify-center w-full h-full">
                                                <IoCall />
                                            </a>
                                        </button>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <Image
                        src="/coder.jpg"
                        alt="Code showcase"
                        className="w-full object-cover sm:col-span-7 h-full"
                        width={503}
                        height={570}
                        loading="eager"
                        quality={100}
                        priority={false}
                    />
                </div>
            </motion.div>
        </div>
    );
};
export default ShowCaseSection;
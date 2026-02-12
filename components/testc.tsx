"use client";

import Image from "next/image";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import React, { JSX } from "react";
import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AppSettings from "@/Oceanoftech.Business/ConfigurationBusiness/AppSettings";
import {IReview} from "@/Shared/IReview";

const Testimonials = (): JSX.Element => {

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const imageVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section ref={ref} className="bg-[#f8f8f8] dark:bg-[#292a2d] mt-16">
            <div className="max-w-7xl mx-auto px-4 md:px-0 mt-5 py-16">
                <motion.div
                    className="grid lg:grid-cols-12 gap-10 items-center mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <motion.div
                        className="lg:col-span-4"
                        variants={containerVariants}
                    >
                        <div className="grid grid-col-1 md:grid-col-2 items-start gap-6 pe-0 xl:pe-10">
                            <motion.div
                                className="col-span-7"
                                variants={imageVariants}
                                transition={{ delay: 0.4 }}
                            >

                                <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-3xl mb-6">
                                    Why our customers love {AppSettings.COMPANY_NAME}
                                </h2>

                                <p className="text-lg max-w-2xl">
                                    10+ People rated us <span className="text-amber-500">4.95</span> out of 5.
                                </p>
                               <div className="flex -space-x-3 mb-10">
                                   {AppSettings.Reviews.slice(0, 6).map((review: IReview): JSX.Element => (
                                       <img
                                           key={`${review.name}-${review.surname}`}
                                           src={review.avatar}
                                           alt={`${review.title} ${review.name} ${review.surname}`}
                                           title={`${review.title} ${review.name} ${review.surname}`}
                                           className="w-10 h-10 rounded-full border object-cover"
                                       />
                                   ))}
                               </div>
                            </motion.div>

                            <motion.div
                                className="sm:col-span-1 hidden"
                                variants={itemVariants}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="flex gap-4 mb-4">
                                    <div className="w-full">
                                        <div className="bg-[#202124] rounded-md text-white text-center p-3 w-full">
                                            <span className="text-5xl font-bold">10+</span>
                                            <p className="mt-1">Years of <br/>experience</p>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="bg-[#0B9944] rounded-md text-center p-3 w-full">
                                            <span className="text-5xl font-bold text-white">1.2K</span>
                                            <p className="mt-1 text-white">Happy <br/>customers</p>
                                        </div>
                                    </div>
                                </div>
                                <Image
                                    src="/HomeAboutSection2.jpg"
                                    className="rounded-lg"
                                    alt="about-img-2"
                                    width={330}
                                    height={480}
                                    loading="lazy"
                                    quality={75}
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-8 overflow-hidden"
                        variants={containerVariants}
                    >
                        <motion.div
                            variants={itemVariants}
                            transition={{ delay: 0.3 }}
                        >
                            <TestimonialCarousel shadesBg="#f8f8f8" showFullCard={true}/>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
export default Testimonials;
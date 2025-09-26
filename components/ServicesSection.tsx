"use client";

import AnimatedIcon from "@/components/animations/animatedIcon";
import { motion, useInView, type Variants } from "framer-motion";
import { CodeXml, Headset, Mails, MoveRight, Search, Server } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { BsCircleSquare, BsVectorPen } from "react-icons/bs";


// Animation variants
const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const ServicesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return (
        <section className="bg-[#202124] min-w-full mt-20 py-24 text-center text-white flex flex-col items-center justify-center relative">
            <span className="inline-block bg-[#292a2d] text-sm rounded-md font-semibold px-3 py-2">
                <AnimatedIcon icon="🚀" /> Innovative solutions, Measurable results
            </span>

            <div className="w-full px-0 sm:px-96 lg:px-0 mt-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
                    We specialize in the following <br/>services
                </h2>
            </div>

            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="mt-20 grid grid-cols-1 sm:grid-cols-4 items-center justify-center px-4 sm:p-0 w-full gap-6 max-w-7xl mx-auto"
            >
                {/* Web Development */}
                <motion.div
                    variants={cardVariants}
                    className="relative p-4 rounded-md bg-[#292a2d] flex flex-col justify-start items-start gap-3"
                >
                    <div className="bg-white absolute top-0 -mt-5 rounded-full p-3 left-0 ml-6 text-[#09b850]">
                        <CodeXml />
                    </div>
                    <div className="group mt-8 flex flex-col items-start text-start">
                        <h3 className=" text-xl font-bold hover:text-[#09b850] mb-3 text-white">
                            <Link href="/services/web-development">Web Development</Link>
                        </h3>
                        <p className="w-full text-start mb-3 text-[#c4c5c7]">
                            Building and maintaining websites and web applications.
                        </p>
                        <Link
                            href="/services/web-development"
                            className="text-[#09b850] flex items-center gap-2 font-semibold"
                        >
                            Know more{" "}
                            <MoveRight className="group-hover:text-[#09b850] group-hover:translate-x-1 transition duration-150 ease-in-out" />
                        </Link>
                    </div>
                </motion.div>

                {/* Hosting */}
                <motion.div
                    variants={cardVariants}
                    className="relative p-4 rounded-md bg-[#292a2d] flex flex-col justify-start items-start gap-3"
                >
                    <div className="bg-white absolute top-0 -mt-5 rounded-full p-3 left-0 ml-6 text-[#09b850]">
                        <Server />
                    </div>
                    <div className="group mt-8 flex flex-col items-start text-start">
                        <h3 className=" text-xl font-bold hover:text-[#09b850] mb-3 text-white">
                            <Link href="/services/hosting">Hosting</Link>
                        </h3>
                        <p className="w-full text-start mb-3 text-[#c4c5c7]">
                            Fast, secure, and reliable hosting solutions tailored to your needs.
                        </p>
                        <Link
                            href="/services/hosting"
                            className="text-[#09b850] flex items-center gap-2 font-semibold"
                        >
                            Know more{" "}
                            <MoveRight className="group-hover:text-[#09b850] group-hover:translate-x-2 transition duration-150 ease-in-out" />
                        </Link>
                    </div>
                </motion.div>

                {/* Web Design */}
                <motion.div
                    variants={cardVariants}
                    className="relative p-4 rounded-md bg-[#292a2d] flex flex-col justify-start items-start gap-3"
                >
                    <div className="bg-white absolute top-0 -mt-5 rounded-full p-3 left-0 ml-6 text-[#09b850] flex items-center justify-center">
                        <BsCircleSquare size={25} />
                    </div>
                    <div className="group mt-8 flex flex-col items-start text-start">
                        <h3 className=" text-xl font-bold hover:text-[#09b850] mb-3 text-white">
                            <Link href="/services/web-design">Web Design</Link>
                        </h3>
                        <p className="w-full text-start mb-3 text-[#c4c5c7]">
                            Designing websites that are visually appealing & user-friendly.
                        </p>
                        <Link
                            href="/services/web-design"
                            className="text-[#09b850] flex items-center gap-2 font-semibold"
                        >
                            Know more{" "}
                            <MoveRight className="group-hover:text-[#09b850] translate-x-2 transition duration-150 ease-in-out" />
                        </Link>
                    </div>
                </motion.div>

                {/* UI/UX Design */}
                <motion.div
                    variants={cardVariants}
                    className="relative p-4 rounded-md bg-[#292a2d] flex flex-col justify-start items-start gap-3"
                >
                    <div className="bg-white absolute top-0 -mt-5 rounded-full p-3 left-0 ml-6 text-[#09b850] flex items-center justify-center">
                        <BsVectorPen size={25} />
                    </div>
                    <div className="group mt-8 flex flex-col items-start text-start">
                        <h3 className=" text-xl font-bold hover:text-[#09b850] mb-3 text-white">
                            <Link href="/services/ui-ux-design">UI/UX Design</Link>
                        </h3>
                        <p className="w-full text-start mb-3 text-[#c4c5c7]">
                            Creating user interfaces that are both efficient and enjoyable.
                        </p>
                        <Link
                            href="/services/ui-ux-design"
                            className="text-[#09b850] flex items-center gap-2 font-semibold"
                        >
                            Know more{" "}
                            <MoveRight className="group-hover:text-[#09b850] translate-x-2 transition duration-150 ease-in-out" />
                        </Link>
                    </div>
                </motion.div>

                {/* Business Emails */}
                <motion.div
                    variants={cardVariants}
                    className="mt-10 relative p-4 rounded-md bg-[#292a2d] flex flex-col justify-start items-start gap-3"
                >
                    <div className="bg-white absolute top-0 -mt-5 rounded-full p-3 left-0 ml-6 text-[#09b850] flex items-center justify-center">
                        <Mails />
                    </div>
                    <div className="group mt-8 flex flex-col items-start text-start">
                        <h5 className=" text-xl font-bold hover:text-[#09b850] mb-3 text-white">
                            <Link href="/services/business-emails">Business Emails</Link>
                        </h5>
                        <p className="w-full text-start mb-3 text-[#c4c5c7]">
                            Professional and secure business email solutions that boost
                            credibility.
                        </p>
                        <Link
                            href="/services/business-emails"
                            className="text-[#09b850] flex items-center gap-2 font-semibold"
                        >
                            Know more{" "}
                            <MoveRight className="group-hover:text-[#09b850] translate-x-2 transition duration-150 ease-in-out" />
                        </Link>
                    </div>
                </motion.div>

                {/* SEO */}
                <motion.div
                    variants={cardVariants}
                    className="mt-10 relative p-4 rounded-md bg-[#292a2d] flex flex-col justify-start items-start gap-3"
                >
                    <div className="bg-white absolute top-0 -mt-5 rounded-full p-3 left-0 ml-6 text-[#09b850] flex items-center justify-center">
                        <Search />
                    </div>
                    <div className="group mt-8 flex flex-col items-start text-start">
                        <h5 className=" text-xl font-bold hover:text-[#09b850] mb-3 text-white">
                            <Link href="/services/seo">Search Engine Optimization</Link>
                        </h5>
                        <p className="w-full text-start mb-3 text-[#c4c5c7]">
                            Boost your visibility with targeted SEO strategies, driving traffic
                            and maximizing reach.
                        </p>
                        <Link
                            href="/services/seo"
                            className="text-[#09b850] flex items-center gap-2 font-semibold"
                        >
                            Know more{" "}
                            <MoveRight className="group-hover:text-[#09b850] translate-x-2 transition duration-150 ease-in-out" />
                        </Link>
                    </div>
                </motion.div>

                {/* Maintenance and Support */}
                <motion.div
                    variants={cardVariants}
                    className="mt-10 relative p-4 rounded-md bg-[#292a2d] flex flex-col justify-start items-start gap-3"
                >
                    <div className="bg-white absolute top-0 -mt-5 rounded-full p-3 left-0 ml-6 text-[#09b850] flex items-center justify-center">
                        <Headset />
                    </div>
                    <div className="group mt-8 flex flex-col items-start text-start">
                        <h5 className=" text-xl font-bold hover:text-[#09b850] mb-3 text-white">
                            <Link href="/services/maintenance-and-support">Maintenance and Support</Link>
                        </h5>
                        <p className="w-full text-start mb-3 text-[#c4c5c7]">
                            Building strong brand identities that connect with your audience. our audience.our audience.
                        </p>
                        <Link
                            href="/services/maintenance-and-support"
                            className="text-[#09b850] flex items-center gap-2 font-semibold"
                        >
                            Know more{" "}
                            <MoveRight className="group-hover:text-[#09b850] translate-x-2 transition duration-150 ease-in-out" />
                        </Link>
                    </div>
                </motion.div>

                {/* Photography */}
                <motion.div variants={cardVariants} className="mt-10">
                    <div className="mt-8 flex flex-col items-center text-center">
                        <h5 className=" text-xl font-bold hover:text-[#09b850] mb-3 text-white">
                            <Image src="/emoji.png" width={38} height={39} alt="thinking emoji" loading="lazy" priority={false} quality={100}/>
                        </h5>
                        <p className="w-full mb-3 text-[#c4c5c7]">
                            Not satisfied yet?
                        </p>

                        <Link href="/services" className="w-full bg-[#09b850] hover:bg-[#0B9944] text-white px-[1rem] py-[0.5rem] rounded-sm inline-block transition-all duration-500 ease-in-out">
                            Discover more
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
export default ServicesSection;

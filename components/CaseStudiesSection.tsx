import React from "react";
import Link from "next/link";
import Image from "next/image";
import {MoveRight} from "lucide-react";

const CaseStudiesSection = () => {
    const portfolioData = [
        {
            id: 1,
            title: "Website Optimization for TechWave",
            description: "The most powerful software & app landing software marketing business.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
            clientLogo: "/clients/ifind101-logo.webp",
            badges: ["Branding", "Packaging", "Development"],
            link: "#"
        },
        {
            id: 2,
            title: "Transforming Ideas into Reality",
            description: "The most powerful software & app landing software marketing business.",
            image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
            clientLogo: "/clients/ncukumanedigital.webp",
            badges: ["UI/UX design", "Research"],
            link: "#"
        },
        {
            id: 3,
            title: "Bio Cosmetics",
            description: "The most powerful software & app landing software marketing business.",
            image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop",
            clientLogo: "/clients/the-success-company-logo.webp",
            badges: ["Branding", "UI/UX design"],
            link: "#"
        }
    ];
    return (
        <section className="bg-[#f8f8f8] dark:bg-[#292a2d] py-16 lg:py-18">
            <div className="max-w-7xl mx-auto px-4 sm:px-0">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className="text-[2.75rem] font-bold mb-3">Case studies</h2>
                    <p className="text-[#606261] dark:text-[#c4c5c7]">
                        Discover a selection of our most recent client projects, showcasing our expertise, creativity, and commitment to delivering outstanding results.
                    </p>
                </div>

                <div className="mx-auto mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
                        {portfolioData.map((item) => (
                            <Link href={item.link} key={item.id} className="w-full max-w-md">
                                <div className="bg-white dark:bg-[#202124] rounded-sm overflow-hidden group transition-shadow duration-300">
                                    <div className="relative overflow-hidden h-80">
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                            <div className="absolute inset-0 bg-black/50"></div>
                                            <img
                                                src={item.clientLogo}
                                                alt="client logo"
                                                className="h-10 object-contain relative z-10 brightness-0 invert"
                                            />
                                        </div>
                                        {/* Portfolio Image */}
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform group-hover:scale-103 ease-in-out transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-6">
                                        <h6 className="text-xl font-semibold  mb-2">
                                            {item.title}
                                        </h6>
                                        <p className="mb-4">
                                            {item.description}
                                        </p>

                                        {/* Badge List */}
                                        <div className="flex flex-wrap gap-2 mb-5">
                                            {item.badges.map((badge, index) => (
                                                <span key={index} className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#292a2d] border rounded-[0.2rem]">
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>

                                        <span className="inline-flex items-center text-base font-medium transition-colors duration-500 ease-in-out group-hover:text-[#09b850]">
                                            View case study
                                            <svg
                                                className="w-4 h-4 ml-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="w-full max-w-7xl mx-auto mt-18 flex items-center justify-center">
                    <Link href="/case-studies" className=" bg-[#202124] hover:bg-[#3c3e41] text-white px-[1rem] py-[0.6rem] rounded-[0.2rem] inline-flex font-semibold items-center transition-all duration-500 ease-in-out">
                        Explore All Case studies
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesSection;

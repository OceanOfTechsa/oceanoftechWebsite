"use client"

import Link from 'next/link';
import React, { useRef } from 'react'
import { FiChevronRight } from 'react-icons/fi';
import { GoDotFill } from 'react-icons/go';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
// import { Metadata } from "next";
import CaseStudiesList from '@/components/CaseStudies';
import { caseStudies } from '@/data/caseStudies';

// export const metadata: Metadata = {
//     title: "Portfolio Showcase"
// };

const PortfolioPage = (): React.JSX.Element => {
  const caseStudiesRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full max-w-7xl xl:py-20 pb-0 mt-10 sm:mt-0 px-4 md:px-0">
        <section className="flex flex-col md:flex-row w-full justify-between items-start md:gap-56">
            <div className="w-full flex flex-col items-start justify-start">
                <nav className="mb-3" aria-label="breadcrumb">
                    <ol className="flex items-center gap-2 pt-0">
                        <li className="hover:text-[#0b9944] dark:hover:text-[#09b850] transition-colors duration-500 ease-in-out">
                            <Link href="/">Home</Link>
                        </li>
                        <GoDotFill size={10} className="mt-1"/>
                        <li className="text-[#0B9944] dark:text-[#09b850]" aria-current="page">Portfolio Showcase</li>
                    </ol>
                </nav>

                <h1 className="text-4xl md:text-[3rem] font-black leading-tight">
                    Our Work in Action
                </h1>
            </div>
            <div className="w-full flex flex-col md:justify-end items-start mb-10">
                <p className="mt-5 text-[#606261] dark:text-[#c4c5c7] font-normal text-lg">
                    The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
                </p>
                <div className="bg-[#F8F8F8] dark:bg-[#202124] px-[1.5rem] py-[1rem] rounded-sm inline-block mt-6 font-normal border">
                    <span>Work with us?</span>
                    <Link href="/contact" className="text-[#0B9944] hover:text-[#0B9944]/80 ml-2 inline-flex items-center transition-all duration-500 ease-in-out">
                        Contact us now <span className="text-sm ml-1"><FiChevronRight size={19}/></span>
                    </Link>
                </div>
            </div>
        </section>

        <div ref={caseStudiesRef} className="bg-transparent overflow-hidden mb-6 xl:mb-8 mt-[64px]">
            <CaseStudiesList items={caseStudies} onPageChange={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
        </div>

        <div className="bg-[#09b850] text-white p-[2.5rem] rounded-sm text-center mt-30 relative overflow-hidden mb-10">
            <div className="absolute bottom-0 right-10 -ml-80 hidden xl:block">
                <Image src="/cta-vector.svg" width={163} height={200} quality={100} loading="eager" alt="Decoration"/>
            </div>
            <figure className="absolute top-50 start-0 translate-x-[-50%] translate-y-[-50%] ms-2">
				<svg width="371" height="354" viewBox="0 0 371 354" fill="none" xmlns="http://www.w3.org/2000/svg">
					<ellipse cx="172.5" cy="176.5" rx="131.5" ry="125.5" fill="url(#paint0_linear_195_2)"></ellipse>
					<ellipse cx="185.5" cy="177" rx="185.5" ry="177" fill="url(#paint1_linear_195_2)"></ellipse>
					<defs>
					<linearGradient id="paint0_linear_195_2" x1="172.5" y1="51" x2="172.5" y2="302" gradientUnits="userSpaceOnUse">
					<stop offset="0.0569271" stopColor="#D9D9D9" stopOpacity="0.5"></stop>
					<stop offset="0.998202" stopColor="#D9D9D9" stopOpacity="0"></stop>
					</linearGradient>
					<linearGradient id="paint1_linear_195_2" x1="185.5" y1="0" x2="185.5" y2="354" gradientUnits="userSpaceOnUse">
					<stop offset="0.0569271" stopColor="#D9D9D9" stopOpacity="0.2"></stop>
					<stop offset="0.998202" stopColor="#D9D9D9" stopOpacity="0"></stop>
					</linearGradient>
					</defs>
				</svg>
            </figure>
            <div className="w-full flex flex-col justify-center items-center">
                <h2 className="text-[56.96px] md:text-[2.75rem] font-bold line-height=[1.25] text-white">Let&apos;s Work Together</h2>
                <p className="mb-3 font-normal text-lg my-[1rem] mx-[1.6rem] text-white">We&apos;ll take the time to understand your vision and goals, and work with you to develop a <br /> customized plan to help you succeed.</p>
                <div className="flex items-center gap-3 mt-5">
                    <Button className="bg-[#202124] hover:bg-[#3c3e41] text-white rounded-sm px-[1rem] py-[0.5rem] text-[1rem]">
                        <Link href="/contact" className="flex gap-2 items-center"><MdOutlineMailOutline /> Email us</Link>
                    </Button>
                    <Button className="bg-[#202124] hover:bg-[#3c3e41] text-white rounded-sm px-[1rem] py-[0.5rem] text-[1rem]">
                        <Link href="/contact" className="flex gap-2 items-center"><MdLocalPhone /> Phone us</Link>
                    </Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PortfolioPage;
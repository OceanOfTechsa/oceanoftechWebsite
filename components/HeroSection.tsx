import AnimatedIcon from "@/components/animations/animatedIcon";
import TypedText from "@/components/animations/TypedText";
import CountUp from "@/components/count-up";
import EmailOnlyContactForm from "@/components/forms/emailOnlyContactForm";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { GoStarFill } from "react-icons/go";

const HeroSection = () => {
    return (
        <section className="relative xl:pt-20 pb-0 mt-10 sm:mt-0">
            {/* Left Decorative Pattern */}
            <div className="absolute top-0 left-0 -mt-16 -ml-80 z-50 hidden xl:block">
                <Image src="/decoration-pattern.svg" width={250} height={250} quality={100} loading="eager"  alt="Decoration" />
            </div>

            <div className="container mx-auto px-4">
                <div className="grid xl:grid-cols-12 gap-12 items-center">

                    {/* Left Content */}
                    <div className="xl:col-span-7 space-y-8 w-full">
                        <span
                            className="inline-block bg-gray-100 dark:bg-[#292a2d] text-sm rounded-md font-semibold px-3 py-2 z-50">
                          <AnimatedIcon icon="🤝"/> Your partner in digital growth
                        </span>
                        <h1 className="text-4xl md:text-[3.4rem] font-bold leading-tight hidden sm:block">
                            Software solutions tailored
                            <br/>
                            for your{" "}
                            <span className="text-primary block md:inline-block">
                                <TypedText strings={["Business", "Agency", "Startup", "Enterprise", "Brand"]} typeSpeed={90} className="text-center text-[#0B9944] dark:text-[#09b850] font-black"/>
                            </span>
                        </h1>

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight block sm:hidden">
                            Software solutions tailored
                            for your{" "}
                            <br/>
                            <span className="text-primary block md:inline-block">
                                <TypedText strings={["Business", "Agency", "Startup", "Enterprise", "Brand"]} typeSpeed={90} className="text-center text-[#0B9944] dark:text-[#09b850]"/>
                              </span>
                        </h1>

                        <p className="dark:text-[#c4c5c7] max-w-2xl">
                            From concept to execution, we build digital solutions that scale with your vision from stunning web design that captures attention to powerful enterprise systems that drive performance and growth.
                        </p>

                        {/* Email Signup Form */}
                        <div className="flex flex-col items-start gap-1 md:w-lg">
                            <EmailOnlyContactForm/>
                            <span className="text-xs text-gray-500">💌 Leave us your Email and we will get back to you</span>
                        </div>

                        {/* Features */}
                        <div className="grid md:grid-cols-2 gap-6 pt-6">
                            <Link className="flex items-center gap-3 group" href="https://g.page/r/CU3CZKX3tetcEBM/review" target="_blank">
                                <div className="text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    </svg>
                                </div>
                                <div className="mt-2">
                                    <h6 className="font-semibold group-hover:text-[#0B9944] dark:group-hover:text-[#09b850] transition-colors ease-in-out duration-500">10+ Google reviews</h6>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs mb-3">
                                            5/5
                                        </span>
                                        <ul className="flex items-center space-x-1 mb-3">
                                            <li><GoStarFill className="fill-yellow-500" size={13}/></li>
                                            <li><GoStarFill className="fill-yellow-500" size={13}/></li>
                                            <li><GoStarFill className="fill-yellow-500" size={13}/></li>
                                            <li><GoStarFill className="fill-yellow-500" size={13}/></li>
                                            <li><GoStarFill className="fill-yellow-500" size={13}/></li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Right Image/Illustration */}
                    <div className="xl:col-span-5 relative">
                        <Image src="/Hero.jpg" alt="Hero" width={506} height={609} quality={75} className="rounded-md shadow-lg relative z-10" priority={true}/>
                        <div className="inline-block bg-[#191b1d] rounded-md absolute bottom-0 start-0 mb-4 p-3 z-10 ml-3 md:-ml-20 ">
                            <div className="flex items-center justify-between">
                                <h6 className="text-white mb-0 mr-10 font-bold text-2xl"><CountUp end={10} duration={1}/>+</h6>
                                <ul className="flex items-center -space-x-4">
                                    {/* Next.js */}
                                    <li className="relative w-8 h-8 rounded-full ring-2 ring-[#191b1d] bg-white shadow-md hover:z-10 hover:scale-110 transition-all duration-500 ease-n-out">
                                        <Image
                                            src="/tech/nextjs.jpg"
                                            alt="Next.js"
                                            width={44}
                                            height={44} 
                                            className="w-full h-full rounded-full object-contain"
                                        />
                                    </li>

                                    {/* TypeScript */}
                                    <li className="relative w-8 h-8 rounded-full ring-2 ring-[#191b1d] bg-white shadow-md hover:z-10 hover:scale-110 transition-all duration-500 ease-n-out">
                                        <Image
                                        src="/tech/typescript.svg"
                                        alt="TypeScript"
                                        width={44}
                                        height={44}
                                        className="w-full h-full rounded-full object-contain"
                                        />
                                    </li>

                                    {/* Tailwind CSS */}
                                    <li className="relative w-8 h-8 rounded-full ring-2 ring-[#191b1d] bg-white shadow-md hover:z-10 hover:scale-110 transition-all duration-500 ease-n-out">
                                        <Image
                                        src="/tech/tailwindcss.svg"
                                        alt="Tailwind CSS"
                                        width={44}
                                        height={44}
                                        className="w-full h-full rounded-full object-contain"
                                        />
                                    </li>

                                    {/* PostgreSQL */}
                                    <li className="relative w-8 h-8 rounded-full ring-2 ring-[#191b1d] bg-white shadow-md hover:z-10 hover:scale-110 transition-all duration-500 ease-n-out">
                                        <Image
                                        src="/tech/postgresql.svg"
                                        alt="PostgreSQL"
                                        width={44}
                                        height={44}
                                        className="w-full h-full rounded-full object-contain"
                                        />
                                    </li>

                                    {/* +X badge */}
                                    <li className="relative w-8 h-8 rounded-full ring-2 ring-[#191b1d] bg-gradient-to-br from-cyan-500 to-purple-600 shadow-md flex items-center justify-center">
                                        <span className="text-white text-sm font-semibold drop-shadow-md">+10</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-white mt-2 mb-0">Modern Technologies We Use</p>
                        </div>
                        <div className="absolute top-0 right-0 -translate-x-2/2 -translate-y-2/2 mt-2 -mr-10 z-10">
                            <div className="w-full animate-wiggle">
                                <Image src="/arrow-img.png" width={130} height={100} decoding="async" data-nimg="1" loading="eager" title="pointer errow" alt="pointer"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;

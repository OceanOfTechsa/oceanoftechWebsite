import TypedText from "@/components/animations/TypedText";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/lib/ServicesData";
import { MoveRight, Search } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { GoArrowRight, GoDotFill } from "react-icons/go";
import {BsFillCursorFill} from "react-icons/bs";
import  AppSettings  from "@/Oceanoftech.Business/ConfigurationBusiness/AppSettings";
import { Form } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ServicesSearchSection from "@/components/forms/ServicesSearchAndResultsForm";

export const metadata: Metadata = {
    title: "Services"
}

const ServicesPage = () => {
    return (
        <div className="flex flex-col">
            {/*Services Hero Section*/}
            <section className="relative xl:pt-20 pb-0 mt-10 sm:mt-0 max-w-7xl mx-auto px-4 md:px-0"> 
                {/* Left Decorative Pattern */}
                <div className="absolute top-0 left-0 -mt-16 -ml-80 z-50 hidden xl:block">
                    <Image src="/decoration-pattern.svg" width={250} height={250} quality={100} loading="eager" alt="Decoration"/>
                </div>

                <div className="container mx-auto px-2">
                    <div className="grid xl:grid-cols-12 gap-12 items-center">

                        {/* Left Content */}
                        <div className="xl:col-span-7 space-y-8 w-full">
                            <nav className="mb-3" aria-label="breadcrumb">
                                <ol className="flex items-center gap-2 pt-0">
                                    <li className="hover:text-[#0B9944] dark:hover:text-[#09b850] transition-colors duration-500 ease-in-out">
                                        <Link href="/">Home</Link></li>
                                    <GoDotFill size={10} className="mt-1"/>
                                    <li className="text-[#0B9944] dark:text-[#09b850]" aria-current="page">Services</li>
                                </ol>
                            </nav>

                            <h1 className="text-4xl md:text-5xl font-bold leading-tight hidden sm:block">
                                Discover the {" "} <TypedText
                                strings={["Solutions", "Specialties", "Advantages", "Advantages"]} typeSpeed={90}
                                className="text-center text-[#0B9944] dark:text-[#09b850] font-black"/>
                                <br/>
                                We offer
                            </h1>

                            <h1 className="text-4xl md:text-5xl font-bold leading-tight block sm:hidden">
                                Discover the {" "}
                                <br/>
                                <TypedText strings={["Solutions", "Specialties", "Advantages", "Advantages"]} typeSpeed={90} className="text-center text-[#0B9944] dark:text-[#09b850] font-black"/>      
                                {" "}We offer
                            </h1>

                            <p className="dark:text-[#c4c5c7] max-w-2xl">
                                Our experienced team is dedicated to helping you achieve your goals through <br className="hidden md:block"/>innovative technology.
                            </p>

                            <Link href="tel:0698902422" className="bg-[#202124] hover:bg-[#3c3e41] text-white px-[1.2rem] py-[0.8rem] rounded-sm inline-flex gap-2 transition-all duration-500 ease-in-out items-center">
                                <FiPhone size={19}/> Contact Us
                            </Link>

                            <div className="flex items-center justify-normal gap-3 text-start">
                                <ul className="flex items-center mb-0">
                                    <li className="w-17 h-17 rounded-full overflow-hidden">
                                        <Image src="/06.jpg" className="w-full h-full object-cover" width={200} height={200} quality={100} loading="lazy" alt="avatar"/>
                                    </li>
                                    <li className="w-17 h-17 rounded-full overflow-hidden -ml-2">
                                        <Image src="/05.jpg" className="w-full h-full object-cover" width={200} height={200} quality={100} loading="lazy" alt="avatar"/>
                                    </li>
                                    <li className="w-17 h-17 rounded-full overflow-hidden -ml-2">
                                        <div className="rounded-full bg-[#09b850] flex items-center justify-center text-white h-17 w-17 font-bold text-lg">
                                            3+
                                        </div>
                                    </li>
                                </ul>
                                <div className="flex flex-col items-start justify-center text-start">
                                    <h6 className="font-bold text-black dark:text-white hidden sm:block">Join 3+ Thriving Businesses! 🤩</h6>
                                    <Link href="/contact"
                                          className="hover:text-[#09b850] inline-flex items-center gap-2 font-semibold text-sm  dark:text-[#c4c5c7] group"
                                          target="_blank">
                                        Get Started <GoArrowRight
                                        className="group-hover:translate-x-1 transition-all duration-300 ease-in-out"/>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Image/Illustration */}
                        <div className="xl:col-span-5 relative">
                            <Image src="/service.svg" alt="Services" width={512} height={433} quality={75} className="rounded-md relative z-10" priority={true}/>
                        </div>
                    </div>
                </div>
            </section>

            <ServicesSearchSection />

            <section className="pt-0 px-4 mb-10">
                <div className="container mx-auto">
                    <div className="bg-[#202124] rounded-lg relative overflow-hidden p-4 sm:p-7 h-[300]">

                        {/* Left SVG Decoration */}
                        <div className="absolute top-0 left-0 -mt-10 -ml-10 hidden md:block">
                            <Image src="/05.png" className="object-cover rotate-[33deg]" alt="decoration"  width={194} height={200}/>
                        </div>

                        {/* Right SVG Decoration */}
                        <div className="absolute right-0 bottom-0 hidden lg:block">
                            <Image src="/cta-vector.svg" className="object-cover" width={244} height={300} alt="vector" />
                        </div>

                        <div className="grid gap-4 relative">
                            {/* Title and Inputs */}
                            <div className="col-span-1 lg:col-span-10 xl:col-span-7 mx-auto text-center space-y-4 h-full my-10 pb-6">
                                <h3 className="text-white text-3xl md:text-4xl font-bold mb-3">Ready to elevate your business?</h3>
                                <p className="text-[#c4c5c7] opacity-80 mt-4 text-lg max-w-2xl">
                                    Join the {AppSettings.COMPANY_NAME} revolution today and be part of the thousands of businesses already embracing a smarter, brighter digital future!
                                </p>
                                <Button className="bg-[#09b850] hover:bg-[#0B9944] text-white rounded-sm inline-block transition-all duration-500 ease-in-out mt-3 mb-6">
                                    <Link href="/contact" className="px-[0.7rem] py-[0.7rem]">Get started today</Link>
                                </Button>
                                <p className="text-[#c4c5c7] opacity-80 mt-10 text-lg text-center hidden">Used by the world&apos;s best companies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ServicesPage;
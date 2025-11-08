"use client";

import Link from "next/link";
import TypedText from "@/components/animations/TypedText";
import React from "react";
import EmailOnlyContactForm from "@/components/forms/emailOnlyContactForm";
import Image from "next/image";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FiClock } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";


const _CTAHome = () => (
    <div className="bg-[#09b850] text-white py-10 px-3 md:px-5 rounded-sm text-center -mt-48 relative overflow-hidden mb-20">
        <div className="absolute top-0 right-0 -ml-80 hidden xl:block opacity-20">
            <Image src="/decoration-pattern-2.svg" width={210} height={200} quality={100} loading="eager" alt="Decoration"/>
        </div>
        <figure className="fill-white opacity-30 absolute top-1 left-0 transform -translate-y-1/2">
            <svg width="141px" height="141px">
                <path d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z"></path>
            </svg>
        </figure>
        <figure className="absolute top-50 start-0 translate-x-[-50%] translate-y-[-50%] ms-2">
            <svg>
                <path className="fill-white opacity-4"
                      d="m496 22.999c0 10.493-8.506 18.999-18.999 18.999s-19-8.506-19-18.999 8.507-18.999 19-18.999 18.999 8.506 18.999 18.999z"></path>
                <path className="fill-white opacity-4"
                      d="m775 102.5c0 5.799-4.701 10.5-10.5 10.5-5.798 0-10.499-4.701-10.499-10.5 0-5.798 4.701-10.499 10.499-10.499 5.799 0 10.5 4.701 10.5 10.499z"></path>
                <path className="fill-white opacity-4"
                      d="m192 102c0 6.626-5.373 11.999-12 11.999s-11.999-5.373-11.999-11.999c0-6.628 5.372-12 11.999-12s12 5.372 12 12z"></path>
                <path className="fill-white opacity-4"
                      d="m20.499 10.25c0 5.66-4.589 10.249-10.25 10.249-5.66 0-10.249-4.589-10.249-10.249-0-5.661 4.589-10.25 10.249-10.25 5.661-0 10.25 4.589 10.25 10.25z"></path>
            </svg>
        </figure>
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <div className="w-full flex flex-col justify-center items-start text-start gap-6">
                <h6 className="text-3xl text-white md:text-4xl font-bold leading-tight md:hidden flex items-center">
                    Let&apos;s talk about your{" "}
                    <br/>
                    {/* <span className="text-primary block md:inline-block">
                        <TypedText strings={["Business", "Agency", "Startup", "Enterprise", "Brand"]} typeSpeed={90} className="text-center text-white font-black"/>
                    </span> */}
                    {" "}
                    goals
                </h6>

                <h6 className="text-3xl md:text-4xl font-bold leading-tight hidden sm:block text-white">
                    Let&apos;s talk about your
                    <br/>
                    <span className="text-primary block md:inline-block">
                        <TypedText strings={["Business", "Agency", "Startup", "Enterprise", "Brand"]} typeSpeed={90} className="text-center text-white font-black"/>
                    </span>
                    {" "}goals
                </h6>
                <EmailOnlyContactForm bg="bg-white dark:bg-[#202124] text-black dark:text-white" showBorder={false} buttonBg="bg-black hover:bg-black/80 dark:bg-white text-white dark:text-black"/>
            </div>
            <div className="w-full flex flex-col justify-center items-end z-50">
                <ul className="flex flex-col gap-2 justify-start items-end">
                    <li><Link href="tel:012525899322" className="flex items-center font-semibold"><TfiHeadphoneAlt
                        className="mr-2"/> Call on: 0125 258 993 22</Link></li>
                    <li><Link href="tel:012525899322" className="flex items-center font-semibold"><FiClock
                        className="mr-2"/>Time: 9am to 5pm (Sunday close)</Link></li>
                    <li><Link href="mailto:email@rise.co.za" className="flex items-center font-semibold"><MdOutlineMail
                        className="mr-2"/> Call on: 0125 258 993 22</Link></li>
                </ul>
            </div>
        </div>
    </div>
);

export default _CTAHome;

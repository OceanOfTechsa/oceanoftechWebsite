"use client";

import Link from "next/link";
import Image from "next/image";
import SocialIcons from "@/components/SocialIcons";
import {COMPANY_NAME} from "@/AppSettings";
import { JSX } from "react";
import {careers } from "@/components/conts";


const Footer = (): JSX.Element => {
    return (
        <footer className="bg-[#202124] text-white pt-20 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-0">
                <div className="flex flex-wrap justify-between gap-8">
                    <div className="w-full md:w-1/4">
                        <Link href="/" className="inline-block">
                            <Image src="/Logo.svg" width={42} height={42} alt="Brand Logo" priority loading="eager" quality={100} />
                        </Link>
                        <p className="mt-4 mb-2 text-gray-300 text-sm leading-relaxed">
                            Ocean of Tech – Innovate. Scale. Succeed.
                        </p>
                    </div>

                    <div className="w-1/2 md:w-1/6">
                        <h6 className="mb-4 text-xl font-semibold text-white">Quick links</h6>
                        <ul className="flex flex-col space-y-2">
                            <li>
                                <Link className="text-gray-300 hover:text-green-400 transition-colors" href="/about"> About us </Link>
                            </li>
                            <li>
                                <Link className="text-gray-300 hover:text-green-400 transition-colors" href="/contact"> Contact us </Link>
                            </li>
                            <li>
                                <Link className="text-gray-300 hover:text-green-400 transition-colors flex items-center group" href="/careers">
                                    Career{" "}
                                    <span className="ml-2 bg-[#D8293E] group-hover:text-white font-semibold text-xs px-2 py-0.5 rounded-sm flex items-center justify-center"> {careers?.length} New </span>
                                </Link>
                            </li>
                            <li>
                                <Link className="text-gray-300 hover:text-green-400 transition-colors" href="/become-a-partner"> Become a partner </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-1/2 md:w-1/6">
                        <h6 className="mb-4 text-xl font-semibold text-white">Community</h6>
                        <ul className="flex flex-col space-y-2">
                            <li>
                                <Link className="text-gray-300 hover:text-green-400 transition-colors" href="/help-center"> Hep Center </Link>
                            </li>
                            <li>
                                <Link className="text-gray-300 hover:text-green-400 transition-colors flex items-center" href="#">
                                    Supports{" "} <i className="ml-1 text-xs"></i>
                                </Link>
                            </li>
                            <li>
                                <Link className="text-gray-300 hover:text-green-400 transition-colors" href="/faq"> Faqs </Link>
                            </li>
                            <li>
                                <Link className="text-gray-300 hover:text-green-400 transition-colors" href="/privacy-policy" > Privacy Policy </Link>
                            </li>
                            <li>
                                <Link className="text-gray-300 hover:text-green-400 transition-colors" href="/blog"> News and blogs </Link>
                            </li>
                            <li>
                                <Link className="text-gray-300 hover:text-green-400 transition-colors" href="/terms-and-conditions"> Terms &amp; conditions </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/4">
                        <h6 className="mb-4 text-xl font-semibold text-white">Follow on</h6>
                        <SocialIcons />
                    </div>
                </div>
                <div className="border-t border-gray-300/30 py-6 mt-6 text-center">
                    <p className="text-sm text-[#c4c5c7]">
                        © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer
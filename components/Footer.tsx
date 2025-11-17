"use client";

import Link from "next/link";
import Image from "next/image";
import SocialIcons from "@/components/SocialIcons";
import { JSX } from "react";
import {careers } from "@/components/conts";
import  AppSettings from "@/Oceanoftech.Business/ConfigurationBusiness/AppSettings";
import { Button } from "@/components/ui/button";
import { Activity, MessagesSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"

const Footer = (): JSX.Element => {
    return (
        <footer className="bg-[#202124] text-white pt-20 relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 right-0">
                <Image
                    width={270}
                    height={257}
                    src="/decoration-pattern-2.svg"
                    alt=""
                    className="w-full max-w-none opacity-5 block"
                    aria-hidden="true"
                />
            </div>
            <div className="pointer-events-none absolute right-0 sm:-left-130 -top-45 sm:-top-52  overflow-hidden">
                <svg
                    width="5"
                    height="834"
                    viewBox="0 0 775 834"
                    className="w-[800px] sm:w-[700px] md:w-[775px] lg:w-[900px] max-w-none opacity-5 fill-white block"
                    aria-hidden="true"
                    fill="white"
                >
                    <path d="M486.1,564.4c-3.6,2.5-7.4,4.8-11.3,6.4c-12,5.5-25.7,7.9-42.2,7.4c-30.6-1.1-65.6-12.5-102.8-24.4 c-50.7-16.2-103.3-33.4-152.5-27c-56.1,7.2-97.9,44.4-128,114l-0.4-0.2c67.5-156.1,181-119.5,281.1-87.1c37,12,72,23.2,102.5,24.3 c34.3,1.2,58.1-10.7,74.9-37.4C530.1,505,547.1,466,565,425.1C619.4,301,675.6,172.7,892.1,141.3l0.1,0.4 c-216.2,31.4-272.5,159.5-326.8,283.5c-18.1,41.1-35,79.7-57.7,115.6C501.6,550.7,494.5,558.5,486.1,564.4z" />
                    <path d="M500.9,551.4c-43.7,31-103,15.8-165.5-0.2c-49.9-12.7-101.5-25.8-148.7-16.7c-53.3,10.5-93.2,49-121.6,118 l-0.5-0.1c15.3-37.1,33.3-64.7,55.1-84.7c19.5-17.7,41.3-28.6,66.7-33.7c47.4-9.2,99,3.9,148.9,16.6 c70.4,17.9,137.1,34.9,181.3-14.4c35.7-39.9,57.3-91.7,80.2-146.7c23.8-56.7,48.2-115.5,90.2-163.6c22.7-25.9,48.4-46.4,78.4-62.4 c33.9-18.1,72.2-30.3,117.1-37.1l0.1,0.4C695,155.3,645.2,274.5,597.1,389.7c-22.9,55-44.5,106.8-80.4,146.8 C512.3,542.4,506.6,547.3,500.9,551.4z" />
                    <path d="M521.3,536.4c-21.9,15.5-48.4,23.4-80.8,23.8c-31.2,0.5-65.1-5.8-97.9-11.9c-49.3-9.2-100.2-18.7-145.7-6.5 c-51.1,13.7-88.9,53.7-116,122.6l-0.6-0.2c60.5-154.1,163.3-135,262.6-116.5c68.1,12.7,132.6,24.6,183.6-15.8 c48.1-38.2,71.1-100.6,95.6-166.5c20.3-55,41.4-111.6,78.3-158.1c20-25.1,42.7-44.9,69.2-60.5c30.1-17.5,64.2-29.1,104.3-35.4 l0.2,0.6c-167.2,26.3-210,141.9-251.4,253.5C598.3,431.5,575,493.8,527,532.2C525.1,533.8,523.2,535.1,521.3,536.4z" />
                    <path d="M548.9,520.3c-4,2.9-8.2,5.6-12.6,8c-56.6,31.5-120.9,23.8-183,16.6c-51.7-6-100.4-11.8-144.6,3.2 c-49.9,16.9-85.5,57.7-111.3,128.2l-0.6-0.2c13.7-37.3,30.1-66,49.9-87.8c17.8-19.4,37.9-32.8,61.8-40.9 c44.3-15,93.1-9.3,144.9-3.2c62.1,7.2,126.3,14.8,182.8-16.6c59.6-33.2,82-104.7,105.9-180.4c17.1-54.3,34.7-110.5,67.2-156.6 c36.7-52,87.8-82.8,155.7-94l0.2,0.6c-151.9,25-187.8,139.3-222.3,250C620.4,417.6,599.4,484.5,548.9,520.3z" />
                    <path d="M573.5,509.5c-8.2,5.8-17.4,10.7-27.7,14.6c-59.3,22-119.1,18.8-176.8,15.8c-53.2-2.8-103.3-5.3-147.1,12.5 C172.6,572.3,138.1,615.5,113,688l-0.5-0.1c25.1-72.7,59.6-115.9,108.9-136c44-18,94.2-15.3,147.6-12.6 c57.7,3,117.4,6.1,176.6-15.9c70.7-26.2,91.1-106.3,112.8-191.4c13.9-54.5,28.3-111,56.7-156.9C747,123.2,793,92.6,855.6,82l0,0.7 C716.3,106.5,687,221.4,658.9,332.2C640.4,405,622.6,474.4,573.5,509.5z" />
                    <path d="M595.2,502.3c-11.3,8-24.6,14-40,17.4c-56.8,12.7-112,12.7-160.5,12.9c-60.2,0.1-112,0.2-157,21.1 c-49.5,23-84,69.3-108.5,146l-0.6-0.2c24.3-76.7,58.9-123.1,108.6-146.3c45.1-21.1,97.2-21.1,157.4-21.2 c48.6,0,103.6-0.1,160.5-12.9c81.6-18.3,99-106.7,117.4-200.6c10.7-55,22-112,46.6-158.2C747,108,788.6,77.5,846.5,67.2l0.1,0.8 C718,91.2,695.2,206.9,673.2,318.9C658.3,394.9,643.8,467.8,595.2,502.3z" />
                    <path d="M615.3,497.4c-13.7,9.7-30.2,16-50.8,18c-44.4,4.6-86.5,5.8-123.6,6.8c-71.2,2-132.8,3.7-182,27.7 C206,575.6,169.8,627,145,711.3l-0.8-0.1c13-44.6,29-79.3,48.6-106.3c18.1-24.9,39.5-43.1,65.6-55.7 c49.5-24.1,110.9-25.8,182.4-27.7c37.1-1,79.3-2.2,123.5-6.7c92.6-9.4,106.2-106.5,120.5-209.2c7.8-55.9,15.9-113.6,37-160 c23.8-52.7,61.6-83.1,115.3-93.4l0.3,0.7c-53.4,10.1-91,40.4-114.6,92.9c-21.1,46.4-29.2,104.1-36.8,159.9 C674.6,386,663.8,463,615.3,497.4z" />
                    <path d="M634.4,494c-15.5,11-35.2,17.2-60.4,17.3c-12.3,0.1-24.5,0.1-36.1,0.1c-103.7,0-185.5-0.1-246.4,26.4 c-63.5,27.7-103.7,85-130.5,185.5l-0.8-0.1c13.9-52.5,31.3-92.6,53.2-122.9c20.7-28.8,46.2-49.4,77.8-63.2 c61-26.6,142.9-26.4,246.6-26.4c11.7,0.1,23.8,0,36.1-0.1c103.8-0.2,112.9-105.6,122.5-217.2c4.7-56.9,9.9-115.5,27.5-162.4 c20-53.1,54.1-83.7,104.1-93.7l0.1,0.8c-49.5,9.8-83.5,40.3-103.3,93.1c-17.6,46.9-22.7,105.4-27.6,162 C690.1,378.2,682.9,459.6,634.4,494z" />
                    <path d="M652.7,491.8c-17.9,12.7-40.7,17.7-69.2,15.4C328,486.2,228.3,517.5,177.2,735.2l-0.9-0.3 c25.9-110.7,64-171.6,127-204c66.6-34.2,160.2-34.6,280.3-24.7c32.2,2.6,56.9-4.1,75.4-20.5c42.1-37.4,45.1-118.6,48-204.7 c4-116.5,8.1-236.8,112.1-258.6l0.1,0.8C715.9,44.8,711.8,164.8,707.8,280.9c-3.1,86.3-5.8,167.7-48.3,205.2 C657.3,488.3,655,490.1,652.7,491.8z" />
                    <path d="M670.6,490.3c-19.3,13.7-44.8,17.9-77.7,12.7c-138.5-21.4-227.1-13-287.3,27 c-55.4,36.8-89.1,101.7-112.4,216.9l-0.9-0.3C215.8,631,249.6,566,305.1,528.9c60.3-40.1,149.1-48.6,288.1-27.3 c35.9,5.5,63,0,82.6-16.9c43.2-37.5,42.2-124.3,40.9-216.1C714.9,151,713,28.8,809.9,7.7l0.1,0.8c-96,21.1-94.3,142.7-92.7,260.6 c1.3,92.1,2.4,179-41.1,216.7C674.3,487.4,672.6,488.9,670.6,490.3z" />
                </svg>
            </div>
            <div className="max-w-7xl mx-auto px-6 md:px-0">
                <div className="flex flex-wrap justify-between gap-8">
                    <div className="w-full md:w-1/4">
                        <Link href="/" className="inline-block">
                            <svg width="38" height="38" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="31" cy="31" r="31" fill="#09B850"/>
                            <path d="M48.3844 33.2596C47.0282 33.2596 45.9289 32.1602 45.9289 30.8041C45.9289 29.448 47.0282 28.3486 48.3844 28.3486C49.7405 28.3486 50.8398 29.448 50.8398 30.8041C50.8398 32.1602 49.7405 33.2596 48.3844 33.2596Z" fill="white"/>
                            <path d="M13.0247 35.3357H13.3685C14.2034 35.3357 14.8418 34.6972 14.8418 33.8624V27.7458C14.8418 26.9109 14.2034 26.2725 13.3685 26.2725H13.0247C12.1899 26.2725 11.5514 26.9109 11.5514 27.7458V33.9115C11.5514 34.6972 12.1899 35.3357 13.0247 35.3357Z" fill="white"/>
                            <path d="M19.5579 41.916H19.9017C20.7366 41.916 21.375 41.2776 21.375 40.4427V21.1647C21.375 20.3298 20.7366 19.6914 19.9017 19.6914H19.5579C18.7231 19.6914 18.0846 20.3298 18.0846 21.1647V40.3936C18.0846 41.2285 18.7722 41.916 19.5579 41.916Z" fill="white"/>
                            <path d="M26.138 37.715H26.4818C27.3167 37.715 27.9551 37.0766 27.9551 36.2417V25.3664C27.9551 24.5315 27.3167 23.8931 26.4818 23.8931H26.138C25.3032 23.8931 24.6647 24.5315 24.6647 25.3664V36.2417C24.6647 37.0766 25.3032 37.715 26.138 37.715Z" fill="white"/>
                            <path d="M44.3083 31.0987C44.0137 32.1265 43.377 32.714 42.593 32.8413C42.1519 32.9295 41.7599 33.2233 41.5835 33.6153L35.8301 46.5149C35.6146 46.9751 35.1444 47.2688 34.6351 47.2688H33.9493C33.2144 47.2688 32.646 46.7004 32.646 45.9656V16.0334C32.646 15.2986 33.2144 14.7302 33.9493 14.7302H34.6842C35.1935 14.7302 35.6637 15.0239 35.8792 15.4841L41.6326 28.4328C41.8091 28.8739 42.201 29.1186 42.6421 29.2068C43.4261 29.3832 44.0628 29.9517 44.3574 30.9794C44.3574 31.1558 44.3574 31.3323 44.3083 31.0987ZM39.3571 30.7147L36.6141 24.1027C36.4086 23.5643 35.5864 23.7307 35.5864 24.3183V37.2107C35.5864 37.7983 36.4086 37.9647 36.6141 37.4263L39.3571 30.8143C39.4845 30.5205 39.4845 30.1876 39.3571 30.7147Z" fill="white"/>
                            </svg>
                        </Link>
                        <p className="mt-4 mb-2 text-gray-300 text-sm leading-relaxed">
                            Ocean of Tech – Innovate. Scale. Succeed.
                        </p>
                    </div>
                    <div className="flex items-start justify-between w-full md:w-5/12">
                        <div className="w-full md:w-1/2 gap-8">
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
                                        {AppSettings.HIRING && <span className="ml-2 bg-[#D8293E] group-hover:text-white font-semibold text-xs px-2 py-0.5 rounded-sm flex items-center justify-center"> {careers?.length} New </span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-300 hover:text-green-400 transition-colors" href="/become-a-partner"> Become a partner </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="w-full md:w-1/2">
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
                    </div>
                    <div className="w-full md:w-1/4">
                        <h6 className="mb-4 text-xl font-semibold text-white">Follow on</h6>
                        <SocialIcons />
                        <div className="mt-6">
                            <h6 className="mb-4 text-xl font-semibold text-white">Part of the family</h6>
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                <Link href={"https://www.peeko.com"} target="_blank" className="flex space-x-3">
                                    <div className="relative">
                                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                                            <Activity className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-xl font-bold text-white">
                                            Peeko
                                        </span>
                                        <div className="text-xs text-gray-500 -mt-1">Monitor</div>
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                    
                </div>
                <div className="border-t border-gray-300/30 py-6 mt-6 text-center flex justify-between items-center">
                    <p className="text-sm text-[#c4c5c7]">
                        © {new Date().getFullYear()} {AppSettings.COMPANY_NAME}. All rights reserved.
                    </p>
                    <Button type="button" variant="outline" size="sm" className="flex items-center gap-2 rounded-[0.2rem] -mt-2 text-black dark:text-white">
                        <MessagesSquare />Feedback
                    </Button>
                </div>
            </div>
        </footer>
    );
};
export default Footer
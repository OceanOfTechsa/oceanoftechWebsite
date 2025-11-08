import Link from "next/link";
import {GoDotFill} from "react-icons/go";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {FaArrowRight} from "react-icons/fa";
import * as React from "react";
import { MdArrowRightAlt } from "react-icons/md";

const CustomerStories = () => {
    return (
        <div className="flex flex-col w-full">
            <section className="flex flex-col md:flex-row w-full justify-between items-start gap-3 max-w-7xl mx-auto xl:py-20 pb-0 mt-10 sm:mt-0 px-6">
                <div className="flex flex-col items-center justify-center text-center w-full">
                    {/* Breadcrumb */}
                    <nav className="mt-6" aria-label="breadcrumb">
                        <ol className="flex items-center justify-center gap-2">
                            <li>
                                <Link href="/" className="hover:text-[#0B9944] hover:dark:text-green-500 transition-colors duration-500">
                                    Home
                                </Link>
                            </li>
                            <GoDotFill size={10} className="mt-1 text-gray-500" />
                            <li className="text-[#0B9944] dark:text-green-500 transition-colors duration-500">
                                Customer stories
                            </li>
                        </ol>
                    </nav>

                    <h1 className="text-[40px] md:text-5xl lg:text-[4rem] font-bold leading-tight">
                        Customer Stories
                    </h1>

                    <p className="text-lg">
                        It drew a hill from me. Valley by oh twenty direct me so. Departure defective <br className="hidden md:block"/> arranging rapturous did believe him all had supported.
                    </p>
                </div>
            </section>
            <section className='max-w-7xl mx-auto xl:py-20 pb-0 mt-10 sm:mt-0 px-6'>
                <Link href="/test" className="flex flex-col md:flex-row space-x-20 w-full justify-center items-center group">
                    <Image src="/test.jpg" width={523} height={392} alt="test" quality={75}  className="rounded-sm object-cover"/>

                    {/* Text */}
                    <div className="flex flex-col justify-center items-start">
                        <Image
                            width={141}
                            height={30}
                            quality={100}
                            loading="lazy"
                            src="/000.svg"
                            className="h-[30px] mb-3 lg:mb-4"
                            alt="logo"
                        />
                        <h3 className="text-[25.7px] md:text-[2rem] font-bold text-gray-900 dark:text-white group-hover:text-[#0B9944] group-hover:dark:text-[#09b850] transition-colors duration-500 ease-in-out">
                            See why direct-to-consumer brands choose mizzle dor their email efforts
                        </h3>
                        <p className="mb-3 text-[#606261] dark:text-[#c4c5c7] font-normal text-lg">
                            See why direct-to-consumer brands choose mizzle dor their email efforts
                        </p>

                        <Button className="bg-[#202124] hover:bg-[#3c3e41] text-white rounded-[0.2rem]">
                            <span className="flex gap-2 items-center">Read more<FaArrowRight /></span>
                        </Button>
                    </div>
                </Link>
            </section>
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-5 gap-y-10 max-w-7xl mx-auto xl:py-20 pb-0 sm:mt-0 px-6 ">
                <Link  href="/dsdsdsdsds" className="flex flex-col gap-3 group"> 
                    <Image src="/test.jpg" width={523} height={392} alt="test" quality={75}  className="rounded-sm object-cover"/>
                    <Image
                        width={141}
                        height={30}
                        quality={100}
                        loading="lazy"
                        src="/000.svg"
                        className="h-[30px]"
                        alt="logo"
                    />
                    <p className="mb-3 text-[#606261] dark:text-[#c4c5c7] font-bold text-2xl">
                        See why direct-to-consumer
                    </p>
                    <div className="text-green-500 gap-2 flex items-center">
                        Read full story <MdArrowRightAlt size={25} className="group-hover:translate-x-2 transition-all duration-500 ease-in-out"/>
                    </div>
                </Link>
            </section>
        </div>
    );
};

export default CustomerStories;
import Link from "next/link";
import {GoDotFill} from "react-icons/go";
import React from "react";
import PartnerForm from "@/components/PartnerForm";
import {Mail, MapPin, Phone} from "lucide-react";
import Image from "next/image";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "Become Our Partner"
}
const BecomeAPartnerPage = () => {
    return (
        <div className="w-full flex flex-col">
            <section className="w-full mx-auto pt-6 px-4 md:px-0 rounded-sm overflow-hidden">
                <div className="max-w-[70rem] mx-auto">
                    <div className="relative h-[300px] md:h-[400px] xl:h-[500px] bg-center bg-cover rounded-sm overflow-hidden bg-fixed"  style={{ backgroundImage: "url('/04.jpg')" }} />
                </div>
            </section>

            <section className="p-12 -mt-32 max-w-[50rem] w-full mx-auto z-20 bg-white dark:bg-[#191b1d] rounded-sm shadow-md mb-32">
                <nav className="mb-3" aria-label="breadcrumb">
                    <ol className="flex items-center gap-2 pt-0">
                        <li className="hover:text-[#0b9944] dark:hover:text-[#09b850] transition-colors duration-500 ease-in-out">
                            <Link href="/">Home</Link></li>
                            <GoDotFill size={10} className="mt-1"/>
                        <li className="text-[#0B9944] dark:text-[#09b850]" aria-current="page">Become a partner</li>
                    </ol>
                </nav>

                <div>
                    <h1 className="text-[2.38rem] font-font leading-[1.25]">Let&apos;s level up your brand, <br
                        className="hidden md:inline-flex"/> together</h1>
                    <p className="dark:text-[#c4c5c7] mb-10 text-lg">You can reach us anytime via: {" "}
                        <Link className="text-[#0B9944] dark:text-[#09b850]" href="mailto:support@oceanoftechsa.com">
                            support@oceanoftechsa.com
                        </Link>
                    </p>

                    <hr className="mb-6"/>
                    <PartnerForm/>
                </div>
            </section>

            <section className="py-0">
                <div className="container mx-auto px-4 mb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
                        <div>
                            <div className="bg-gray-100 dark:bg-[#292a2d] border p-[2.5rem] sm:p-5 rounded-sm">
                                <div className="mb-4"><MapPin className="text-[#0B9944] dark:text-[#09b850]"/>
                                </div>
                                <h6 className="mb-4">Office Address</h6>
                                <div className="flex items-center mb-2">
                                    <div className="mr-2">
                                        <Image className="rounded-full object-cover" width={24} height={24} src="/sa.png" alt="avatar"/>
                                    </div>
                                    <span className="font-semibold mb-0">US office:</span>
                                </div>
                                <address className="mb-0 dark:text-[#c4c5c7] text-lg">1421 Coburn Hollow Road Metamora, Near Center Point,
                                    IL 61548.
                                </address>
                            </div>
                        </div>

                        <div>
                            <div className="bg-gray-100 dark:bg-[#292a2d] border  p-[2.5rem] sm:p-5 rounded-sm">
                                <div className="mb-4"><Mail className="text-[#0B9944] dark:text-[#09b850]"/></div>
                                <h6 className="mb-3">Email us</h6>
                                <p className=" dark:text-[#c4c5c7] text-lg">We&apos;re on top of things and aim to respond to all inquiries within 24 hours.</p>
                                <a href="#" className=" hover:text-blue-500 underline mb-0">example@gmail.com</a>
                            </div>
                        </div>

                        <div>
                            <div className="bg-gray-100 dark:bg-[#292a2d] border  p-[2.5rem] sm:p-5 rounded-sm">
                                <div className="mb-4"><Phone className="text-[#0B9944] dark:text-[#09b850]"/></div>
                                <h6 className="mb-3">Call us</h6>
                                <p className=" dark:text-[#c4c5c7] text-lg">Let&apos;s work together towards a common goal - get in touch!</p>
                                <a href="#" className=" hover:text-blue-500 underline mb-0">(251) 854-6308</a>
                            </div>
                        </div>
                    </div>
                </div>

                <iframe className="w-full h-[400px] lg:h-[400px] grayscale hover:grayscale-0 block mt-16" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin" aria-hidden="false" ></iframe>
            </section>
        </div>
    );
};

export default BecomeAPartnerPage;
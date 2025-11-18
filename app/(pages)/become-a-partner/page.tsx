import Link from "next/link";
import {GoDotFill} from "react-icons/go";
import PartnerForm from "@/components/PartnerForm";
import {Mail, MapPin, Phone} from "lucide-react";
import Image from "next/image";
import {Metadata} from "next";
import AppSettings from "@/Oceanoftech.Business/ConfigurationBusiness/AppSettings";
import Map from "@/components/Map"

export const metadata: Metadata = {
    title: "Become Our Partner"
}
const BecomeAPartnerPage = () => {
    return (
        <div className="w-full">
            <div className="w-full flex flex-col px-4">
                <section className="w-full mx-auto pt-6 px-4 md:px-0 rounded-sm overflow-hidden">
                    <div className="max-w-[70rem] mx-auto">
                        <div className="relative h-[300px] md:h-[400px] xl:h-[500px] bg-center bg-cover rounded-sm overflow-hidden bg-fixed"  style={{ backgroundImage: "url('/04.jpg')" }} />
                    </div>
                </section>

                <section className="p-6 pt-12 sm:p-12 -mt-32 max-w-[50rem] w-full mx-auto z-20 bg-white dark:bg-[#191b1d] rounded-sm shadow-md mb-32">
                    <nav className="mb-3" aria-label="breadcrumb">
                        <ol className="flex items-center gap-2 pt-0">
                            <li className="hover:text-[#0b9944] dark:hover:text-[#09b850] transition-colors duration-500 ease-in-out">
                                <Link href="/">Home</Link></li>
                                <GoDotFill size={10} className="mt-1"/>
                            <li className="text-[#0B9944] dark:text-[#09b850]" aria-current="page">Become a partner</li>
                        </ol>
                    </nav>

                    <div>
                        <h1 className="text-[2.38rem] font-font leading-[1.25]">Let&apos;s level up your brand <br
                            className="hidden md:inline-flex"/> together.</h1>
                        <p className="dark:text-[#c4c5c7] mb-10 text-lg">You can reach us anytime via: {" "}
                            <Link className="text-[#0B9944] dark:text-[#09b850]" href={`mailto:${AppSettings.CompanyContacts.Email}`}>
                                {AppSettings.CompanyContacts.Email}
                            </Link>
                        </p>

                        <hr className="mb-6"/>
                        <PartnerForm/>
                    </div>
                </section>

                <section className="py-0">
                    <div className="container mx-auto mb-10">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
                            <div>
                                <div className="bg-gray-100 dark:bg-[#292a2d] border p-[2.5rem] sm:p-5 rounded-sm">
                                    <div className="mb-4"><MapPin className="text-[#0B9944] dark:text-[#09b850]"/>
                                    </div>
                                    <h6 className="mb-4">Office Address</h6>
                                    <div className="flex items-center mb-2">
                                        <div className="mr-2">
                                            <Image className="rounded-full object-cover h-full w-full" width={24} height={24} src="/sa.png" alt="avatar"/>
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
                </section>
            </div>
            <Map />
        </div>
    );
};

export default BecomeAPartnerPage;
import { Metadata } from "next";
import {JSX} from "react";
import Link from "next/link";
import ContactForm from "@/components/forms/Contact";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaGithub} from "react-icons/fa";
import { GoArrowRight, GoDotFill } from "react-icons/go";
import SocialIcons from "@/components/SocialIcons";
import AppSettings from "@/Oceanoftech.Business/ConfigurationBusiness/AppSettings";
import Map from "@/components/Map"
export const metadata: Metadata = {
    title: "Contact Us"
}
const ContactPage = (): JSX.Element => {
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto xl:py-20 pb-0 mt-10 sm:mt-0 px-4 md:px-0">
                <section className="flex flex-col md:flex-row w-full justify-center items-start gap-3">
                    <div className="w-full flex flex-col items-start justify-start">
                        <nav className="mb-3" aria-label="breadcrumb">
                            <ol className="flex items-center gap-2 pt-0">
                                <li className="hover:text-[#0b9944] dark:hover:text-[#09b850] transition-colors duration-500 ease-in-out">
                                    <Link href="/">Home</Link></li>
                                    <GoDotFill size={10} className="mt-1"/>
                                <li className="text-[#0B9944] dark:text-[#09b850]" aria-current="page">Contact us</li>
                            </ol>
                        </nav>

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Get in touch for more information
                        </h1>


                        <p className=" dark:text-[#c4c5c7] text-lg">
                            Ocean of Tech specializes in web design, UX, and front-end engineering, delivering conversion-focused, accessible, and high-performance digital experiences. Trusted by over 100 clients, our award-winning team helps businesses grow online with proven results.
                        </p>

                        <p className="dark:text-[#c4c5c7] mb-10 text-lg">You can reach us anytime via: {" "}
                            <Link className="text-[#0B9944] dark:text-[#09b850]" href={`mailto:${AppSettings.CompanyContacts.Email}`}> 
                                {AppSettings.CompanyContacts.Email}
                            </Link>
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-start gap-3">
                            <h6 className="mb-3 mb-sm-0 text-xl font-bold">Follow us on:</h6>
                            <SocialIcons changeBg={true} />
                        </div>
                    </div>
                    <div className="w-full">
                        <ContactForm/>
                    </div>
                </section>

                {/* <section className="min-w-full mt-20 py-24 text-center flex flex-col items-center justify-center relative">
                    <div className="md:w-[1300px]">
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">Follow our work</h2>
                        <p className="mt-3 text-[#606261] text-[1rem]">
                            The combination of my passion for design, code & interaction positions me in a unique place <b className="hidden md:block"/>in the web design world.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
                        <Link href={AppSettings.CompanySocials.Facebook} target="_blank" className="bg-gray-100 dark:bg-[#292a2d] border rounded-sm p-4 flex items-center justify-between group">
                            <div className="flex items-start text-start">
                                <FaFacebook size={40} />
                                <div className="ml-3">
                                    <h6 className="mb-0 text-2xl font-bold">Follow us on Facebook</h6>
                                    <small className="text-sm ">Supposing so be resolving breakfast am or perfectly.</small>
                                </div>
                            </div>
                            <GoArrowRight size={25} className="transition-all duration-500 ease-in-out group-hover:translate-x-1/2 group-hover:text-[#0B9944] dark:group-hover:text-[#09b850]" />
                        </Link>

                        <Link href={AppSettings.CompanySocials.Twitter} target="_blank" className="bg-gray-100 dark:bg-[#292a2d] border rounded-sm p-4 flex items-center justify-between group">
                            <div className="flex items-start text-start">
                                <AiFillTwitterCircle size={50} />
                                <div className="ml-3">
                                    <h6 className="mb-0 text-2xl font-bold">Follow us on Twitter</h6>
                                    <small className="text-sm ">Supposing so be resolving breakfast am or  perfectly.</small>
                                </div>
                            </div>
                            <GoArrowRight size={25} className="transition-all duration-500 ease-in-out group-hover:translate-x-1/2 group-hover:text-[#0B9944] dark:group-hover:text-[#09b850]" />
                        </Link>

                        <Link href={AppSettings.CompanySocials.Github} target="_blank" className="bg-gray-100 dark:bg-[#292a2d] border rounded-sm p-4 flex items-center justify-between group">
                            <div className="flex items-start text-start">
                                <FaGithub size={40} />
                                <div className="ml-3">
                                    <h6 className="mb-0 text-2xl font-bold">Contribute on GitHub</h6>
                                    <small className="text-sm ">Supposing so be resolving breakfast am or perfectly.</small>
                                </div>
                            </div>
                            <GoArrowRight size={25} className="transition-all duration-500 ease-in-out group-hover:translate-x-1/2 group-hover:text-[#0B9944] dark:group-hover:text-[#09b850]" />
                        </Link>
                    </div>
                </section> */}
            </div>
            <Map />
        </div>
    )
}
export default ContactPage;

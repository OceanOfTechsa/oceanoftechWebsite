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
            </div>
            <Map />
        </div>
    );
};

export default BecomeAPartnerPage;
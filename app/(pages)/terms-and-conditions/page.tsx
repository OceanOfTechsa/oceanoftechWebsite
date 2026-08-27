import Link from "next/link";
import {GoDotFill} from "react-icons/go";
import React from "react";
import {Button} from "@/components/ui/button";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "Terms and Conditions"
}
const TermsAndConditionPage = () => {
    return (
        <section className="py-16 w-full">
            <div className="max-w-3xl mx-auto xl:py-20 pb-0 mt-10 sm:mt-0 px-4 md:px-0 flex flex-col items-center justify-center">
                <nav className="mb-3" aria-label="breadcrumb">
                    <ol className="flex items-center gap-2 pt-0">
                        <li className="hover:text-[#0b9944] dark:hover:text-[#09b850] transition-colors duration-500 ease-in-out">
                            <Link href="/">Home</Link></li>
                            <GoDotFill size={10} className="mt-1"/>
                        <li className="text-[#0B9944] dark:text-[#09b850]" aria-current="page">Terms and Conditions</li>
                    </ol>
                </nav>
                <h1 className="text-[3.6rem]  font-bold text-center mb-4 ">Terms & Conditions</h1>
                <p className="text-center  mb-12 text-[1.25rem] font-bold">Last update on Dec 2025</p>

                <div className="space-y-8">

                    <div>
                        <h2 className="text-2xl font-semibold mb-4 ">Introduction</h2>
                        <p className=" mb-4">Welcome to Ocean of Tech SA. These terms and conditions govern your use of our website (oceanoftechsa.com) and any services we provide. Please read them carefully. By accessing or using our website, you agree to comply with and be bound by these terms.</p>
                        <p className=" mb-4">If you do not agree with these terms, please do not use our website. Our terms and conditions outline the rules for using our website, intellectual property rights, user-generated content, and more.</p>
                        <p className="">If you have any questions or concerns about these terms, please contact us at the details provided on our contact page. Your use of our website is also governed by our Privacy Policy. We may update these terms and conditions at any time, so please review them periodically for changes. Thank you for visiting Ocean of Tech SA.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4 ">Acceptance of Terms</h2>
                        <p className="">By accessing or using this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, please do not use this website.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4 ">Intellectual Property</h2>
                        <p className=" mb-4">All content on this website, including text, images, graphics, logos, blog posts, case studies, and service descriptions, is the property of Ocean of Tech SA and is protected by intellectual property laws.</p>
                        <p className=" mb-4">You may not use, reproduce, modify, distribute, or display any content from this website without prior written consent from Ocean of Tech SA.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4 ">Services Integration and Features</h2>
                        <p className=" mb-4">Ocean of Tech SA offers digital solutions including web development, hosting, SEO, automation, UX/UI design, and skills development programs.</p>
                        <ul className="list-disc pl-6 space-y-2 ">
                            <li>Receive instant notifications and updates related to your projects or services.</li>
                            <li>Effortlessly manage tasks, projects, and digital assets across platforms.</li>
                            <li>Keep all your data consistent and up to date, whether it's project details, customer information, or digital content.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4 ">Limitation of Liability</h2>
                        <p className="mb-4">Ocean of Tech SA makes no warranties or representations about the accuracy, completeness, or reliability of the content on this website or the services described.</p>
                        <p className="mb-4">Ocean of Tech SA is not liable for any direct, indirect, consequential, incidental, or special damages resulting from your use of this website or engagement with our services, including but not limited to loss of data, profits, or business opportunities.</p>
                        <p>Your use of our website and services is at your own risk. We recommend reviewing all service agreements separately for specific terms related to any projects or engagements.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl w-full rounded-sm p-[3.5rem] mx-auto flex flex-col md:flex-row items-center justify-start text-start bg-[#202124] text-white gap-3 md:gap-10 ">
              <div className="max-w-3xl w-full">
                  <h2 className="text-[24px] md:text-[2.75rem] font-bold mb-4 text-white">Let’s automate & simplify your
                      performance</h2>
                  <p className="text-lg text-white">Let us manage your IT for you so that you can get back to doing
                      what you do best and we look in the future.</p>
              </div>
                <div className="flex justify-end w-full">
                    <Button className="bg-[#0B9944] hover:bg-[#09B850] text-white rounded-[0.2rem] px-[1.5rem] py-[1.5rem] text-[1rem]">
                        <Link href="/contact">Get started</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default TermsAndConditionPage;
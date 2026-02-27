import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight, GoDotFill } from "react-icons/go";
import AppSettings from "@/Oceanoftech.Business/ConfigurationBusiness/AppSettings";
import ServicesSearchSection from "@/components/forms/ServicesSearchAndResultsForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedIcon from "@/components/animations/animatedIcon";
import { Reviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Services",
};

const ServicesPage = () => {
  return (
    <div className="flex flex-col">
      {/*Services Hero Section*/}
      <section className="relative xl:pt-20 pb-0 mt-10 sm:mt-0 max-w-7xl mx-auto px-4 sm:px-0">
        {/* Left Decorative Pattern */}
        <div className="absolute top-0 left-0 -mt-16 -ml-80 z-50 hidden xl:block">
          <Image
            src="/decoration-pattern.svg"
            width={250}
            height={250}
            quality={100}
            loading="eager"
            alt="Decoration"
          />
        </div>

        <div className="container mx-auto px-2">
          <div className="grid xl:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="xl:col-span-7 space-y-8 w-full">
              <nav className="mb-3" aria-label="breadcrumb">
                <ol className="flex items-center gap-2 pt-0">
                  <li className="hover:text-[#0B9944] dark:hover:text-[#09b850] transition-colors duration-500 ease-in-out">
                    <Link href="/">Home</Link>
                  </li>
                  <GoDotFill size={10} className="mt-1" />
                  <li
                    className="text-[#0B9944] dark:text-[#09b850]"
                    aria-current="page"
                  >
                    Services
                  </li>
                </ol>
              </nav>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight hidden sm:block">
                Discover the{" "}
                <span className="text-[#0B9944] dark:text-[#09b850]">
                  Services
                </span>
                <br />
                We offer
              </h1>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight block sm:hidden">
                Discover the <br />
                <span className="text-[#0B9944] dark:text-[#09b850]">
                  Services
                </span>{" "}
                We offer
              </h1>

              <p className="dark:text-[#c4c5c7] max-w-2xl -mt-5">
                Our experienced team is dedicated to helping you achieve your
                goals through <br className="hidden md:block" />
                innovative technology.
              </p>

              <Link
                href="/contact"
                className="bg-[#202124] hover:bg-[#3c3e41] text-white px-[1.2rem] py-[0.8rem] rounded-sm inline-flex gap-2 transition-all duration-500 ease-in-out items-center group"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  <path
                    className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                    d="M14.05 2a9 9 0 0 1 8 7.94"
                  ></path>
                  <path
                    className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                    d="M14.05 6A5 5 0 0 1 18 10"
                  ></path>
                </svg>
                Contact Us
              </Link>

              <div className="flex items-center justify-normal gap-3 text-start">
                <ul className="flex items-center mb-0">
                  <li className="w-17 h-17 rounded-full overflow-hidden">
                    <Image
                      src={Reviews[4].avatar}
                      className="w-full h-full object-cover"
                      width={200}
                      height={200}
                      quality={100}
                      loading="lazy"
                      alt="avatar"
                    />
                  </li>
                  <li className="w-17 h-17 rounded-full overflow-hidden -ml-2">
                    <Image
                      src={Reviews[5].avatar}
                      className="w-full h-full object-cover"
                      width={200}
                      height={200}
                      quality={100}
                      loading="lazy"
                      alt="avatar"
                    />
                  </li>
                  <li className="w-17 h-17 rounded-full overflow-hidden -ml-2">
                    <div className="rounded-full bg-[#09b850] flex items-center justify-center text-white h-17 w-17 font-bold text-lg">
                      3+
                    </div>
                  </li>
                </ul>
                <div className="flex flex-col items-start justify-center text-start">
                  <h6 className="font-bold text-[#606261] dark:text-[#c4c5c7]  hidden sm:block">
                    Join 3+ Thriving Businesses! <AnimatedIcon icon="🤩" />
                  </h6>
                  <Link
                    href="/contact"
                    className="hover:text-[#09b850] inline-flex items-center gap-2 font-semibold text-sm -mt-2 text-[#606261] dark:text-[#c4c5c7]  group"
                    target="_blank"
                  >
                    Get Started{" "}
                    <GoArrowRight className="group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Image/Illustration */}
            <div className="xl:col-span-5 relative">
              <Image
                src="/service.svg"
                alt="Services"
                width={512}
                height={433}
                quality={75}
                className="rounded-md relative z-10"
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>

      <ServicesSearchSection />

      <section className="pt-0 px-4 sm:px-0 mb-10">
        <div className="container mx-auto">
          <div className="bg-[#202124] rounded-lg relative overflow-hidden p-4 sm:p-7 h-[300]">
            {/* Left SVG Decoration */}
            <div className="absolute top-0 left-0 -mt-10 -ml-10 hidden md:block">
              <Image
                src="/05.png"
                className="object-cover rotate-[33deg]"
                alt="decoration"
                width={194}
                height={200}
              />
            </div>

            {/* Right SVG Decoration */}
            <div className="absolute right-0 bottom-0 hidden lg:block">
              <Image
                src="/cta-vector.svg"
                className="object-cover"
                width={244}
                height={300}
                alt="vector"
              />
            </div>

            <div className="grid gap-4 relative">
              {/* Title and Inputs */}
              <div className="col-span-1 lg:col-span-10 xl:col-span-7 mx-auto text-center space-y-4 h-full my-10 pb-6">
                <h3 className="text-white text-3xl md:text-4xl font-bold mb-3">
                  Ready to elevate your business?
                </h3>
                <p className="text-[#c4c5c7] opacity-80 mt-4 text-lg max-w-2xl">
                  Join the {AppSettings.COMPANY_NAME} revolution today and be
                  part of the thousands of businesses already embracing a
                  smarter, brighter digital future!
                </p>
                <Button className="bg-[#09b850] hover:bg-[#0B9944] text-white rounded-sm inline-block transition-all duration-500 ease-in-out mt-3 mb-6">
                  <Link href="/contact" className="px-[0.7rem] py-[0.7rem]">
                    Get started today
                  </Link>
                </Button>
                <p className="text-[#c4c5c7] opacity-80 mt-10 text-lg text-center hidden">
                  Used by the world&apos;s best companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0 max-w-3xl mx-auto px-4 md:px-0 mb-10 mt-24 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center max-w-2xl">
          You have questions we have answers
        </h2>
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="border h-16 flex items-center py-[4rem] px-[1.25rem] p-3 rounded-sm cursor-pointer font-[600] focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black text-lg">
              What software development services does {AppSettings.COMPANY_NAME}{" "}
              provide?
            </AccordionTrigger>
            <AccordionContent className="my-[0.5rem] py-[0.2rem] px-[1rem] text-[#606261] dark:text-[#c4c5c7] font-normal text-lg mb-3">
              We provide{" "}
              <Link
                href="/services/web-development"
                className="underline hover:text-black dark:hover:text-white"
              >
                Custom Web Development
              </Link>
              ,{" "}
              <Link
                href="/services/seo"
                className="underline hover:text-black dark:hover:text-white"
              >
                Search Engine Optimisation
              </Link>
              ,{" "}
              <Link
                href="/services/hosting"
                className="underline hover:text-black dark:hover:text-white"
              >
                Web Hosting
              </Link>
              ,{" "}
              <Link
                href="/services/business-emails"
                className="underline hover:text-black dark:hover:text-white"
              >
                Email Hosting
              </Link>
              ,{" "}
              <Link
                href="/services/software-development"
                className="underline hover:text-black dark:hover:text-white"
              >
                business systems
              </Link>
              , Enterprise Software Solutions, and more. Our services are
              tailored for Startups, SMEs, and established businesses in South
              Africa and internationally.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger className="border h-16 flex items-center py-[4rem] px-[1.25rem] p-3 rounded-sm cursor-pointer font-[600] focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black text-lg">
              How much does custom software development cost in South Africa?
            </AccordionTrigger>
            <AccordionContent className="my-[0.5rem] py-[0.2rem] px-[1rem] text-[#606261] dark:text-[#c4c5c7] font-normal text-lg mb-3">
              The cost depends on the scope, complexity, features, and timeline
              of your project. We offer flexible pricing models based on your
              business needs, whether you're building an MVP or a large-scale
              enterprise system.{" "}
              <Link
                href="/contact"
                className="underline hover:text-black dark:hover:text-white"
              >
                Contact us
              </Link>{" "}
              for a tailored quote.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-none">
            <AccordionTrigger className="border h-16 flex items-center py-[4rem] px-[1.25rem] p-3 rounded-sm cursor-pointer font-[600] focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black text-lg">
              How long does it take to develop a Website or a Web Application
            </AccordionTrigger>
            <AccordionContent className="my-[0.5rem] py-[0.2rem] px-[1rem] text-[#606261] dark:text-[#c4c5c7] font-normal text-lg mb-3">
              Project timelines vary depending on requirements. A standard
              business website may take a few weeks, while custom applications
              or SaaS platforms may take several months. We provide a clear
              roadmap and timeline before development begins.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-none">
            <AccordionTrigger className="border h-16 flex items-center py-[4rem] px-[1.25rem] p-3 rounded-sm cursor-pointer font-[600] focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black text-lg">
              Do you build scalable and secure enterprise systems?
            </AccordionTrigger>
            <AccordionContent className="my-[0.5rem] py-[0.2rem] px-[1rem] text-[#606261] dark:text-[#c4c5c7] font-normal text-lg mb-3">
              Yes. We design and develop secure, high-performance systems built
              with scalability in mind. Our architecture supports business
              growth, increased user traffic, and long-term expansion.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-none">
            <AccordionTrigger className="border h-16 flex items-center py-[4rem] px-[1.25rem] p-3 rounded-sm cursor-pointer font-[600] focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black text-lg">
              Can you upgrade or redesign our existing software?
            </AccordionTrigger>
            <AccordionContent className="my-[0.5rem] py-[0.2rem] px-[1rem] text-[#606261] dark:text-[#c4c5c7] font-normal text-lg mb-3">
              Absolutely. We help businesses modernize outdated systems, improve
              performance, enhance UI/UX, and migrate to modern technologies
              without disrupting operations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border-none">
            <AccordionTrigger className="border h-16 flex items-center py-[4rem] px-[1.25rem] p-3 rounded-sm cursor-pointer font-[600] focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black text-lg">
              Do you offer ongoing maintenance and support?
            </AccordionTrigger>
            <AccordionContent className="my-[0.5rem] py-[0.2rem] px-[1rem] text-[#606261] dark:text-[#c4c5c7] font-normal text-lg mb-3">
              Yes. We provide continuous maintenance, performance optimization,
              security updates, and technical support to ensure your software
              runs smoothly after launch.{" "}
              <Link
                href="/maintenance-support"
                className="underline hover:text-black dark:hover:text-white"
              >
                Read More
              </Link>
              .
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border-none">
            <AccordionTrigger className="border h-16 flex items-center py-[4rem] px-[1.25rem] p-3 rounded-sm cursor-pointer font-[600] focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black text-lg">
              How do we get started with your services?
            </AccordionTrigger>
            <AccordionContent className="my-[0.5rem] py-[0.2rem] px-[1rem] text-[#606261] dark:text-[#c4c5c7] font-normal text-lg mb-3">
              Simply{" "}
              <Link
                href="/contact"
                className="underline hover:text-black dark:hover:text-white"
              >
                Contact Us
              </Link>{" "}
              for a consultation. We’ll discuss your goals, technical
              requirements, timeline, and budget, then provide a clear
              development strategy tailored to your business. You can also check{" "}
              <Link
                href="/services"
                className="underline hover:text-black dark:hover:text-white"
              >
                Our Services
              </Link>
              .
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};
export default ServicesPage;

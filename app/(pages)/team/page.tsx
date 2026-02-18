import {JSX} from 'react'
import { Metadata } from "next";
import Link from "next/link";
import { FiChevronRight } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import AppSettings from "@/Oceanoftech.Business/ConfigurationBusiness/AppSettings";
import NewsLetterSubCTA from "@/components/NewsLetterSubCTA";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import * as React from "react";
import {GoDotFill} from "react-icons/go";

export const metadata: Metadata = {
    title: 'Our Team',
    description:'Meet the talented developers, designers, and innovators behind Ocean of Tech. Our team is driven by passion, collaboration, and cutting-edge technology.',
    keywords: [
        'our team',
        'meet the team',
        'Ocean of Tech team',
        'software development team',
        'tech professionals',
        'digital solutions team',
    ],
    openGraph: {
        title: 'Our Team | Ocean of Tech',
        description:
            'Get to know the people powering Ocean of Tech — a team of skilled professionals building impactful digital solutions.',
        url: 'https://oceanoftechsa.com/team',
        siteName: 'Ocean of Tech',
        images: [
            {
                url: 'https://oceanoftechsa.com/og-team.png',
                width: 1200,
                height: 630,
                alt: 'Meet the Ocean of Tech Team',
            },
        ],
        locale: 'en_ZA',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Our Team | Ocean of Tech',
        description:
            'Meet the talented team behind Ocean of Tech — passionate professionals delivering modern digital solutions.',
        images: ['https://oceanoftechsa.com/og-team.png'],
    },

    robots: {
        index: true,
        follow: true,
    },

    alternates: {
        canonical: 'https://oceanoftechsa.com/team',
    },
}
type SocialType = "instagram" | "facebook" | "twitter" | "linkedin";
const socialIconMap: Record<SocialType,{ icon: JSX.Element; bg: string }> = {
  instagram: { icon: <FaInstagram />, bg: "bg-gradient-to-tr from-pink-500 to-orange-400" },
  facebook: { icon: <FaFacebookF />, bg: "bg-blue-600" },
  twitter: { icon: <FaXTwitter />, bg: "bg-sky-500" },
  linkedin: { icon: <FaLinkedinIn />, bg: "bg-blue-700" },
};

interface SocialLink {
  type: SocialType;
  href: string;
}

interface TeamMember {
  name: string;
  surname: string;
  role: string;
  img: string;
  socials: SocialLink[];
}

const TeamPage = (): JSX.Element => {
  const teamMembers:TeamMember[] = [
    {
      name: "Sithuliso",
      surname: "Zulu",
      role: "Senior Software Developer",
      img: "/team/Mondli.jpg",
      socials: [{ type: "instagram", href: "#" },{ type: "facebook", href: "#" },{ type: "twitter", href: "#" },{ type: "linkedin", href: "#" }],
    },
    {
      name: "Sanele",
      surname: "Jeza",
      role: "Senior Software Developer",
      img: "/team/sanele.jpeg",
      socials: [{ type: "instagram", href: "#" },{ type: "facebook", href: "#" },{ type: "twitter", href: "#" }, { type: "linkedin", href: "#" }],
    },
    {
      name: "Malibongwe",
      surname: "Sibisi",
      role: "Designer / Marketing",
      img: "/team/malibongwe.webp",
      socials: [
      { type: "instagram", href: "#" },
        { type: "facebook", href: "#" },
       { type: "twitter", href: "#" },
        { type: "linkedin", href: "#" },
        ],
    },
    {
      name: "Asiphe",
      surname: "Khuboni",
      role: "Technical Support",
      img: "/team/asiphekh.jpeg",
      socials: [
      { type: "instagram", href: "#" },
        { type: "facebook", href: "#" },
       { type: "twitter", href: "#" },
        { type: "linkedin", href: "#" },
        ],
    },
    {
      name: "Ntokozo",
      surname: "Juqu",
      role: "Social Media Manager",
      img: "/team/juqu.webp",
     socials: [
      { type: "instagram", href: "#" },
        ],
    },
      {
          name: "Sithembiso",
          surname: "Ncwane",
          role: " Software Developer",
          img: "/team/sthembiso.jpeg",
          socials: [
              { type: "instagram", href: "#" },
          ],
      },
  ]
  return (
    <div className="w-full flex flex-col">
       <section className="w-full mx-auto pt-6 px-4  md:px-0 rounded-md overflow-hidden">
            <div className="max-w-7xl  mx-auto">
                <div className="relative h-[300px] md:h-[400px] xl:h-[500px] bg-center bg-cover rounded-md overflow-hidden bg-fixed" style={{ backgroundImage: "url('/04.jpg')" }}>
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/50 z-10"></div>

                    {/* Title */}
                    <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center text-center z-20">
                        <nav className="mb-3" aria-label="breadcrumb">
                            <ol className="flex items-center gap-2 pt-0">
                                <li className="hover:text-[#0b9944] dark:hover:text-[#09b850] transition-colors duration-500 ease-in-out text-white">
                                    <Link href="/">Home</Link>
                                </li>
                                <GoDotFill size={10} className="mt-1 text-white"/>
                                <li className="text-[#0B9944] dark:text-[#09b850]" aria-current="page">Our Team</li>
                            </ol>
                        </nav>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                        We&apos;re Superheroes
                        </h1>
                    </div>
                </div>
            </div>
       </section>

        <section className="py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 md:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {teamMembers.map((member: TeamMember, index: number): JSX.Element => (
                        <div key={index} className="relative bg-transparent rounded-sm overflow-hidden  transition-shadow group">
                          {/* Social links */}
                            {/*TODO Remove*/}
                          <div className="absolute top-3 right-3 gap-2 z-10 hidden ">
                              {member.socials.map((social: SocialLink, i: number): JSX.Element | null => {
                                  const data: {icon: JSX.Element, bg: string} = socialIconMap[social.type];
                                  if (!data) return null;
                                  return (
                                  <Link
                                      key={i}
                                      href={social.href}
                                      className={`w-9 h-9 flex items-center justify-center rounded-sm text-white ${data.bg} hover:scale-105 transition-transform`}
                                  >
                                      {data.icon}
                                  </Link>
                                  );
                              })}
                          </div>

                          {/* Image */}
                          <div className="relative overflow-hidden rounded-sm">
                              {
                                  member.img !== ""
                                      ?
                                      <Image
                                          src={member.img}
                                          alt={`${member.name} ${member.surname}`}
                                          width={275} height={367}
                                          quality={100}
                                          priority={true}
                                          className="object-cover transform group-hover:scale-104 transition-transform duration-800 ease-in-out w-full h-full"
                                      />
                                      :
                                    <div className="h-[405px] flex items-center justify-center bg-gradient-to-br from-gray-300 via-gray-100 to-gray-300 dark:from-[#202124] dark:via-[#2a2b2f] dark:to-[#1a1b1e]">
                                        {/* Avatar Circle */}
                                      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-md shadow-sm">
                                          {/* Letter */}
                                          <span className="text-4xl font-bold text-gray-700 dark:text-white transition-transform duration-800 ease-out group-hover:scale-125">
                                              {member.name.charAt(0)}{member.surname.charAt(0)}
                                        </span>
                                      </div>
                                    </div>
                              }
                          </div>

                          {/* Body */}
                          <div className="text-start mt-4">
                              <h6 className="text-[1.2rem] font-semibold group-hover:text-[#0B9944] dark:hover:text-green-500 transition-colors duration-500 ease-in-out">
                                  {member.name} {member.surname}
                              </h6>
                              <div className="font-normal text-[#c4c5c7] text-[0.875em] -mt-2">{member.role}</div>
                          </div>
                        </div>
                    ))}
                    {AppSettings.HIRING &&
                        <Link href="/careers" className="border rounded-sm p-2 flex items-center justify-center group h-[405px] group hover:bg-white dark:hover:bg-[#202124] transition-all duration-500 ease-in-out">
                            <div className="container mx-auto px-2">
                                <div className="mx-auto text-center">
                                    <figure className="mb-4 flex justify-center">
                                        <svg
                                            width="223.6"
                                            height="87.2"
                                            viewBox="0 0 223.6 87.2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="fill-current text-primary"
                                        >
                                            <path className="fill-black dark:fill-white" d="M222.9,53.8c-13.2-3-28-3-41,0.9c-5.5,1.7-11,4.3-14.9,8.7c-1.3-0.1-2.6-0.2-3.8-0.1 c-5.8,0.1-11.6,1.5-16.9,3.7c-2.9,1.2-5.7,2.9-8.5,4.4c-3.7,1.9-7.4,3.8-11.3,5.3c-7.3,2.9-16,5-23.5,1.7c-1.5-0.6-2.9-1.5-4.1-2.6 c6.5-2.6,12.2-7.9,13.2-15c0.8-6.6-5.1-12.1-11.6-11.4c-5,0.6-7.5,5.6-8.3,10.1c-0.9,4.9-0.3,10.8,2.7,14.9 c0.2,0.2,0.4,0.5,0.5,0.7c-0.4,0.1-0.8,0.2-1.3,0.3c-6.6,1.5-14.3,0.3-20.3-2.9c-6.1-3.3-10.3-9.1-12.3-15.6 c-0.2-0.7-1.2-0.4-1,0.3c2.1,7.3,6.7,13.4,13.4,17.1c6.8,3.7,15.4,4.5,22.7,2.4c0,0,0.1,0,0.1,0c4.5,4.4,11.2,5.9,17.3,5.4 c8-0.6,15.6-4.1,22.7-7.7c5.6-2.9,10.8-6,17-7.6c3.8-0.9,7.8-1.5,11.8-1.3c-3.3,4.8-4.6,11.1-2.3,16.5c2.8,6.4,11.3,6.7,16.3,2.8 c5.1-4,2.8-12.4-1-16.4c-2.4-2.5-5.7-3.9-9.1-4.5c0.2-0.2,0.3-0.3,0.5-0.4c4.3-4,10.2-6.2,15.9-7.5c11.8-2.8,24.9-2.7,36.7,0 C223.6,56,224.1,54,222.9,53.8z M95.5,71.6c-1.2-2.4-1.7-5.1-1.8-7.8c-0.1-4.5,1.1-11.2,6.1-12.6c2.4-0.7,5.2,0.4,7.2,1.7 c2.9,1.9,3.5,5.5,2.9,8.7c-1.2,6.2-6.8,10.5-12.6,12.6C96.7,73.4,96,72.5,95.5,71.6z M171.5,66.3c5.7,1.8,10.3,7.8,8.5,14 c-1.1,3.9-6.1,5.2-9.6,4.8c-3.5-0.4-5.5-3.4-6.2-6.5c-1.1-4.7,0.6-9.5,3.5-13.1C169,65.7,170.2,65.9,171.5,66.3z"></path>
                                            <polygon className="fill-[#0B9944]" points="65.3,39 61,56.8 0.7,0.7"></polygon>
                                            <path className="fill-black dark:fill-white" d="M60.6,57.3L0.2,1.1C0,0.9-0.1,0.5,0.1,0.3C0.3,0,0.7-0.1,1,0.1l64.7,38.3c0.2,0.1,0.4,0.4,0.3,0.7l-4.3,17.8 c-0.1,0.2-0.2,0.4-0.4,0.5c-0.1,0-0.1,0-0.2,0C60.9,57.4,60.7,57.4,60.6,57.3z M5.6,4.3l55.1,51.2l3.9-16.3L5.6,4.3z"></path>
                                            <polygon className="fill-[#0B9944]" points="56.5,42.4 61,56.8 0.7,0.8"></polygon>
                                            <path className="fill-black dark:fill-white" d="M60.6,57.3L0.2,1.3C0,1.1-0.1,0.7,0.2,0.4c0.2-0.3,0.6-0.3,0.9-0.1l55.8,41.5c0.1,0.1,0.2,0.2,0.2,0.3 l4.6,14.4c0.1,0.3,0,0.6-0.3,0.8c-0.1,0.1-0.2,0.1-0.4,0.1C60.9,57.4,60.7,57.4,60.6,57.3z M10.1,8.7l49.6,45.9l-3.8-11.8 L10.1,8.7z"></path>
                                            <polygon className="fill-[#0B9944]" points="0.7,0.7 91.5,28.5 65.2,38.8"></polygon>
                                            <path className="fill-black dark:fill-white" d="M64.9,39.4L0.3,1.2C0,1.1-0.1,0.7,0.1,0.4C0.2,0.1,0.5-0.1,0.9,0l90.9,27.8c0.3,0.1,0.5,0.3,0.5,0.6 c0,0.3-0.2,0.5-0.4,0.6L65.4,39.4c-0.1,0-0.2,0-0.2,0C65.1,39.4,65,39.4,64.9,39.4z M5.8,2.9l59.5,35.2l24.3-9.5L5.8,2.9z"></path>
                                            <polygon className="fill-[#0B9944]" points="56.3,42.4 26.5,57.6 0.7,0.7"></polygon>
                                            <path className="fill-black dark:fill-white" d="M26.3,58.3c-0.2-0.1-0.3-0.2-0.4-0.3L0.1,0.9c-0.1-0.3,0-0.6,0.2-0.8C0.5,0,0.8,0,1.1,0.1l55.7,41.8 c0.2,0.1,0.3,0.4,0.3,0.6c0,0.2-0.2,0.4-0.4,0.5L26.8,58.2c-0.1,0-0.2,0.1-0.3,0.1C26.5,58.3,26.4,58.3,26.3,58.3z M2.3,2.7 l24.5,54l28.2-14.4L2.3,2.7z"></path>
                                        </svg>
                                    </figure>

                                    <h2 className="text-3xl md:text-4xl font-bold mb-3">We&apos;re hiring!</h2>
                                    <p className=" text-gray-600 dark:text-[#c4c5c7] mb-5">
                                        Our team is growing faster and we&apos;re always looking for smart people
                                    </p>

                                    <div className="grid gap-2 sm:flex sm:justify-center sm:gap-4">
                                        <div className="bg-[#202124] group-hover:bg-[#3c3e41] text-white px-[1rem] py-[0.5rem] rounded-sm inline-block transition-all duration-500 ease-in-out">
                                            View open roles
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    }
                </div>
            </div>
        </section>
        <section className="pt-0 mb-[6.5rem] mt-[4.5rem]">
          <div className="max-w-7xl mx-auto px-4 sm:px-0 divide-x">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
              <div className="lg:col-span-6 w-full">
                <h2 className="text-[56.96px] md:text-[2.75rem] font-[700] mb-[1rem] leading-tight">Our Lifetime Achievements</h2>
                <p className="mb-4 text-[#606261] dark:text-[#c4c5c7] font-normal">
                  At Ocean of Tech, we prioritize excellence, industry compliance, and continuous professional development.
                  Our team's certifications reflect a commitment to delivering reliable, future-focused, and high-quality technology solutions.
                </p>
                <div className="bg-[#F8F8F8] dark:bg-[#202124] px-[1.5rem] py-[1rem] rounded-sm inline-block mt-6 font-normal border">
                  <span>Work with us?</span>
                  <Link href="/contact" className="text-[#0B9944] hover:text-[#0B9944]/80 ml-2 inline-flex items-center transition-all duration-500 ease-in-out">
                    Contact us now <span className="text-sm ml-1"><FiChevronRight size={19}/></span>
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-6 w-full">
                <div className="grid  gap-6 md:gap-8">
                  <div className="w-full">
                    <h5 className="text-[26.16px] md:text-[1.5rem] font-[700] mb-3">Team Certifications</h5>
                    <p className="text-sm mb-4 text-[#606261] dark:text-[#c4c5c7]">Professionally attained by individual team members and contributing directly to the capability and credibility of Ocean of Tech.</p>
                    <ul className="space-y-2 text-gray-900">
                      <li className="border-b pb-2 text-[#606261] dark:text-[#c4c5c7] mb-2">
                        <Link href="https://www.credly.com/badges/1619b837-1bbc-40ad-ac66-693d56a701a6/public_url" target="_blank" className="inline-flex items-center gap-2 hover:text-[#09b850] transition-colors ease-in-out duration-400">
                            <Image src="/certificates/microsoft-certified-fundamentals-badge.svg" className="rounded-sm h-10 w-10" alt="certificate-badge" width={100} height={100}/>
                            Microsoft Certified: Power Platform Fundamentals
                        </Link>
                      </li>
                      <li className="border-b pb-2 text-[#606261] dark:text-[#c4c5c7] mb-2">
                        <Link href="https://www.credly.com/badges/fbfd222e-7d33-41a5-b790-4d121731f3e5/public_url" target="_blank" className="inline-flex items-center gap-2 hover:text-[#09b850] transition-colors ease-in-out duration-400">
                            <Image src="/certificates/getting-started-with-threat-intelligence-and-hunting.png" className="rounded-sm h-10 w-10" alt="certificate-badge" width={100} height={100}/>
                            Getting Started with Threat Intelligence and Hunting
                        </Link>
                      </li>
                      <li className="border-b pb-2 text-[#606261] dark:text-[#c4c5c7] mb-2">
                        <Link href="/documents/Azure-Fundamentals.pdf" target="_blank" className="inline-flex items-center gap-2 hover:text-[#09b850] transition-colors ease-in-out duration-400">
                            <Image src="/certificates/microsoft-certified-fundamentals-badge.svg" className="rounded-sm h-10 w-10" alt="certificate-badge" width={100} height={100}/>
                            Microsoft Certified: Azure Fundamentals
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="hidden">
                    <h5 className="text-[26.16px] md:text-[1.5rem] font-[700] mb-3">Awards</h5>
                    <p className="text-sm text-[#606261] dark:text-[#c4c5c7] italic">Ocean of Tech is actively building a portfolio designed to meet and exceed industry benchmarks.
                    While no formal awards have been issued yet, our trajectory, customer satisfaction, and project performance position us strongly for upcoming recognitions and industry distinctions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-0 mb-[7.5rem] mt-[4.5rem]">
            <div className="max-w-6xl mx-auto px-4 sm:px-0 divide-x">
                <Accordion type="single" collapsible defaultValue="item-1">
                    <AccordionItem value="item-1" className="border-none">
                        <AccordionTrigger className="border h-16 flex items-center py-[4rem] px-[1.25rem] p-3 rounded-sm cursor-pointer font-[600] focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black text-lg">
                            Who is part of your software development team?
                        </AccordionTrigger>
                        <AccordionContent className="my-[0.5rem] py-[0.2rem] px-[1rem] text-[#606261] dark:text-[#c4c5c7] font-normal text-lg mb-3">
                            Our software development team includes experienced full-stack developers, UI/UX designers, project managers, and QA engineers dedicated to building scalable and secure custom software solutions. Each team member brings specialized technical expertise to ensure high-performance web and mobile applications.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border-none">
                        <AccordionTrigger className="border h-16 flex items-center py-[4rem] px-[1.25rem] p-3 rounded-sm cursor-pointer font-[600] focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black text-lg">
                            What technologies does your development team specialize in?
                        </AccordionTrigger>
                        <AccordionContent className="my-[0.5rem] py-[0.2rem] px-[1rem] text-[#606261] dark:text-[#c4c5c7] font-normal text-lg mb-3">
                            Our development team specializes in modern technologies such as React, Next.js, Node.js, TypeScript, cloud computing platforms, and API integrations. We continuously adopt the latest software development tools and frameworks to deliver reliable, future-ready digital solutions.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border-none">
                        <AccordionTrigger className="border h-16 flex items-center py-[4rem] px-[1.25rem] p-3 rounded-sm cursor-pointer font-[600] focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black text-lg">
                            How experienced are your software engineers?
                        </AccordionTrigger>
                        <AccordionContent className="my-[0.5rem] py-[0.2rem] px-[1rem] text-[#606261] dark:text-[#c4c5c7] font-normal text-lg mb-3">
                            Our software engineers have extensive experience delivering enterprise-grade applications, SaaS platforms, eCommerce systems, and custom business software. With proven expertise across multiple industries, our team ensures efficient, scalable, and secure software development.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border-none">
                        <AccordionTrigger className="border h-16 flex items-center py-[4rem] px-[1.25rem] p-3 rounded-sm cursor-pointer font-[600] focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black text-lg">
                            How does your team manage software development projects?
                        </AccordionTrigger>
                        <AccordionContent className="my-[0.5rem] py-[0.2rem] px-[1rem] text-[#606261] dark:text-[#c4c5c7] font-normal text-lg mb-3">
                            We follow agile software development methodologies to ensure transparency, flexibility, and faster delivery. Our team collaborates closely with clients through sprint planning, regular updates, and performance tracking to guarantee project success.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="border-none">
                        <AccordionTrigger className="border h-16 flex items-center py-[4rem] px-[1.25rem] p-3 rounded-sm cursor-pointer font-[600] focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black text-lg">
                            Do you provide a dedicated development team for projects?
                        </AccordionTrigger>
                        <AccordionContent className="my-[0.5rem] py-[0.2rem] px-[1rem] text-[#606261] dark:text-[#c4c5c7] font-normal text-lg mb-3">
                            Yes, we offer dedicated development teams tailored to your project requirements. Whether you need full-cycle software development, product design, or ongoing technical support, our dedicated team model ensures focused execution and long-term success.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
        <NewsLetterSubCTA />
    </div>
  )
}

export default TeamPage;

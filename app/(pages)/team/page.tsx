import {JSX} from 'react'
import { Metadata } from "next";
import Link from "next/link";
import { FiChevronRight } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image"

export const metadata: Metadata = {
  title: "Our Team"
};
type SocialType = "instagram" | "facebook" | "twitter" | "linkedin";


const socialIconMap: Record<SocialType,{ icon: JSX.Element; bg: string }> = {
  instagram: { icon: <FaInstagram />, bg: "bg-gradient-to-tr from-pink-500 to-orange-400" },
  facebook: { icon: <FaFacebookF />, bg: "bg-blue-600" },
  twitter: { icon: <FaTwitter />, bg: "bg-sky-500" },
  linkedin: { icon: <FaLinkedinIn />, bg: "bg-blue-700" },
};
interface SocialLink {
  type: SocialType;
  href: string;
}
interface TeamMember {
  name: string;
  role: string;
  img: string;
  socials: SocialLink[];
}

const TeamPage = () => {
    const teamMembers:TeamMember[] = [
    {
      name: "Sithuliso Zulu",
      role: "Founder / Developer",
      img: "/team/Mondli.jpg",
      socials: [{ type: "instagram", href: "#" },{ type: "facebook", href: "#" },{ type: "twitter", href: "#" },{ type: "linkedin", href: "#" },
      ],
    },
    {
      name: "Sanele Jeza",
      role: "Co Founder / Developer",
      img: "/team/sanele.jpeg",
      socials: [
          { type: "instagram", href: "#" },
          { type: "facebook", href: "#" },
          { type: "twitter", href: "#" },
          { type: "linkedin", href: "#" },
      ],
    },
    {
      name: "Respect Mashego",
      role: "Developer",
      img: "/team/respect.jpeg",
      socials: [{ type: "facebook", href: "#" },{ type: "linkedin", href: "#" },] 
    },
    // {
    //   name: "Malibongwe Sibisi",
    //   role: "Designer",
    //   img: "/a3.jpg",
    //   socials: [
    //   { type: "instagram", href: "#" },
    //     { type: "facebook", href: "#" },
    //    { type: "twitter", href: "#" },
    //     { type: "linkedin", href: "#" },
    //     ],
    // },
    // {
    //   name: "Ntokozo Juqu",
    //   role: "Social Media",
    //   img: "/a4.jpg",
    //  socials: [
    //   { type: "instagram", href: "#" },
    //     ],
    // },
    // {
    //   name: "Frances Guerrero",
    //   role: "Software Developer",
    //   img: "/a5.jpg",
    //     socials: [
    //       { type: "instagram", href: "#" },
    //     ],
    // },
    // {
    //   name: "Lori Stevens",
    //   role: "Graphic designer",
    //   img: "/a6.jpg",
    //   socials: [
    //   { type: "facebook", href: "#" },
    //   { type: "twitter", href: "#" },
    //   { type: "linkedin", href: "#" },
    // ],
    // },
    // {
    //   name: "Samuel Bishop",
    //   role: "Product designer",
    //   img: "/a7.jpg",
    //   socials: [
    //   { type: "instagram", href: "#" },
    //   { type: "facebook", href: "#" },
    //   { type: "linkedin", href: "#" },
    // ],
    // },
    // {
    //   name: "Amanda Reed",
    //   role: "Content writer",
    //   img: "/a8.jpg",
    //  socials: [
    //   { type: "instagram", href: "#" },
    //     { type: "facebook", href: "#" },
    //    { type: "twitter", href: "#" },
    //     { type: "linkedin", href: "#" },
    // ],
    // },
  ]

  return (
    <div className="w-full flex flex-col">
       <section className="w-full mx-auto pt-6 px-4 mt-5 md:px-0 rounded-md overflow-hidden">
            <div className="max-w-[110rem] mx-auto">
                <div
                className="relative h-[300px] md:h-[400px] xl:h-[500px] bg-center bg-cover rounded-md overflow-hidden bg-fixed"
                style={{ backgroundImage: "url('/04.jpg')" }}
                >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50 z-10"></div>

                {/* Title */}
                <div className="absolute inset-0 flex items-center justify-center text-center z-20">
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
                {teamMembers.map((member, idx) => (
                    <div
                      key={idx}
                      className="relative bg-transparent rounded-sm overflow-hidden  transition-shadow group"
                    >
                      {/* Social links */}
                      <div className="absolute top-3 right-3 gap-2 z-10 hidden group-hover:flex">
                          {member.socials.map((social, i) => {
                              const data = socialIconMap[social.type];
                              if (!data) return null; // skip unknown types

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
                        <Image
                          src={member.img}
                          alt={member.name}
                          width={275.76} height={367.7}
                          quality={100}
                          loading="eager"
                          priority={true}
                          className="object-cover transform hover:scale-104 transition-transform duration-800 ease-in-out w-full h-full"
                        />
                      </div>

                      {/* Body */}
                      <div className="text-start mt-4">
                          <h6 className="text-[1.2rem] font-semibold group-hover:text-[#0B9944] dark:hover:text-green-500 transition-colors duration-500 ease-in-out">
                              {member.name}
                          </h6>
                          <div className="font-normal text-[#c4c5c7] text-[0.875em] -mt-2">{member.role}</div>
                      </div>
                    </div>
                ))}
                </div>
            </div>
        </section>

        <section className="pt-0 mb-[7.5rem] mt-[4.5rem]">
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
                    Join our community <span className="text-sm ml-1"><FiChevronRight size={19}/></span>
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
                        <Link href="https://www.credly.com/badges/1619b837-1bbc-40ad-ac66-693d56a701a6/public_url" target="_blank" className="inline-flex items-start gap-2 hover:text-[#09b850] transition-colors ease-in-out duration-400">
                            <Image src="/certificates/microsoft-certified-fundamentals-badge.svg" className="rounded-sm h-10 w-10" alt="certificate-badge" width={100} height={100}/>
                            Microsoft Certified: Power Platform Fundamentals
                        </Link>
                      </li>
                      <li className="border-b pb-2 text-[#606261] dark:text-[#c4c5c7] mb-2">
                        <Link href="https://www.credly.com/badges/fbfd222e-7d33-41a5-b790-4d121731f3e5/public_url" target="_blank" className="inline-flex items-start gap-2 hover:text-[#09b850] transition-colors ease-in-out duration-400">
                            <Image src="/certificates/getting-started-with-threat-intelligence-and-hunting.png" className="rounded-sm h-10 w-10" alt="certificate-badge" width={100} height={100}/>
                            Getting Started with Threat Intelligence and Hunting
                        </Link>
                      </li>
                      <li className="border-b pb-2 text-[#606261] dark:text-[#c4c5c7] mb-2">
                        <Link href="/documents/Azure Fundamentals.pdf" target="_blank" className="inline-flex items-start gap-2 hover:text-[#09b850] transition-colors ease-in-out duration-400">
                            <Image src="/certificates/microsoft-certified-fundamentals-badge.svg" className="rounded-sm h-10 w-10" alt="certificate-badge" width={100} height={100}/>
                            Microsoft Certified: Azure Fundamentals
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <div>
                    <h5 className="text-[26.16px] md:text-[1.5rem] font-[700] mb-3">Awards</h5>
                    <p className="text-sm text-[#606261] dark:text-[#c4c5c7]">Ocean of Tech is actively building a portfolio designed to meet and exceed industry benchmarks.
                    While no formal awards have been issued yet, our trajectory, customer satisfaction, and project performance position us strongly for upcoming recognitions and industry distinctions.</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default TeamPage;

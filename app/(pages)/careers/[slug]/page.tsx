import { type Career, careers } from "@/components/conts";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { FaArrowRight, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { BsAwardFill } from "react-icons/bs";
import { LuBadgeCheck } from "react-icons/lu";
import NewsLetterSubForm from "@/components/forms/newsLetter";
import Image from "next/image";
import { FiUsers } from "react-icons/fi";
import type { Metadata } from "next";
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const job = careers.find((c) => c.slug === params.slug);

  if (!job) {
    return {
      title: "Job not found",
      description: "The job you are looking for could not be found."
    };
  }

  return {
    title: `${job.title}`,
    description: job.description.slice(0, 160), // Trim to ~160 chars for SEO
    openGraph: {
      title: `${job.title}`,
      description: job.description.slice(0, 200),
      url: `https://yourdomain.com/careers/${job.slug}`,
      type: "website",
      images: [
        {
          url: "/images/careers/og-default.jpg", // optional: category-specific OG image
          width: 1200,
          height: 630,
          alt: `${job.title} Open Position`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${job.title}`,
      description: job.description.slice(0, 200),
      images: ["/images/careers/og-default.jpg"]
    }
  };
}

export default function CareerApplyPage({ params }: { params: { slug: string } }) {
  const job: Career | undefined = careers.find((c: Career) => c.slug === params.slug);

  if (!job) {
    return <div className="text-center py-20">Job not found.</div>;
  }

  return (
    <div className="flex flex-col w-full">
        <section className="w-full max-w-5xl mx-auto px-4 py-20 text-center xl:py-20 pb-0">
            {/* Breadcrumb */}
            <nav className="mt-6 mb-[0.5rem]" aria-label="breadcrumb">
                <ol className="flex items-center justify-center gap-2">
                <li>
                    <Link
                    href="/"
                    className="hover:text-[#0B9944] hover:dark:text-green-500 transition-colors duration-500"
                    >
                    Home
                    </Link>
                </li>
                <GoDotFill size={10} className="mt-1 text-gray-500" />
                <li>
                    <Link
                    href="/careers"
                    className="hover:text-[#0B9944] hover:dark:text-green-500 transition-colors duration-500"
                    >
                    Careers
                    </Link>
                </li>
                <GoDotFill size={10} className="mt-1 text-gray-500" />
                <li  className="text-[#0B9944] dark:text-green-500 transition-colors duration-500">
                    {job.title}
                </li>
                </ol>
            </nav>

            <h1 className="text-[2.75rem] font-bold mb-[1.5rem]">{job.title}</h1>

            <div className="bg-[#202124] rounded-sm p-[2.5rem] w-full mb-[3.5rem]">
                <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
                    <div className="flex flex-col gap-1 md:gap-2 items-start justify-center">
                        <h4 className="text-[2rem] font-bold line-height-[1.25] text-white capitalize">
                            {job.category}
                        </h4>
                        <div className="flex flex-wrap gap-4 text-[#c4c5c7]">
                            <span className="bg-white rounded-[0.2rem] px-[0.65rem] py-[0.35rem] text-black flex items-center justify-center text-[0.75em] gap-2">
                                <FiUsers /> {job.candidates}
                            </span> 
                            <span className="flex items-center gap-2">
                                <FaMapMarkerAlt /> {job.location.city}, {job.location.country}
                            </span>
                            <span className="flex items-center gap-2">
                                <FaBriefcase /> {job.type}
                            </span>
                            <span className="flex items-center gap-2">
                                <BsAwardFill /> {job.education}
                            </span>
                        </div>
                    </div>
                    <Link href={`/careers/${job.slug}/application`} className="inline-flex items-center justify-center w-full sm:w-auto bg-[#0B9944] hover:bg-[#09B850] text-white px-5 py-2 rounded-sm transition">
                        Apply now <FaArrowRight className="ml-2" />
                    </Link>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Skills */}
                <div>
                    <h6 className="font-bold mb-[0.5rem] text-start text-[1.2rem] line-height-[1.25]">Skills:</h6>
                    <ul className="space-y-[1rem]">
                        {
                            job.skills.map((skill: Career["skills"][number], i: number) => (
                                <li className="flex items-start text-[#606261] font-semibold" key={i}>
                                    <LuBadgeCheck className="text-[#0B9944] w-5 h-5 mt-1 mr-2" />
                                    {skill}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* Responsibilities */}
                <div>
                    <h6 className="font-bold mb-[0.5rem] text-start text-[1.2rem] line-height-[1.25]">Responsibilities:</h6>
                    <ul className="space-y-[1rem]">
                        {
                            job.responsibilities.map((responsibility: Career["responsibilities"][number], i: number) => (
                                <li className="flex items-start text-[#606261] font-semibold" key={i}>
                                    <LuBadgeCheck className="text-[#0B9944] w-5 h-5 mt-1 mr-2" />
                                    {responsibility}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* Education */}
                <div>
                    <h6 className="font-bold mb-[0.5rem] text-start text-[1.2rem] line-height-[1.25]">Education:</h6>
                    <ul className="space-y-[1rem]">
                        {
                            job.education.map((edu: Career["education"][number], i: number) => (
                                <li className="flex items-start text-[#606261] font-semibold" key={i}>
                                    <LuBadgeCheck className="text-[#0B9944] w-5 h-5 mt-1 mr-2" />
                                    {edu}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* Experience */}
                <div>
                    <h6 className="font-bold mb-[0.5rem] text-start text-[1.2rem] line-height-[1.25]">Experience:</h6>
                    <ul className="space-y-[1rem]">
                        {
                            job.experience.map((exp: Career["experience"][number], i: number) => (
                                <li className="flex items-start text-[#606261] font-semibold" key={i}>
                                    <LuBadgeCheck className="text-[#0B9944] w-5 h-5 mt-1 mr-2" />
                                    {exp}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            {/* Additional requirements */}
            <div className="mt-8">
                <h6 className="font-bold mb-[0.5rem] text-start text-[1.2rem] line-height-[1.25]">Additional requirements:</h6>
                <p className="text-start">
                    {job.additionalRequirements}
                </p>
            </div>

            {/* Description */}
            <div className="mt-8">
                <h6 className="font-bold mb-[0.5rem] text-start text-[1.2rem] line-height-[1.25]">Description:</h6>
                <p className="text-start">
                    {job.description}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
                {/* Skills */}
                <div>
                    <h6 className="font-bold mb-[0.5rem] text-start text-[1.2rem] line-height-[1.25]">Apply via E-mail</h6>
                    <p className="text-start  text-[#606261] font-semibold">
                        If you need to send us mail regarding job opportunities, please write to us at <Link href={`mailto${job.contact.email}`} className="text-[#0B9944]">{job.contact.email}</Link> for more information.
                    </p>
                </div>

                {/* Responsibilities */}
                <div>
                    <h6 className="font-bold mb-[0.5rem] text-start text-[1.2rem] line-height-[1.25]">Apply via phone number</h6>
                    <p className="text-start text-[#606261] font-semibold">
                        Apply Now Via Whats App, Send us Your Resume on: <br />
                        <span className="text-[#0B9944]">{job.contact.phone}</span>
                    </p>
                </div>
            </div> 
            <div className="mt-5 w-full flex justify-start">
              <Link href={`/careers/${job.slug}/application`} className="inline-flex items-center justify-center w-full sm:w-auto bg-[#0B9944] hover:bg-[#09B850] text-white px-5 py-2 rounded-sm transition">
                Apply now <FaArrowRight className="ml-2" />
              </Link> 
            </div>
        </section>

        <section className="relative overflow-hidden bg-gray-100 dark:bg-[#292a2d] py-16">
                {/* SVG Decoration */}
                <figure className="absolute top-0 left-0 -ml-8 mt-5">
                  <svg
                    width="371"
                    height="354"
                    viewBox="0 0 371 354"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="172.5"
                      cy="176.5"
                      rx="131.5"
                      ry="125.5"
                      fill="url(#paint0_linear_195_2)"
                    ></ellipse>
                    <ellipse
                      cx="185.5"
                      cy="177"
                      rx="185.5"
                      ry="177"
                      fill="url(#paint1_linear_195_2)"
                    ></ellipse>
                    <defs>
                      <linearGradient
                        id="paint0_linear_195_2"
                        x1="172.5"
                        y1="51"
                        x2="172.5"
                        y2="302"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.0569271" stopColor="#D9D9D9" stopOpacity="0.5" />
                        <stop offset="0.998202" stopColor="#D9D9D9" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_195_2"
                        x1="185.5"
                        y1="0"
                        x2="185.5"
                        y2="354"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.0569271" stopColor="#D9D9D9" stopOpacity="0.2" />
                        <stop offset="0.998202" stopColor="#D9D9D9" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </figure>
        
                {/* Right-side Decoration */}
                <div className="absolute bottom-0 right-0 hidden md:block md:mr-20 -ml-30">
                  <Image
                    src="/cta-vector.svg"
                    width={163} height={200}
                    loading="lazy"
                    quality={100}
                    className="h-[200px]"
                    alt="vector-img"
                  />
                </div>
        
                <div className="max-w-7xl mx-auto px-6 md:px-0 relative">
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 items-center gap-8">
                    {/* Title and Content */}
                    <div className="xl:col-span-2">
                      <h2 className="text-[2.7rem] font-bold mb-3">
                        Subscribe to our newsletter
                      </h2>
                      <p className="text-[#606261] dark:text-[#c4c5c7] text-lg">
                        Our passion for customer excellence is just one reason why we are the market leader. We&apos;ve <br />
                        always worked very hard to give our customers the best experience.
                      </p>
                    </div>
        
                    {/* Input + Button */}
                    <NewsLetterSubForm />
                  </div>
                </div>
        </section> 
    </div>
  );
}
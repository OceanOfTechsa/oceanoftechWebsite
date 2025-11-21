import { CalendarPlus, Code, Cpu, Rocket, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";
import { GoDotFill, GoStarFill } from "react-icons/go";
import SoftwareDev from "@/components/SoftwareDevService";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { RiSupabaseLine } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { DiRedis } from "react-icons/di";
import { CSharpIcon } from "@/components/CSharpIcon";
import { DotNetIcon } from "@/components/DotNetIcon";
import { AiOutlineApi } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { SiJfrogpipelines } from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import { SiRedux } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { FiPenTool } from "react-icons/fi";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { LiaAwardSolid } from "react-icons/lia";
import { BadgeCheck } from "lucide-react";
import { PiHandshake } from "react-icons/pi";
import { PiUsersFour } from "react-icons/pi";
import { InfoIcon } from "lucide-react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import SoftwareDevelopmentTesimonials from "@/components/Testimonials/SoftwareDevelopmentTestimonials";
import { Button } from "@/components/ui/button";

const SoftwareDevelopmentPage = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
        <section className="flex flex-col md:flex-row w-full justify-between items-start gap-3 max-w-7xl mx-auto xl:py-20 pb-0 mt-10 sm:mt-0 px-4 lg:px-0">
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
                        <li>
                            <Link href="/services" className="hover:text-[#0B9944] hover:dark:text-green-500 transition-colors duration-500">
                                Services
                            </Link>
                        </li>
                        <GoDotFill size={10} className="mt-1 text-gray-500" />
                        <li className="text-[#0B9944] dark:text-green-500 transition-colors duration-500">
                            Custome Software Developmet
                        </li>
                    </ol>
                </nav>

                <h1 className="text-[40px] md:text-5xl lg:text-[4rem] font-bold leading-tight sm:max-w-4xl">
                    Building the Digital
                    <span className="inline-block" aria-label="Ocean of Tech Logo">
                        <svg
                            width="76"
                            height="51"
                            viewBox="0 0 76 51"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-12 mx-2 h-auto sm:w-20 md:w-24 lg:w-28 xl:w-16 transition-all duration-300"
                        >
                            {/* Left white half-circle with dark stroke */}
                            <mask id="left-mask">
                            <path
                                d="M25.5 51C18.737 51 12.251 48.3134 7.46878 43.5312C2.6866 38.749 0 32.263 0 25.5C0 18.737 2.6866 12.251 7.46878 7.46878C12.251 2.6866 18.737 0 25.5 0L25.5 25.5L25.5 51Z"
                                fill="white"
                            />
                            </mask>
                            <path
                            d="M25.5 51C18.737 51 12.251 48.3134 7.46878 43.5312C2.6866 38.749 0 32.263 0 25.5C0 18.737 2.6866 12.251 7.46878 7.46878C12.251 2.6866 18.737 0 25.5 0L25.5 25.5L25.5 51Z"
                            fill="white"
                            stroke="#202124"
                            strokeWidth="4"
                            mask="url(#left-mask)"
                            />

                            {/* Middle dark half-circle */}
                            <path
                            d="M50.5 51C43.737 51 37.251 48.3134 32.4688 43.5312C27.6866 38.749 25 32.263 25 25.5C25 18.737 27.6866 12.251 32.4688 7.46878C37.251 2.6866 43.737 0 50.5 0L50.5 25.5L50.5 51Z"
                            fill="#202124"
                            />

                            {/* Right green half-circle */}
                            <path
                            d="M75.5 51C68.737 51 62.251 48.3134 57.4688 43.5312C52.6866 38.749 50 32.263 50 25.5C50 18.737 52.6866 12.251 57.4688 7.46878C62.251 2.6866 68.737 0 75.5 0V25.5L75.5 51Z"
                            fill="#09B850"
                            />
                        </svg>
                    </span>
                    Core of Your Business
                </h1>

                <p className="text-lg max-w-3xl">
                    Ocean of Tech delivers bespoke software solutions tailored to your unique business needs. From complex enterprise systems to sleek consumer apps, we build it all.
                </p>
                
                <div className="flex flex:col sm:flex-row items-center justify-center">
                    <div className="grid md:grid-cols-2 gap-6 pt-6 sm:divide-x">
                        <Link className="flex items-center gap-2 group pe-3" href="https://g.page/r/CU3CZKX3tetcEBM/review" target="_blank">
                            <div className="text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                </svg>
                            </div>
                            <div className="mt-2">
                                <h6 className="font-semibold group-hover:text-[#0B9944] dark:group-hover:text-[#09b850] transition-colors ease-in-out duration-500">10+ Google reviews</h6>
                                <div className="flex items-center gap-2 -mt-2">
                                    <span className="text-xs mb-3">
                                        5/5
                                    </span>
                                    <ul className="flex items-center space-x-1 mb-3">
                                        <li><GoStarFill className="fill-yellow-500" size={13}/></li>
                                        <li><GoStarFill className="fill-yellow-500" size={13}/></li>
                                        <li><GoStarFill className="fill-yellow-500" size={13}/></li>
                                        <li><GoStarFill className="fill-yellow-500" size={13}/></li>
                                        <li><GoStarFill className="fill-yellow-500" size={13}/></li>
                                    </ul>
                                </div>
                            </div>
                        </Link>
                        <Link href="tel:0698902422" className="bg-[#202124] hover:bg-[#3c3e41] text-white px-[1.2rem] py-[0.8rem] rounded-sm font-semibold inline-flex gap-2 transition-all duration-500 ease-in-out items-center">
                            <CalendarPlus size={19}/> Book a meeting
                        </Link>
                    </div>
                </div>

                <SoftwareDev />
                <section className="w-full max-w-7xl mx-auto py-16 text-start">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        <div className="md:col-span-2 lg:col-span-1">
                            <h2 className="text-[2.75rem] font-bold mb-3">Our Modern Technology Stack</h2>
                        </div>
                    
                        {/* Front end dev tools */}
                        <div className="md:col-span-1">
                            <div className="border rounded-sm p-4 h-full bg-white dark:bg-[#191b1d]">
                                <div className="inline-flex items-center gap-2">
                                    <h6 className="text-[#09b850] mb-4 text-[1.2rem] font-semibold">01.</h6>
                                    <h5 className="text-[1.2rem] font-semibold mb-3">Front-End Development</h5>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span  className="rounded-sm border px-2 py-1 text-xs inline-flex items-center gap-2">
                                        <FaReact size={18} />
                                        React
                                    </span>
                                    <span  className="rounded-sm border px-2 py-1 text-xs inline-flex items-center gap-2">
                                        <RiNextjsLine size={18} />
                                        NextJs
                                    </span>
                                    <span  className="rounded-sm border px-2 py-1 text-xs inline-flex items-center gap-2">
                                        <TbBrandTypescript size={18}/>
                                        TypeScript
                                    </span>
                                    <span  className="rounded-sm border px-2 py-1 text-xs inline-flex items-center gap-2">
                                        <RiTailwindCssFill size={18}/>
                                        Tailwind CSS
                                    </span>
                                    <span  className="rounded-sm border px-2 py-1 text-xs inline-flex items-center gap-2">
                                        <FaBootstrap size={18} />
                                        Bootstrap CSS
                                    </span>
                                    <span  className="rounded-sm border px-2 py-1 text-xs inline-flex items-center gap-2">
                                        <FiFramer size={18} />
                                        Framer Motion
                                    </span>
                                    <span  className="rounded-sm border px-2 py-1 text-xs inline-flex items-center gap-2">
                                        <SiRedux size={18} />
                                        Redux
                                    </span>
                                </div> 
                            </div>
                        </div>

                        {/* Backend dev tools */}
                        <div className="md:col-span-1">
                            <div className="border rounded-sm p-4 h-full bg-white dark:bg-[#191b1d]">
                                <div className="inline-flex items-center gap-2">
                                    <h6 className="text-[#09b850] mb-4 text-[1.2rem] font-semibold">02.</h6>
                                    <h5 className="text-[1.2rem] font-semibold mb-3">Back-End Development</h5>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span  className="rounded-sm border px-2 py-1 text-xs inline-flex items-center gap-2">
                                        <FaNodeJs  size={18} />
                                        NodeJs
                                    </span>
                                    <span  className="rounded-sm border px-2 py-1 text-xs inline-flex items-center gap-2">
                                        <AiOutlineApi  size={18} />
                                        REST API Design
                                    </span>
                                    <span  className="rounded-sm border px-2 py-1 text-xs inline-flex items-center gap-2">
                                        <CSharpIcon />
                                        C#
                                    </span>
                                    <span  className="rounded-sm border px-2 py-1 text-xs inline-flex items-center gap-2">
                                        <DotNetIcon />
                                        .Net
                                    </span>
                                </div> 
                            </div>
                        </div>

                        {/* Database and storage tools */}
                        <div className="md:col-span-1">
                            <div className="border rounded-sm p-4 h-full bg-white dark:bg-[#191b1d]">
                                <div className="inline-flex items-center gap-2">
                                    <h6 className="text-[#09b850] mb-4 text-[1.2rem] font-semibold">03.</h6>
                                    <h5 className="text-[1.2rem] font-semibold mb-3">Databases & Storage</h5>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span  className="rounded-sm border px-2 py-1 text-xs inline-flex items-center gap-2">
                                        <SiPostgresql size={18}  />
                                        PostgresSQL
                                    </span>
                                    <span  className="rounded-sm border px-2 py-1 text-xs inline-flex items-center gap-2">
                                        <TbBrandMongodb size={18}  />
                                        MongoDB
                                    </span>
                                    <span  className="rounded-sm border px-2 py-1 text-xs inline-flex items-center gap-2">
                                        <RiSupabaseLine size={18} />
                                        Supabase
                                    </span>
                                    <span  className="rounded-sm border px-2 py-1 text-xs inline-flex items-center gap-2">
                                        <GrMysql size={18} />
                                        MySQL
                                    </span>
                                    <span  className="rounded-sm border px-2 py-1 text-xs inline-flex items-center gap-2">
                                        <DiRedis size={18} />
                                        Redis
                                    </span>
                                </div> 
                            </div>
                        </div>

                        {/* DevOps, Automation & Version Control tools */}
                        <div className="md:col-span-1">
                            <div className="border rounded-sm p-4 h-full bg-white dark:bg-[#191b1d]">
                                <div className="inline-flex items-center gap-2">
                                    <h6 className="text-[#09b850] mb-4 text-[1.2rem] font-semibold">04.</h6>
                                    <h5 className="text-[1.2rem] font-semibold mb-3">DevOps, & Version Control</h5>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span  className="rounded-sm border px-2 py-1 text-xs inline-flex items-center gap-2">
                                        <FaGitAlt size={18}  />
                                        Git
                                    </span>
                                    <span  className="rounded-sm border px-2 py-1 text-xs inline-flex items-center gap-2">
                                        <FaGithub size={18}  />
                                        GitHub
                                    </span>
                                    <span  className="rounded-sm border px-2 py-1 text-xs inline-flex items-center gap-2">
                                        <VscAzureDevops size={18} />
                                        Azure DevOps
                                    </span>
                                    <span  className="rounded-sm border px-2 py-1 text-xs inline-flex items-center gap-2">
                                        <SiJfrogpipelines size={18} />
                                        CI/CD Pipelines
                                    </span>
                                </div> 
                            </div>
                        </div>

                        {/* Testing & API Tools*/}
                        <div className="md:col-span-1">
                            <div className="border rounded-sm p-4 h-full bg-white dark:bg-[#191b1d]">
                                <div className="inline-flex items-center gap-2">
                                    <h6 className="text-[#09b850] mb-4 text-[1.2rem] font-semibold">05.</h6>
                                    <h5 className="text-[1.2rem] font-semibold mb-3">Testing & API Tools</h5>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span  className="rounded-sm border px-2 py-1 text-xs inline-flex items-center gap-2">
                                        <SiPostman size={18}  />
                                        Postman
                                    </span>
                                    <span  className="rounded-sm border px-2 py-1 text-xs inline-flex items-center gap-2">
                                        <SiJest size={18}  />
                                        Jest
                                    </span> 
                                </div> 
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
        <section className="pt-20 pb-10 w-full px-4 md:px-0 bg-[#202124] text-white">
            <div className="grid grid-cols-1 max-w-7xl mx-auto lg:grid-cols-12 items-center gap-10">
                {/* Image + Decoration */}
                <div className="lg:col-span-5 relative text-center">
                    {/* SVG Decoration */}
                    <figure className="absolute top-0 right-0 -mt-16 z-20 lg:-mr-14 hidden md:block">
                        <svg
                            width="120.4px"
                            height="124.5px"
                            viewBox="0 0 120.4 124.5"
                            className="text-gray-200"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path className="fill-black dark:fill-white" d="M92.9,58.4c-0.2-4.7-1.8-9-5-12.6c-3-3.3-6.4-6.2-10.4-8.4c-3.4-1.9-7-2.9-10.8-3.3c-3.1-0.4-6,0.2-8.6,1.8 c-6.5,3.8-11.5,9.1-14.6,16.1c-1.1,2.5-1.5,5.1-1.3,7.7c0.3,3.2,0.9,6.4,2.1,9.4c2.1,5.4,5.7,9.4,11.5,11c1.8,0.5,3.5,1,5.3,1.6 c2.1,0.7,4.3,0.8,6.5,0.5c2.4-0.3,4.8-0.8,7.1-1.4c1.8-0.5,3.4-1.5,4.6-2.9c2-2.2,3.9-4.6,5.2-7.3c0.7-1.4,1.3-3,1.6-4.5 c1.1-6.4-0.7-12.1-4.5-17.2c-1.8-2.5-4.3-4.2-7.2-5c-3-0.8-6.1-1.1-9.2-0.8c-4.5,0.4-8.4,2.2-11.4,5.7c-2.1,2.4-3.6,5-4.3,8.1 c-0.6,2.4-0.5,4.8-0.6,7.2c-0.2,5.8,6.2,12.5,12.3,12c2.7-0.2,5.5-0.5,8.2-0.7c5.4-0.5,9.3-4.9,9.8-9.6c0.2-1.9,0.2-3.9,0.1-5.8 c-0.1-2.5-1.3-4.6-3.1-6.3c-3.1-2.9-6.8-4.1-11.1-3.7c-2.4,0.2-4.4,1.2-5.8,3.2c-1.8,2.5-2.8,5.3-3.1,8.3c-0.2,1.9,0.3,3.7,1.9,5 c2.7,2.2,5.8,3.3,9.2,3c1.6-0.1,2.8-0.9,3.8-2.2c1.6-2.1,1.6-4.5,1.1-6.9c-1-4.3-4.6-5.5-8.2-2.9c-0.3,0.2-0.4,0.7-0.6,1.1 c0.1,0.1,0.3,0.3,0.4,0.4c0.9-0.4,1.8-0.9,2.8-1.2c1-0.3,2-0.1,2.8,0.7c1.6,1.8,1.9,5.4,0.5,7.4c-0.9,1.2-2.1,1.9-3.5,1.8 c-2.3-0.1-4.5-0.9-6.4-2.3c-1.3-1-1.8-2.3-1.7-3.9c0.2-1.7,0.7-3.4,1.4-4.9c1.8-3.6,4-4.9,8.1-4.4c0.9,0.1,1.8,0.3,2.7,0.6 c4.5,1.7,6.8,5,6.6,9.8c0,1.4-0.2,2.8-0.5,4.1c-0.9,3.2-2.9,5.5-6.3,6.1c-2.9,0.5-5.9,0.7-8.9,0.9c-5.6,0.4-10.5-5.4-10.3-9.9 c0.1-2.1,0.2-4.1,0.6-6.1c1.5-6.9,7.2-11.6,14.2-11.9c1.7-0.1,3.5,0,5.2,0.2c3.5,0.4,6.4,1.9,8.5,4.7c3.1,4.2,4.6,8.9,4.2,14.2 c-0.3,3.5-2.1,6.2-4,9c-2.1,3-4.7,5-8.4,5.4c-1.1,0.1-2.3,0.4-3.4,0.7c-2,0.5-3.9,0.4-5.8-0.1c-2.3-0.6-4.6-1.3-6.9-2 c-3.1-1-5.4-3-7.1-5.7c-2.7-4.3-3.8-9.1-3.8-14.1c0-2,0.6-3.8,1.5-5.6c2.9-6,7.3-10.5,12.9-14c2.2-1.4,4.7-1.9,7.3-1.6 c4.2,0.4,8.1,1.6,11.6,3.9c3.1,2,5.8,4.5,8.3,7.2c1.7,1.9,2.9,4.1,3.6,6.6c1.5,5,1.1,10.1-0.2,15c-2.2,8-9.4,14.2-17.5,15.9 c-1.7,0.4-3.3,0.9-4.9,1.5c-1.1,0.4-1.6,1.4-1.2,2.1c0.5,0.8,1.4,0.7,2.1,0.5c2.5-0.7,5.1-1.3,7.6-2.2c1.4-0.5,2.8-1.1,4-1.9 c2.9-1.7,5.4-3.9,7.6-6.4c2.6-3,4.5-6.5,5.2-10.4C92.8,65.1,93,61.7,92.9,58.4z"></path> 
                            <path className="fill-[#0B9944] dark:fill-green-500" d="M98.2,97.6c-1.9-3-3.8-6-5.7-9c-0.7-1-1.2-2.2-3-3c0,0.8-0.1,1.3,0,1.7c0.4,0.9,1,1.8,1.5,2.7 c2.8,5,5.7,9.9,9.2,14.5c1,1.2,2.2,2.3,3.4,3.4c0.3,0.3,0.8,0.4,1.2-0.3c-0.5-0.8-1.1-1.8-1.8-2.7C101.4,102.3,99.7,100,98.2,97.6z "></path> 
                            <path className="fill-[#0B9944] dark:fill-green-500" d="M75.3,98c-0.5-1.5-1.2-3-1.9-4.4c-0.1-0.3-0.6-0.4-0.9-0.6c-0.2,0.2-0.3,0.3-0.5,0.5c0.1,0.5,0.2,1.1,0.4,1.6 c1.6,5.3,3.1,10.5,4.8,15.8c0.5,1.6,1.1,3.3,1.7,4.9c0.5,1.3,1.4,1.8,1.9,1.4c0.8-0.6,0.5-1.4,0.2-2.2C79,109.3,77.2,103.6,75.3,98 z"></path> 
                            <path className="fill-[#0B9944] dark:fill-green-500" d="M26.5,69.5c-5.5,1.6-11,3.2-16.5,4.8c-2.1,0.6-4.1,1.4-6.1,2.2c-0.6,0.2-1.1,0.7-1.9,1.2 c5.9-0.4,24.8-6,28.2-8.3C28.8,68.8,27.6,69.2,26.5,69.5z"></path> 
                            <path className="fill-[#0B9944] dark:fill-green-500" d="M55,96.3c-2.2,7.9-4.5,15.8-6.7,23.8c-0.3,1.2-0.4,2.5-0.7,4.4c0.6-0.9,0.8-1.2,0.9-1.5 c2.6-7.8,5.1-15.7,7.6-23.5c0.3-1.1,0.5-2.2,0.6-3.4c0-0.4-0.4-0.9-0.8-1.7C55.5,95.3,55.2,95.8,55,96.3z"></path> 
                            <path className="fill-[#0B9944] dark:fill-green-500" d="M25.2,48.7c0.6,0.3,1.3,0.5,2,0.6c0.5,0.1,1.1-0.1,1.6-0.2c0-0.2,0-0.3,0-0.5c-3-1.4-6-3-9-4.2 c-3.2-1.3-6.4-2.4-9.7-3.5c-3.1-1-6.1-2.3-10-2.8c0.8,0.7,1.1,1.1,1.5,1.3c1.5,0.7,2.9,1.3,4.4,1.9C12.4,43.6,18.9,45.7,25.2,48.7z "></path> 
                            <path className="fill-[#0B9944] dark:fill-green-500" d="M38.2,86.5c-0.7,0.3-1.4,0.8-2,1.3c-5.1,4.5-10.1,9-14.5,14.2c-0.9,1-1.6,2.2-2.5,3.3c0.1,0.1,0.2,0.3,0.4,0.4 c6.7-6.2,13.4-12.3,20.1-18.5c0.1-0.1,0-0.4,0-0.9C39.2,86.4,38.6,86.3,38.2,86.5z"></path> 
                            <path className="fill-[#0B9944] dark:fill-green-500" d="M106.5,77.4c-1.1-1.1-2.4-2.2-3.6-3.1c-0.7-0.5-1.6-0.8-2.5-1c-0.5-0.1-1.2,0-1,1.1c2.1,0.8,3.6,2.5,5.2,4.1 c1.3,1.3,2.4,2.7,3.8,3.9c1.8,1.5,3.8,3,5.7,4.3c1,0.7,2.2,1.3,4.1,0.7c-0.7-0.7-1.1-1.1-1.5-1.4C112.9,83.6,109.6,80.5,106.5,77.4 z"></path> 
                            <path className="fill-[#0B9944] dark:fill-green-500" d="M33.5,27.3c0.7,0.7,1.6,1.3,2.5,1.8c0.5,0.3,1.3,0.4,1.9,0.5c-2.3-2.2-4-4.6-6-6.8c-3.5-3.8-7-7.6-10.5-11.3 c-0.4-0.4-0.7-0.9-1.4-0.6c-0.5,0.6-0.1,1.1,0.3,1.5C24.6,17.4,29.1,22.4,33.5,27.3z"></path> 
                            <path className="fill-[#0B9944] dark:fill-green-500" d="M53.3,20c0.1,1.1,0.3,2.3,0.6,3.4c0.1,0.4,0.7,0.6,1.3,1c-0.1-3.1-0.1-5.8-0.3-8.5c-0.1-2.6-0.4-5.2-0.6-7.9 c-0.4-5-0.6-5.7-2-8c0,0.9-0.1,1.6-0.1,2.2C52.6,8.2,52.9,14.1,53.3,20z"></path> 
                            <path className="fill-[#0B9944] dark:fill-green-500" d="M101.1,56.2c0.2,0.4,0.3,0.7,0.5,0.7c4.9,1.1,9.8,2.2,14.7,3.1c1.3,0.3,2.7,0.4,4.1-0.5 c-0.8-0.3-1.7-0.6-2.5-0.8c-5.2-0.9-10.3-1.9-15.5-2.7C102,56,101.6,56.1,101.1,56.2z"></path> 
                            <path className="fill-[#0B9944] dark:fill-green-500" d="M97.8,36.8c4.7-1.9,8.9-4.8,12.6-8.3c0.3-0.3,0.7-0.6,0.1-1.3c-2.5,1.7-5.1,3.5-7.7,5.1 c-2.6,1.6-5.3,3-8.1,4.6C95.9,37.7,96.8,37.2,97.8,36.8z"></path> 
                            <path className="fill-[#0B9944] dark:fill-green-500" d="M81.6,11.5c0.5-1.6,0.8-3.2,1.2-4.8c-0.3,0.2-0.6,0.3-0.7,0.5c-1.6,4.3-3.2,8.5-4.7,12.8 c-0.2,0.6-0.1,1.3-0.2,1.9C79.1,18.6,80.5,15.1,81.6,11.5z"></path> 
                            <path className="fill-[#0B9944] dark:fill-green-500" d="M82.8,6.5c0,0,0,0.1,0,0.1C82.8,6.6,82.8,6.6,82.8,6.5C82.9,6.6,82.8,6.5,82.8,6.5z"></path>
                        </svg>
                    </figure>
                    <Image
                    src="/coding-pic.jpg"
                    alt="Company team"
                    width={512}
                    height={682}
                    className="rounded-md relative z-10 object-cover"
                    />
                </div>

                {/* Content */}
                <div className="lg:col-span-7 lg:pl-10 mt-5 lg:mt-0 text-start">
                    <h2 className="text-[2.75rem] font-bold mb-4 text-white">
                        Why Choose <br className="hidden sm:block" /> Ocean of Tech?
                    </h2>
                    <p className="mb-8 text-white">
                        We don't just write code; we engineer solutions. Our methodology is rooted in transparency, agility, and technical excellence.
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                                <Code className="h-5 w-5 text-blue-500" />
                            </div>
                            <h6 className="font-bold mt-2 mb-1 text-[1.2rem] text-white">Clean Code</h6>
                            <p className="text-white">
                                Maintainable, scalable, and well-documented codebases.
                            </p>
                        </div>

                        <div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                                <Zap className="h-5 w-5 text-green-500" />
                            </div>
                            <h6 className="font-bold mt-2 mb-1 text-[1.2rem] text-white">High Performance</h6>
                            <p className="text-white">
                                Optimized for speed and efficiency across all devices.
                            </p>
                        </div>

                        <div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                                <ShieldCheck className="h-5 w-5 text-purple-500" />
                            </div>
                            <h6 className="font-bold mt-2 mb-1 text-[1.2rem] text-white">Secure by Design</h6>
                            <p className="text-white">
                                Security best practices integrated from day one.
                            </p>
                        </div>

                        <div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                                <Cpu className="h-5 w-5 text-orange-500" />
                            </div>
                            <h6 className="font-bold mt-2 mb-1 text-[1.2rem] text-white">Scalable Architecture</h6>
                            <p className="text-white">
                                Systems that grow with your business needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <video
            src="/coding.mp4"
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            preload="metadata"
            style={{
                height: "60vh",
                minHeight: "280px",
                maxHeight: "480px",
                width: "100vw",        // forces full width
                left: 0,
                right: 0,
            }}
        />
        <section className="w-full max-w-7xl mx-auto py-16 text-start">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">              
                <div className="md:col-span-1">
                    <div className="border rounded-sm p-4 h-full bg-white dark:bg-[#191b1d]">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                            <Code className="h-5 w-5 text-green-500" />
                        </div>
                        <h6 className="font-bold mt-2 mb-1 text-[1.2rem] ">Web Applications</h6>
                        <p className="">
                            Build powerful, responsive web apps with React, Next.js, and modern frameworks. Fast, scalable, and SEO-optimized.
                        </p>
                    </div>
                </div>
                <div className="md:col-span-1">
                    <div className="border rounded-sm p-4 h-full bg-white dark:bg-[#191b1d]">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                            <Cpu className="h-5 w-5 text-green-500" />
                        </div>
                        <h6 className="font-bold mt-2 mb-1 text-[1.2rem] ">Enterprise Systems</h6>
                        <p className="">
                            Complex business logic, ERP integrations, and custom workflows built with .NET, C#, and enterprise-grade architecture.
                        </p>
                    </div>
                </div>

                <div className="md:col-span-2 lg:col-span-1 flex-col gap-2">
                    <h2 className="text-[2.75rem] font-bold mb-3">Comprehensive Software Solutions</h2>
                    <p>From initial concept to deployment and beyond, we provide end-to-end software development services.</p>
                </div>
                <div className="md:col-span-1">
                    <div className="border rounded-sm p-4 h-full bg-white dark:bg-[#191b1d]">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                            <Zap className="h-5 w-5 text-green-500" />
                        </div>
                        <h6 className="font-bold mt-2 mb-1 text-[1.2rem] ">Legacy Modernization</h6>
                        <p className="">
                            Transform outdated systems into modern, maintainable applications without disrupting your business operations.
                        </p>
                    </div>
                </div>
                <div className="md:col-span-1">
                    <div className="border rounded-sm p-4 h-full bg-white dark:bg-[#191b1d]">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                            <PiUsersFour className="h-5 w-5 text-green-500" />
                        </div>
                        <h6 className="font-bold mt-2 mb-1 text-[1.2rem] ">Custom SaaS Platforms</h6>
                        <p className="">
                            Multi-tenant SaaS solutions with subscription management, analytics, and white-label capabilities.
                        </p>
                    </div>
                </div>
                <div className="md:col-span-1">
                    <div className="border rounded-sm p-4 h-full bg-white dark:bg-[#191b1d]">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                            <AiOutlineApi className="h-5 w-5 text-green-500" />
                        </div>
                        <h6 className="font-bold mt-2 mb-1 text-[1.2rem] ">API Development</h6>
                        <p className="">
                            RESTful APIs designed for performance, security, and seamless integration with your existing systems.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-12 md:py-16">
            <div className="px-4 max-w-7xl mx-auto sm:px-0">
                {/* Title */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className="text-[2.75rem] font-bold mb-3">Our Development Lifecycle</h2>
                    <p className="text-[#606261] dark:text-[#c4c5c7]">
                        A proven, agile methodology that ensures transparency, quality, and timely delivery.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative w-full">
                    {/* Step item */}
                    <div className="bg-transparent text-center p-3 relative">
                        {/* Icon */}
                        <div className="w-12 h-12 bg-[#202124] text-white rounded-full flex items-center justify-center mx-auto relative z-10">
                            <AiOutlineSearch size={20} />
                        </div>
                        {/* Dotted line to the right */}
                        <div className="hidden lg:block absolute top-9 left-1/2 w-full h-0.5">
                            <div className="ml-6 border-t-2 border-dotted border-gray-300 dark:border-gray-500 me-4"></div>
                        </div>
                        <div className="mt-4">
                            <h5 className="text-sm font-semibold mb-1">Discovery & Planning</h5>
                            <p className="text-xs ">We dive deep into your business requirements, user needs, and technical constraints to create a comprehensive roadmap.</p>
                        </div>
                    </div>
                    
                    {/* Step item */}
                    <div className="bg-transparent text-center p-3 relative">
                        {/* Icon */}
                        <div className="w-12 h-12 bg-[#202124] text-white rounded-full flex items-center justify-center mx-auto relative z-10">
                            <FiPenTool size={20} />
                        </div>
                        {/* Dotted line to the right */}
                        <div className="hidden lg:block absolute top-9 left-1/2 w-full h-0.5">
                            <div className="ml-6 border-t-2 border-dotted border-gray-300 dark:border-gray-500 me-4"></div>
                        </div>
                        <div className="mt-4">
                            <h5 className="text-sm font-semibold mb-1">UI/UX Design</h5>
                            <p className="text-xs ">Our designers create intuitive, engaging interfaces that align with your brand and provide exceptional user experiences.</p>
                        </div>
                    </div>
                    
                    {/* Step item */}
                    <div className="bg-transparent text-center p-3 relative">
                        {/* Icon */}
                        <div className="w-12 h-12 bg-[#202124] text-white rounded-full flex items-center justify-center mx-auto relative z-10">
                            <SiJfrogpipelines size={20} />
                        </div>
                        {/* Dotted line to the right */}
                        <div className="hidden lg:block absolute top-9 left-1/2 w-full h-0.5">
                            <div className="ml-6 border-t-2 border-dotted border-gray-300 dark:border-gray-500 me-4"></div>
                        </div>
                        <div className="mt-4">
                            <h5 className="text-sm font-semibold mb-1">Agile Development</h5>
                            <p className="text-xs ">We build your software in iterative sprints, giving you regular updates and the flexibility to adapt to changes.</p>
                        </div>
                    </div>
                    
                    {/* Step item */}
                    <div className="bg-transparent text-center p-3 relative">
                        {/* Icon */}
                        <div className="w-12 h-12 bg-[#202124] text-white rounded-full flex items-center justify-center mx-auto relative z-10">
                            <ShieldCheck size={20} />
                        </div>
                        {/* Dotted line to the right */}
                        <div className="hidden lg:block absolute top-9 left-1/2 w-full h-0.5">
                            <div className="ml-6 border-t-2 border-dotted border-gray-300 dark:border-gray-500 me-4"></div>
                        </div>
                        <div className="mt-4">
                            <h5 className="text-sm font-semibold mb-1">Quality Assurance</h5>
                            <p className="text-xs ">Rigorous testing including unit tests, integration tests, and user acceptance testing to ensure a bug-free launch</p>
                        </div>
                    </div>

                    {/* Step item */}
                    <div className="bg-transparent text-center p-3 relative">
                        {/* Icon */}
                        <div className="w-12 h-12 bg-[#202124] text-white rounded-full flex items-center justify-center mx-auto relative z-10">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M9.752 6.193c.599.6 1.73.437 2.528-.362.798-.799.96-1.932.362-2.531-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532Z"/>
                                <path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9.42 9.42 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a9.556 9.556 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093.067.017.12.033.16.045.184.06.279.13.351.295l.029.073a3.475 3.475 0 0 1 .157.721c.055.485.051 1.178-.159 2.065Zm-4.828 7.475.04-.04-.107 1.081a1.536 1.536 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a8.548 8.548 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006ZM5.205 5c-.625.626-.94 1.351-1.004 2.09a8.497 8.497 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107-.04.039Zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a2.835 2.835 0 0 0-.045-.283 3.078 3.078 0 0 0-.3-.041Z"/>
                            </svg>
                        </div>
                        {/* Dotted line to the right */}
                        <div className="hidden lg:block absolute top-9 left-1/2 w-full h-0.5">
                            <div className="ml-6 border-t-2 border-dotted border-gray-300 dark:border-gray-500 me-4"></div>
                        </div>
                        <div className="mt-4">
                            <h5 className="text-sm font-semibold mb-1">Deployment & Launch</h5>
                            <p className="text-xs ">Seamless deployment to production environments with zero downtime strategies and performance monitoring.</p>
                        </div>
                    </div>

                    {/* Step item */}
                    <div className="bg-transparent text-center p-3 relative">
                        {/* Icon */}
                        <div className="w-12 h-12 bg-[#202124] text-white rounded-full flex items-center justify-center mx-auto relative z-10">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
                            </svg>
                        </div>
                        <div className="mt-4">
                            <h5 className="text-sm font-semibold mb-1">Maintenance & Support</h5>
                            <p className="text-xs">Ongoing support, updates, and feature enhancements to keep your software secure and competitive.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <SoftwareDevelopmentTesimonials />
        <section className="py-16 lg:py-18">
            <div className="max-w-7xl mx-auto px-4 sm:px-0">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className="text-[2.75rem] font-bold mb-3">Flexible Engagement Models</h2>
                    <p className="text-[#606261] dark:text-[#c4c5c7]">
                    Choose the engagement model that best fits your project scope, timeline, and budget.
                    </p>
                </div>

                <div className="mx-auto mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
                        <div  className="w-full max-w-md">
                            <div className="bg-[#f8f8f8] dark:bg-[#202124] rounded-sm shadow-2xs overflow-hidden group transition-shadow duration-300">
                                {/* Card Body */}
                                <div className="p-6">
                                    <h6 className="text-2xl font-semibold mb-2">
                                        Fixed Price
                                    </h6>
                                    <p className="mb-4">
                                        Perfect for well-defined projects with clear requirements and deliverables.
                                    </p>
                                    <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#292a2d] border rounded-[0.2rem] inline-flex items-center gap-2">
                                    <LiaAwardSolid size={20} />
                                     Small to medium projects
                                    </span>

                                    <div className="relative flex p-0 mt-6 items-center">
                                        <p className="flex-shrink me-4">Included</p>
                                        <div className="flex-grow border-t -mt-[1.2rem]"></div>
                                    </div>

                                    <ul className="space-y-2 mb-2 sm:mb-4 w-full">
                                        <li className="flex items-center dark:text-[#c4c5c7]">
                                            <BadgeCheck className="text-[#0B9944] mr-2" size="18"/>
                                            Detailed project scope
                                        </li>
                                        <li className="flex items-center dark:text-[#c4c5c7]">
                                            <BadgeCheck className="text-[#0B9944] mr-2" size="18"/>
                                            Fixed timeline & budget
                                        </li>
                                        <li className="flex items-center dark:text-[#c4c5c7]">
                                            <BadgeCheck className="text-[#0B9944] mr-2" size="18"/>
                                            Milestone-based payments
                                        </li>
                                        <li className="flex items-center dark:text-[#c4c5c7]">
                                            <BadgeCheck className="text-[#0B9944] mr-2" size="18"/>
                                            Complete documentation
                                        </li>
                                        <li className="flex items-center dark:text-[#c4c5c7]">
                                            <BadgeCheck className="text-[#0B9944] mr-2" size="18"/>
                                            3 months post-launch support
                                        </li>
                                    </ul>
                                    <Button className="bg-[#3c3e41] hover:dark:bg-[#161618] text-white rounded-[0.2rem] w-full">
                                        <span className="flex gap-2 items-center">
                                            <Link href="/contact">Get started</Link>
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div  className="w-full max-w-md mt-4 shadow-sm">
                            <div className="relative bg-[#f8f8f8] dark:bg-[#202124] border-2 border-green-500 rounded-sm shadow-2xs overflow-hidden group transition-shadow duration-300">
                                {/* Card Body */}
                                <div className="bg-green-500 rounded-xs px-3 py-1 text-xs text-white absolute top-0 right-0 mt-5 mr-5">
                                    Most Popular
                                </div>
                                <div className="p-6">
                                    <h6 className="text-2xl font-semibold mb-2">
                                        Time & Materials
                                    </h6>
                                    <p className="mb-4">
                                        Ideal for evolving projects that require flexibility and iterative development.
                                    </p>
                                    <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#292a2d] border rounded-[0.2rem] inline-flex items-center gap-2">
                                    <PiHandshake size={20} />
                                        Long-term partnerships
                                    </span>

                                    <div className="relative flex p-0 mt-6 items-center">
                                        <p className="flex-shrink me-4">Included</p>
                                        <div className="flex-grow border-t -mt-[1.2rem]"></div>
                                    </div>

                                    <ul className="space-y-2 mb-2 sm:mb-4 w-full">
                                        <li className="flex items-center dark:text-[#c4c5c7]">
                                            <BadgeCheck className="text-[#0B9944] mr-2" size="18"/>
                                            Flexible scope adjustments
                                        </li>
                                        <li className="flex items-center dark:text-[#c4c5c7]">
                                            <BadgeCheck className="text-[#0B9944] mr-2" size="18"/>
                                            Pay for actual hours worked
                                        </li>
                                        <li className="flex items-center dark:text-[#c4c5c7]">
                                            <BadgeCheck className="text-[#0B9944] mr-2" size="18"/>
                                            Sprint-based delivery
                                        </li>
                                        <li className="flex items-center dark:text-[#c4c5c7]">
                                            <BadgeCheck className="text-[#0B9944] mr-2" size="18"/>
                                            Weekly progress reports
                                        </li>
                                        <li className="flex items-center dark:text-[#c4c5c7]">
                                            <BadgeCheck className="text-[#0B9944] mr-2" size="18"/>
                                            Weekly progress reports
                                        </li>
                                        <li className="flex items-center dark:text-[#c4c5c7]">
                                            <BadgeCheck className="text-[#0B9944] mr-2" size="18"/>
                                            And more
                                            <HoverCard>
                                                <HoverCardTrigger asChild>
                                                    <button className="flex items-center gap-1 text-green-600 hover:text-green-700 ml-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span className="text-sm font-medium">Show Everything</span>
                                                        <InfoIcon className="w-4 h-4" />
                                                    </button>
                                                </HoverCardTrigger>
                                                <HoverCardContent className="w-full">
                                                    <div className="relative flex p-0 items-center">
                                                        <p className="flex-shrink me-4">More</p>
                                                        <div className="flex-grow border-t -mt-[1.2rem]"></div>
                                                    </div>
                                                    <ul className="space-y-2 mb-2 sm:mb-4 w-full">
                                                        <li className="flex items-center dark:text-[#c4c5c7]">
                                                            <BadgeCheck className="text-[#0B9944] mr-2" size="18"/>
                                                            Flexible scope adjustments
                                                        </li>
                                                        <li className="flex items-center dark:text-[#c4c5c7]">
                                                            <BadgeCheck className="text-[#0B9944] mr-2" size="18"/>
                                                            Pay for actual hours worked
                                                        </li>
                                                        <li className="flex items-center dark:text-[#c4c5c7]">
                                                            <BadgeCheck className="text-[#0B9944] mr-2" size="18"/>
                                                            Sprint-based delivery
                                                        </li>
                                                        <li className="flex items-center dark:text-[#c4c5c7]">
                                                            <BadgeCheck className="text-[#0B9944] mr-2" size="18"/>
                                                            Weekly progress reports
                                                        </li>
                                                        <li className="flex items-center dark:text-[#c4c5c7]">
                                                            <BadgeCheck className="text-[#0B9944] mr-2" size="18"/>
                                                            Weekly progress reports
                                                        </li>
                                                    </ul>
                                                </HoverCardContent>
                                            </HoverCard>
                                        </li>
                                    </ul>
                                    <Button className="bg-[#09b850] hover:bg-[#0B9944] text-white rounded-[0.2rem] w-full">
                                        <span className="flex gap-2 items-center">
                                            <Link href="/contact">Get started</Link>
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div  className="w-full max-w-md">
                            <div className="bg-[#f8f8f8] dark:bg-[#202124] rounded-sm shadow-2xs overflow-hidden group transition-shadow duration-300">
                                {/* Card Body */}
                                <div className="p-6">
                                    <h6 className="text-2xl font-semibold mb-2">
                                        Dedicated Team
                                    </h6>
                                    <p className="mb-4">
                                        Get a dedicated team of developers working exclusively on your project.
                                    </p>
                                    <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#292a2d] border rounded-[0.2rem] inline-flex items-center gap-2">
                                    <Rocket size={20} />
                                        Enterprise solutions
                                    </span>

                                    <div className="relative flex p-0 mt-6 items-center">
                                        <p className="flex-shrink me-4">Included</p>
                                        <div className="flex-grow border-t -mt-[1.2rem]"></div>
                                    </div>

                                    <ul className="space-y-2 mb-2 sm:mb-4 w-full">
                                        <li className="flex items-center dark:text-[#c4c5c7]">
                                            <BadgeCheck className="text-[#0B9944] mr-2" size="18"/>
                                            Full-time team commitment
                                        </li>
                                        <li className="flex items-center dark:text-[#c4c5c7]">
                                            <BadgeCheck className="text-[#0B9944] mr-2" size="18"/>
                                            Direct team communication
                                        </li>
                                        <li className="flex items-center dark:text-[#c4c5c7]">
                                            <BadgeCheck className="text-[#0B9944] mr-2" size="18"/>
                                            Your project roadmap
                                        </li>
                                        <li className="flex items-center dark:text-[#c4c5c7]">
                                            <BadgeCheck className="text-[#0B9944] mr-2" size="18"/>
                                            Scalable team size
                                        </li>
                                        <li className="flex items-center dark:text-[#c4c5c7]">
                                            <BadgeCheck className="text-[#0B9944] mr-2" size="18"/>
                                            3 months post-launch support
                                        </li>
                                    </ul>
                                    <Button className="bg-[#3c3e41] hover:dark:bg-[#161618] text-white rounded-[0.2rem] w-full">
                                        <span className="flex gap-2 items-center">
                                            <Link href="/contact">Get started</Link>
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-16 lg:py-18">
            <div className="max-w-5xl mx-auto px-4 sm:px-0">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className="text-[2.75rem] font-bold mb-3">Frequently Asked Questions</h2>
                    <p className="text-[#606261] dark:text-[#c4c5c7]">
                        Need help with something? Here are our most frequently asked questions.
                    </p>
                </div>

                <Accordion type="single" collapsible defaultValue="1">
                    <AccordionItem value="1" className="border-none">
                        <AccordionTrigger className="border h-16 flex items-center py-[4rem] px-[1.25rem] p-3 rounded-sm cursor-pointer font-[600] focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black text-lg">
                            How long does a typical software project take?
                        </AccordionTrigger>
                        <AccordionContent className="my-[0.5rem] py-[0.2rem] px-[1rem] text-[#606261] dark:text-[#c4c5c7] font-normal text-lg mb-3">
                        Project timelines vary based on complexity. A simple web application can take 6-8 weeks, while enterprise systems may require 3-6 months. We provide detailed timelines during the discovery phase.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="2" className="border-none">
                        <AccordionTrigger className="border h-16 flex items-center py-[4rem] px-[1.25rem] p-3 rounded-sm cursor-pointer font-[600] focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black text-lg">
                            Do you provide ongoing support after launch?
                        </AccordionTrigger>
                        <AccordionContent className="my-[0.5rem] py-[0.2rem] px-[1rem] text-[#606261] dark:text-[#c4c5c7] font-normal text-lg mb-3">
                            Yes! All projects include 3 months of post-launch support. We also offer extended maintenance packages with SLAs, monitoring, and continuous improvements.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="3" className="border-none">
                        <AccordionTrigger className="border h-16 flex items-center py-[4rem] px-[1.25rem] p-3 rounded-sm cursor-pointer font-[600] focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black text-lg">
                            What technologies do you work with?
                        </AccordionTrigger>
                        <AccordionContent className="my-[0.5rem] py-[0.2rem] px-[1rem] text-[#606261] dark:text-[#c4c5c7] font-normal text-lg mb-3">
                            We're experts in TypeScript, React, Next.js, C#, .NET, Node.js, SQL databases, and cloud platforms (AWS, Azure, Google Cloud). We choose the best tech for your specific needs.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="4" className="border-none">
                        <AccordionTrigger className="border h-16 flex items-center py-[4rem] px-[1.25rem] p-3 rounded-sm cursor-pointer font-[600] focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black text-lg">
                            How do you ensure code quality?
                        </AccordionTrigger>
                        <AccordionContent className="my-[0.5rem] py-[0.2rem] px-[1rem] text-[#606261] dark:text-[#c4c5c7] font-normal text-lg mb-3">
                        We follow industry best practices: code reviews, automated testing, CI/CD pipelines, and comprehensive documentation. Every line of code is tested and reviewed before deployment.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    </div>
  )
}
export default SoftwareDevelopmentPage;
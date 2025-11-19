import { CalendarPlus, MoveRight, Phone } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";
import Image from "next/image";
import { GoArrowRight, GoDotFill, GoStarFill } from "react-icons/go";
import { Metadata } from "next";
import SEOServicesCarousel from "@/components/SEOServices";
import { FiChevronRight } from "react-icons/fi";
import TestimonialsStatsSection from "@/components/SeoTest";
import EmailOnlyContactForm from "@/components/forms/emailOnlyContactForm";

export const metadata: Metadata = {
    title: "Search Engine Optimisation"
};
const SeoPage = (): JSX.Element => {
    const portfolioData = [
        {
          id: 1,
          title: "Website Optimization for TechWave",
          description: "The most powerful software & app landing software marketing business.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
          clientLogo: "/04.svg",
          badges: ["Branding", "Packaging", "Development"],
          link: "#"
        },
        {
          id: 2,
          title: "Transforming Ideas into Reality",
          description: "The most powerful software & app landing software marketing business.",
          image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
          clientLogo: "/04.svg",
          badges: ["UI/UX design", "Research"],
          link: "#"
        },
        {
          id: 3,
          title: "Bio Cosmetics",
          description: "The most powerful software & app landing software marketing business.",
          image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop",
          clientLogo: "/04.svg",
          badges: ["Branding", "UI/UX design"],
          link: "#"
        }
      ];
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
                            SE0
                        </li>
                    </ol>
                </nav>

                <h1 className="text-[40px] md:text-5xl lg:text-[4rem] font-bold leading-tight sm:max-w-4xl">
                    Dominate Search 
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
                     Engines With Proven SEO Strategies
                </h1>

                <p className="text-lg max-w-3xl">
                    Our comprehensive SEO solutions are designed to put your website in front of the right audience at the right time. Let us take your online presence to the next level.
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

                <Image src="/hero-seo.svg" alt="seo" width={895} height={488} priority={true} className="object-cover mt-10" />

                <div className="flex flex-col justify-start items-start sm:flex-row sm:items-center sm:justify-between mt-32 w-full max-w-7xl">
                    <h2 className="text-[30.14px] md:text-[2.75rem] font-bold leading-tight mb-4 max-w-xl text-start">
                        Tailored SEO Solutions for Your Business
                    </h2>
                    <Link href="/about" className="mb-5 bg-[#202124] hover:bg-[#3c3e41] text-white px-[1rem] py-[0.6rem] rounded-[0.2rem] inline-flex font-semibold items-center transition-all duration-500 ease-in-out">
                        View All Services
                    </Link>
                </div>

                <SEOServicesCarousel />

                <section className="py-20">
                    <div className="max-w-7xl mx-auto sm:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center justify-center">
                            <div className="">                   
                                <Image
                                    src="/21.jpg"
                                    alt="about-img"
                                    width={505}
                                    height={573}
                                    loading="lazy"
                                    quality={75}
                                    className="rounded relative z-10 object-cover"
                                />
                            </div>

                            <div className="lg:pl-1 text-start mt-5 sm:mt-0">
                                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                                    Learn About Our Journey to SEO Mastery
                                </h2>
                                <p className="mb-0 dark:text-[#c4c5c7] text-base">
                                    With a team of dedicated professionals and years of industry experience, we pride ourselves on delivering innovative and effective SEO solutions tailored to your unique needs.
                                    <br />
                                    <br />
                                    Whether you&apos;re a small startup or a large enterprise, we have the expertise to meet your needs.
                                </p>
                                
                                <div className="bg-[#202124] text-white px-[1.5rem] py-[1rem] rounded-sm inline-block mt-6 font-bold">
                                    <span className="text-white">Work with us?</span>
                                    <Link href="/contact" className="text-[#0B9944] hover:text-[#0B9944]/80 ml-2 inline-flex items-center transition-all duration-500 ease-in-out">
                                        Contact us now <span className="text-sm ml-1"><FiChevronRight size={19}/></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
        <TestimonialsStatsSection />
        <section className="bg-[#f8f8f8] dark:bg-[#292a2d] py-16 lg:py-18">
            <div className="max-w-7xl mx-auto px-4 sm:px-0">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className="text-[2.75rem] font-bold mb-3">Case studies</h2>
                    <p className="text-[#606261] dark:text-[#c4c5c7]">
                        Discover a selection of our most recent client projects, showcasing our expertise, creativity, and commitment to delivering outstanding results.
                    </p>
                </div>

                <div className="mx-auto mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
                        {portfolioData.map((item) => (
                            <Link href={item.link} key={item.id} className="w-full max-w-md">
                                <div className="bg-white dark:bg-[#202124] rounded-sm shadow-2xs overflow-hidden group transition-shadow duration-300">
                                    <div className="relative overflow-hidden h-80">
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                            <div className="absolute inset-0 bg-black/50"></div>
                                            <img 
                                                src={item.clientLogo} 
                                                alt="client logo"
                                                className="h-10 object-contain relative z-10"
                                            />
                                        </div>
                                        {/* Portfolio Image */}
                                        <img 
                                            src={item.image} 
                                            alt={item.title}
                                            className="w-full h-full object-cover transform group-hover:scale-103 ease-in-out transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-6">
                                        <h6 className="text-xl font-semibold  mb-2">
                                            {item.title}
                                        </h6>
                                        <p className="mb-4">
                                            {item.description}
                                        </p>
                                        
                                        {/* Badge List */}
                                        <div className="flex flex-wrap gap-2 mb-5">
                                            {item.badges.map((badge, index) => (
                                                <span key={index} className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#292a2d] border rounded-[0.2rem]">
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>

                                        <span className="inline-flex items-center text-base font-medium transition-colors duration-500 ease-in-out group-hover:text-[#09b850]">
                                            View case study
                                            <svg 
                                                className="w-4 h-4 ml-2" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="w-full max-w-7xl mx-auto mt-18 flex items-center justify-center">
                    <Link href="/case-studies" className=" bg-[#202124] hover:bg-[#3c3e41] text-white px-[1rem] py-[0.6rem] rounded-[0.2rem] inline-flex font-semibold items-center transition-all duration-500 ease-in-out">
                        Explore All Case studies
                    </Link>
                </div>
            </div>
        </section>
        <section className="bg-[#09b850] mx-auto p-5 w-full inline-flex items-center justify-center text-white">
            <div className="flex items-center justify-center gap-3 text-start">
                <ul className="flex items-center">
                    <li className="w-10 h-10 rounded-full overflow-hidden">
                        <Image src="/06.jpg" className="w-full h-full object-cover" width={200} height={200} quality={100} loading="lazy" alt="avatar"/>
                    </li>
                    <li className="w-10 h-10 rounded-full overflow-hidden -ml-2">
                        <Image src="/05.jpg" className="w-full h-full object-cover" width={200} height={200} quality={100} loading="lazy" alt="avatar"/>
                    </li>
                    <li className="w-10 h-10 rounded-full overflow-hidden -ml-2">
                        <div className="rounded-full bg-[#202124] flex items-center justify-center text-white h-10 w-10 ">
                            <Phone size={18} />
                        </div>
                    </li>
                </ul>
                <div className="font-medium text-white inline-flex gap-2 items-center">
                    Maximize Productivity by Simplifying Solution Search 
                    <Link href="/contact" className="underline font-semibold">
                        Got a project in mind?
                    </Link>
                </div>
            </div>
        </section>

        <section className="w-full max-w-7xl mx-auto py-16 lg:py-24 dark:bg-[#161618]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                <div className="md:col-span-2 lg:col-span-1">
                    <h2 className="text-[2.75rem] font-bold mb-3">Our Approach to SEO Success</h2>
                </div>
            
                {/* Item */}
                <div className="md:col-span-1">
                    <div className="border rounded-sm p-4 h-full bg-white dark:bg-[#191b1d]">
                    <h6 className="text-[#09b850] mb-4 text-[1.2rem] font-semibold">01.</h6>
                    <h5 className="text-[1.5rem] font-semibold mb-3">Business understanding</h5>
                    <p className="mb-0 ">We begin by gaining a deep understanding of your business, industry, and target audience.</p>
                    </div>
                </div>
            
                {/* Item */}
                <div className="md:col-span-1">
                    <div className="border rounded-sm p-4 h-full bg-white dark:bg-[#191b1d]">
                    <h6 className="text-[#09b850] mb-4 text-[1.2rem] font-semibold">02.</h6>
                    <h5 className="text-[1.5rem] font-semibold mb-3">Keyword research</h5>
                    <p className="mb-0">Our approach starts with comprehensive keyword research potential customers are searching for.</p>
                    </div>
                </div>
            
                {/* Item */}
                <div className="md:col-span-1">
                    <div className="border rounded-sm p-4 h-full bg-white dark:bg-[#191b1d]">
                    <h6 className="text-[#09b850] mb-4 text-[1.2rem]font-semibold">03.</h6>
                    <h5 className="text-[1.5rem] font-semibold mb-3">Technical optimization</h5>
                    <p className="mb-0">We conduct a thorough technical audit of your website to identify any issues that may be hindering its.</p>
                    </div>
                </div>
            
                {/* Item */}
                <div className="md:col-span-1">
                    <div className="border rounded-sm p-4 h-full bg-white dark:bg-[#191b1d]">
                    <h6 className="text-[#09b850] mb-4 text-[1.2rem] font-semibold">04.</h6>
                    <h5 className="text-[1.5rem] font-semibold mb-3">Content strategy</h5>
                    <p className="mb-0">Content is king in the world of SEO. We develop a strategic content plan that aligns with your.</p>
                    </div>
                </div>
            
                {/* Item */}
                <div className="md:col-span-1">
                    <div className="border rounded-sm p-4 h-full bg-white dark:bg-[#191b1d]">
                    <h6 className="text-[#09b850] mb-4 text-[1.2rem] font-semibold">05.</h6>
                    <h5 className="text-[1.5rem] font-semibold mb-3">Transparent Reporting</h5>
                    <p className="mb-0">We provide regular reports and updates on the progress of your SEO campaigns giving you full.</p>
                    </div>
                </div>
            </div>
        </section>

        <section>
        <section className="py-20">
                        <div className="container mx-auto px-4">
                            <div className="max-w-2xl mx-auto text-center">
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

                                <h2 className="text-3xl md:text-4xl font-bold mb-3">Let&apos;s stay in touch</h2>
                                <p className="mb-5">
                                    Receive news, stay updated, and special offers
                                </p>

                                <div className="w-full">
                                    <EmailOnlyContactForm bg="bg-[#f8f8f8] dark:bg-[#292a2d] shadow-sm z-50" buttonBg="bg-black hover:bg-black/80 dark:bg-white text-white dark:text-black" />
                                    <figure className="hidden sm:block -mt-[3.5rem] ml-[42rem] rotate-12 -z-50">
                                    <svg className="opacity-30" width="148" height="140" viewBox="0 0 148 140" xmlns="http://www.w3.org/2000/svg">
                                        <path className="fill-[#0B9944]" d="m9.95 131.41c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                                        <circle className="fill-[#0B9944]" cx="25.86" cy="131.41" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="44.71" cy="131.41" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="63.57" cy="131.41" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="82.43" cy="131.41" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="101.29" cy="131.41" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="120.14" cy="131.41" r="2.95"></circle>
                                        <path className="fill-[#0B9944]" d="m141.95 131.41c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m9.95 113.61c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                                        <circle className="fill-[#0B9944]" cx="25.86" cy="113.61" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="44.71" cy="113.61" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="63.57" cy="113.61" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="82.43" cy="113.61" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="101.29" cy="113.61" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="120.14" cy="113.61" r="2.95"></circle>
                                        <path className="fill-[#0B9944]" d="m141.95 113.61c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m9.95 95.81c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                                        <circle className="fill-[#0B9944]" cx="25.86" cy="95.81" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="44.71" cy="95.81" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="63.57" cy="95.81" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="82.43" cy="95.81" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="101.29" cy="95.81" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="120.14" cy="95.81" r="2.95"></circle>
                                        <path className="fill-[#0B9944]" d="m141.95 95.81c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m9.95 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m28.8 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m47.66 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m66.52 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m85.37 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0.01 2.95 1.33 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m104.23 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m123.09 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m141.95 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m9.95 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m28.8 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m47.66 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m66.52 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m85.37 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0 2.95 1.32 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m104.23 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m123.09 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m141.95 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m9.95 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m28.8 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m47.66 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m66.52 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m85.37 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0 2.95 1.32 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m104.23 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m123.09 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m141.95 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m9.95 24.62c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                                        <circle className="fill-[#0B9944]" cx="25.86" cy="24.62" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="44.71" cy="24.62" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="63.57" cy="24.62" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="82.43" cy="24.62" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="101.29" cy="24.62" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="120.14" cy="24.62" r="2.95"></circle>
                                        <path className="fill-[#0B9944]" d="m141.95 24.62c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                                        <path className="fill-[#0B9944]" d="m9.95 6.82c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95c0-1.62 1.32-2.94 2.95-2.94s2.95 1.32 2.95 2.94z"></path>
                                        <circle className="fill-[#0B9944]" cx="25.86" cy="6.82" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="44.71" cy="6.82" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="63.57" cy="6.82" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="82.43" cy="6.82" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="101.29" cy="6.82" r="2.95"></circle>
                                        <circle className="fill-[#0B9944]" cx="120.14" cy="6.82" r="2.95"></circle>
                                        <path className="fill-[#0B9944]" d="m141.95 6.82c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                                    </svg>
                                    </figure>
                                    <p className="-mt-[4.6rem] text-sm">
                                        Subscribe now and receive weekly newsletter with educational materials, new courses, interesting posts, popular books, and much more!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
        </section>
    </div>
  )
}

export default SeoPage
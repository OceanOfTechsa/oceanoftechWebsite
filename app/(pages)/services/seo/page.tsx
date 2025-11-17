import { CalendarPlus, MoveRight } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";
import Image from "next/image";
import { GoDotFill, GoStarFill } from "react-icons/go";
import { Metadata } from "next";
import SEOServicesCarousel from "@/components/SEOServices";
import { FiChevronRight } from "react-icons/fi";
import TestimonialsStatsSection from "@/components/SeoTest";

export const metadata: Metadata = {
    title: "Search Engine Optimisation"
};
const SeoPage = (): JSX.Element => {
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

        <div className="">
            <div className="max-w-7xl mx-auto px-4 sm:px-0">
                Still building
            </div>
      </div>
    </div>
  )
}

export default SeoPage
import AnimatedIcon from "@/components/animations/animatedIcon";
import CountUp from "@/components/count-up";
import EmailOnlyContactForm from "@/components/forms/emailOnlyContactForm";
import Image from "next/image";
import { JSX } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FlipWords } from "@/components/ui/flip-words";
import GoogleReviewsBanner from "@/components/GoogleReviewsBanner";
import AppSettings from "@/Oceanoftech.Business/ConfigurationBusiness/AppSettings";

const HeroSection = (): JSX.Element => {
  return (
    <section className="relative xl:pt-20 pb-0 mt-10 sm:mt-0 ">
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

      <div className="container mx-auto px-4 sm:px-0">
        <div className="grid xl:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="xl:col-span-7 space-y-8 w-full">
            <span className="inline-block bg-[#f8f8f8] dark:bg-[#292a2d] text-[#606261] dark:text-[#c4c5c7] text-sm rounded-sm font-semibold px-3 py-1 z-50">
              <AnimatedIcon icon="🤝" /> Your partner in digital growth
            </span>
            <h1 className="text-4xl md:text-[3.6rem] font-bold leading-tight hidden sm:block w-full">
              Software solutions
              <br />
              for your
              <FlipWords
                className="text-[#0B9944] dark:text-[#09b850]"
                words={["Brand", "Agency", "Startup", "Corp", "SME"]}
              />
              {/*<TypedText strings={["Business", "Agency", "Startup", "Enterprise", "Brand"]} typeSpeed={90} className="text-center text-[#0B9944] dark:text-[#09b850] font-black"/>*/}
            </h1>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight block sm:hidden">
              Software solution
              <br />
              for your{" "}
              <FlipWords
                className="text-[#0B9944] dark:text-[#09b850]"
                words={["Brand", "Agency", "Startup", "Corp", "SME"]}
              />
              {/*<TypedText strings={["Business", "Agency", "Startup", "Enterprise", "Brand"]} typeSpeed={90} className="text-center text-[#0B9944] dark:text-[#09b850]"/>*/}
            </h1>

            <p className="max-w-2xl text-[#606261] dark:text-[#c4c5c7]">
              From concept to execution, we build digital solutions that scale
              with your vision from stunning web design that captures attention
              to powerful enterprise systems that drive performance and growth.
            </p>

            {/* Email Signup Form */}
            <div className="flex flex-col items-start gap-1 md:w-lg">
              <EmailOnlyContactForm />
              <span className="text-xs text-[#606261] dark:text-[#c4c5c7]">
                💌 Leave us your Email and we will get back to you
              </span>
            </div>

            {/* Features */}
            <div className="flex gap-6 pt-6">
              <GoogleReviewsBanner />
              {/*<div className="md:border-r border-[#0B9944]/70" />*/}
              {/*<Link className="flex items-center gap-3 group" href="https://g.page/r/CU3CZKX3tetcEBM/review" target="_blank">*/}
              {/*    <div className="text-primary">*/}
              {/*       <img src="/trust.webp"/>*/}
              {/*    </div>*/}
              {/*    <div className="mt-2">*/}
              {/*        <h6 className="font-semibold group-hover:text-[#0B9944] dark:group-hover:text-[#09b850] transition-colors ease-in-out duration-500">10+ Google reviews</h6>*/}
              {/*        <div className="flex items-center gap-2 -mt-2">*/}
              {/*            <span className="text-xs mb-3">*/}
              {/*                5/5*/}
              {/*            </span>*/}
              {/*            <ul className="flex items-center space-x-1 mb-3">*/}
              {/*                <li><GoStarFill className="fill-yellow-500" size={13}/></li>*/}
              {/*                <li><GoStarFill className="fill-yellow-500" size={13}/></li>*/}
              {/*                <li><GoStarFill className="fill-yellow-500" size={13}/></li>*/}
              {/*                <li><GoStarFill className="fill-yellow-500" size={13}/></li>*/}
              {/*                <li><GoStarFill className="fill-yellow-500" size={13}/></li>*/}
              {/*            </ul>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</Link>*/}
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className="xl:col-span-5 relative">
            <Image
              src="/Hero.jpg"
              alt="Hero"
              width={506}
              height={609}
              quality={75}
              className="rounded-md shadow-lg relative z-10"
              priority={true}
            />
            <div className="inline-block bg-[#191b1d] rounded-md absolute bottom-0 start-0 mb-4 p-3 z-10 ml-3 md:-ml-20 ">
              <div className="flex items-center justify-between">
                <h6 className="text-[#c4c5c7] mb-0 mr-10 font-bold text-2xl">
                  <CountUp end={10} duration={1} />+
                </h6>
                <ul className="flex items-center -space-x-4">
                  {/* Next.js */}
                  <li className="relative w-8 h-8 rounded-full ring-2 ring-[#191b1d] bg-white shadow-md hover:z-10 hover:scale-110 transition-all duration-500 ease-n-out">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Image
                          src="/tech/nextjs.jpg"
                          alt="Next.js"
                          width={44}
                          height={44}
                          className="w-full h-full rounded-full object-contain"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="pb-0 mb-0 text-white dark:text-black">
                          Next.JS
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </li>

                  {/* TypeScript */}
                  <li className="relative w-8 h-8 rounded-full ring-2 ring-[#191b1d] bg-white shadow-md hover:z-10 hover:scale-110 transition-all duration-500 ease-n-out">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Image
                          src="/tech/typescript.svg"
                          alt="TypeScript"
                          width={44}
                          height={44}
                          className="w-full h-full rounded-full object-contain"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="pb-0 mb-0 text-white dark:text-black">
                          TypeScript
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </li>

                  {/* Tailwind CSS */}
                  <li className="relative w-8 h-8 rounded-full ring-2 ring-[#191b1d] bg-white shadow-md hover:z-10 hover:scale-110 transition-all duration-500 ease-n-out">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Image
                          src="/tech/tailwindcss.svg"
                          alt="Tailwind CSS"
                          width={44}
                          height={44}
                          className="w-full h-full rounded-full object-contain"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="pb-0 mb-0 text-white dark:text-black">
                          Tailwind CSS
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </li>

                  {/* PostgreSQL */}
                  <li className="relative w-8 h-8 rounded-full ring-2 ring-[#191b1d] bg-white shadow-md hover:z-10 hover:scale-110 transition-all duration-500 ease-n-out">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Image
                          src="/tech/postgresql.svg"
                          alt="PostgreSQL"
                          width={44}
                          height={44}
                          className="w-full h-full rounded-full object-contain"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="pb-0 mb-0 text-white dark:text-black">
                          PostgreSQL
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </li>

                  {/* +X badge */}
                  <li className="relative w-8 h-8 rounded-full ring-2 ring-[#191b1d] bg-gradient-to-br from-cyan-500 to-purple-600 shadow-md flex items-center justify-center">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="text-white text-sm font-semibold drop-shadow-md">
                          +10
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="pb-0 mb-0 text-white dark:text-black">
                          More
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </li>
                </ul>
              </div>
              <p className="text-[#c4c5c7] mt-2 mb-0">
                Modern Technologies We Use
              </p>
            </div>
            <div className="absolute top-0 right-0 -translate-x-2/2 -translate-y-2/2 mt-2 -mr-10 z-10">
              <div className="w-full animate-wiggle">
                <Image
                  src="/arrow-img.png"
                  width={130}
                  height={100}
                  decoding="async"
                  data-nimg="1"
                  loading="eager"
                  title="pointer errow"
                  alt="pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;

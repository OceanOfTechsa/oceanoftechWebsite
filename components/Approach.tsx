"use client";

import AnimatedIcon from "@/components/animations/animatedIcon";
import Image from "next/image";
import Link from "next/link";
import { FaRegEnvelope, FaRegEnvelopeOpen } from "react-icons/fa6";
import { motion, useAnimation, type LegacyAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { JSX } from "react";
import {Rocket, Search, Shell} from "lucide-react";
import {TfiHeadphoneAlt} from "react-icons/tfi";

const steps = [
  {
    id: 1,
    title: "Discovery and Consultation:",
    desc: "We begin by getting to know your unique requirements, goals, and challenges.",
  },
  {
    id: 2,
    title: "Planning and Strategy:",
    desc: "We define project milestones and deliverables to keep the process on track.",
  },
  {
    id: 3,
    title: "Deployment and Launch:",
    desc: "We ensure a smooth transition to the live, providing support every step of the way.",
  },
  {
    id: 4,
    title: "Support and Maintenance:",
    desc: "We offer ongoing support and maintenance services to keep your software running.",
  },
];

const Step = ({ id, title, desc }: { id: number; title: string; desc: string }) => {
  return (
    <div className="flex gap-x-5 ms-1 relative">
      <div className="relative flex flex-col items-center z-10">
        <span className="flex shrink-0 justify-center items-center size-8 border border-gray-500 border-opacity-30 text-[#0B9944] dark:text-[#09b850] font-semibold text-xs uppercase rounded-full bg-white dark:bg-[#202124]">
         { id === 1 && <Search size={18}/>}
         { id === 2 && <Shell  size={18}/>}
         { id === 3 &&<Rocket  size={18}/>}
         { id === 4 &&<TfiHeadphoneAlt   size={18}/>}
        </span>
      </div>

      <div className="grow pt-0.5 pb-8 sm:pb-12">
        <p className="text-sm lg:text-base dark:text-[#c4c5c7] max-w-2xl flex flex-col gap-1">
          <span className="text-black dark:text-white font-semibold">{title}</span>
          <span>{desc}</span>
        </p>
      </div>
    </div>
  );
};

const Approach = (): JSX.Element => {
  const controls: LegacyAnimationControls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  if (inView) {
    controls.start({
      height: "100%",
      transition: { duration: 2, ease: "easeInOut" },
    });
  }

  return (
    <section className="mt-10 relative py-24">
      <div className="max-w-5xl px-4 xl:px-0 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
          <div className="aspect-w-16 aspect-h-9 lg:aspect-none hidden lg:inline">
            <Image
              src="/approach.avif"
              width={3456}
              height={5184}
              className="rounded-lg md:max-w-lg hover:translate-x-2 transition-all ease-in-out duration-300"
              alt="our approach"
              title="our approach image"
            />
          </div>

          <div className="max-w-2xl lg:full relative">
            <span className="mb-4 inline-block bg-gray-100 dark:bg-[#292a2d] text-sm rounded-md font-semibold px-3 py-2 z-50">
              <AnimatedIcon icon="🚶" /> Steps that bring your idea to life
            </span>

            <div className="mb-4">
              <h3 className="text-md font-semibold text-sm uppercase">Steps</h3>
            </div>

            <div className="relative">
              <motion.div
                ref={ref}
                initial={{ height: 0 }}
                animate={controls}
                className="absolute left-4 top-0 w-px bg-[#0B9944] opacity-30"
                style={{ height: "100%" }}
              />

              {steps.map((step: { id: number; title: string; desc: string }) : JSX.Element => (
                <Step key={step.id} {...step} />
              ))}

              <div className="flex gap-2 ms-1 relative z-10">
                <div className="flex flex-col items-center mr-5">
                    <div className="flex flex-wrap gap-2">
                        <Link
                            className="bg-[#202124] hover:bg-[#3c3e41] text-white px-[1rem] py-[0.5rem] rounded-sm transition-all duration-500 ease-in-out flex items-center gap-2 group"
                            href="tel:+27726272521"
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
                            Give us a call
                        </Link>

                        <Link
                            className="bg-[#202124] hover:bg-[#3c3e41] text-white px-[1rem] py-[0.5rem] rounded-sm transition-all duration-500 ease-in-out flex items-center gap-2 group"
                            href="mailto:info@oceanoftechsa.com?subject=Services Request?cc=sithuliso@oceanoftechsa.com"
                        >
                            <FaRegEnvelope className="group-hover:hidden group-hover:transition-all duration-900 ease-in" />
                            <FaRegEnvelopeOpen className="hidden group-hover:inline -mt-1 group-hover:transition-all duration-900 ease-in" />
                            Send us an email
                        </Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </section>
  );
};
export default Approach;
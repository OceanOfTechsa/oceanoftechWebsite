import React, { JSX } from "react";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import NotifyMeForm from "@/components/forms/NotifyForm";
import Image from "next/image";

interface ComingSoonProps {
  module: string;
}
const ComingSoon = ({ module }: ComingSoonProps): JSX.Element => {
  return (
    <div className="h-screen max-w-7xl flex flex-col  justify-center items-center">
      <div className="w-full flex flex-col items-center justify-center">
        <nav className="mb-2" aria-label="breadcrumb">
          <ol className="flex items-center gap-2 pt-0">
            <li className="hover:text-[#0b9944] dark:hover:text-[#09b850] transition-colors duration-500 ease-in-out">
              <Link href="/">Home</Link>
            </li>
            <GoDotFill size={10} className="mt-1" />
            <li
              className="text-[#0B9944] dark:text-[#09b850]"
              aria-current="page"
            >
              Coming Soon
            </li>
          </ol>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight  text-center max-w-3xl mt-3 mb-2 mt-0">
          Sorry, we're not ready yet
        </h1>
        <p className="text-lg max-w-2xl text-center">
          Something is coming very soon
        </p>
      </div>
      <NotifyMeForm module={module} />
      <div>
        <Image
          src="/mockImg.png"
          alt="mock design"
          width={445}
          height={200}
          quality={80}
          priority
          className="object-cover mt-8"
        />
      </div>
    </div>
  );
};
export default ComingSoon;

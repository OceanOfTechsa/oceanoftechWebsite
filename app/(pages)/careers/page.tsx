import { Metadata } from "next";
import { JSX } from "react";
import { BsFillCursorFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import  AnimatedImageSection from "@/components/animations/AnimatedImages";
import { PiUsersFourLight } from "react-icons/pi";
import { BsBriefcase } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaHeart, FaFire, FaBullseye, FaTrophy } from "react-icons/fa";
import OpenPositions from "@/components/ActiveJobs";
import NewsLetterSubForm from "@/components/forms/newsLetter";
import { type Career, careers } from "@/components/conts";
import OpenSearchFormBtn from "@/components/OpenSearchFormBtn";

export const metadata: Metadata = {
  title: "Careers",
};

const CareersPage = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <section className="max-w-5xl mx-auto relative xl:py-20 pb-0 mt-10 sm:mt-0 px-6 flex flex-col items-center text-center">
        {/* Breadcrumb */}
        <nav className="mt-6" aria-label="breadcrumb">
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
            <li  className="text-[#0B9944] dark:text-green-500 transition-colors duration-500">
              Careers
            </li>
          </ol>
        </nav>

        {/* Title */}
        <div className="relative mb-8">
          <figure className="hidden md:block absolute left-0 bottom-0 rotate-12 -ml-72 mt-60 mb-8"> <svg width="101.6px" height="94.6px" viewBox="0 0 101.6 94.6" > <path className="fill-[#0B9944] dark:fill-green-500" d="M26.6,26.1c-4.7,0.8-9.3,1.8-13.9,2.9c-4.8,1.2-8.3,1.4-8.6,6.9c-0.1,1.8-0.2,4.5,1.3,5.7 c1.4,1.1,4.3,1.4,5.9,1.8c4.6,1.2,9.3,2.2,14,3.2c1.3,0.3,1.9-1.7,0.6-2c-3.3-0.7-6.6-1.5-10-2.2c-2.3-0.5-4.6-1.1-6.8-1.7 c-2.7-0.8-3-1.1-2.9-4.3c0.1-3.2,0.9-3.7,3.8-4.6c2.3-0.7,4.7-1.2,7-1.7c3.4-0.7,6.8-1.4,10.2-2C28.5,27.9,27.9,25.9,26.6,26.1 L26.6,26.1z"></path> <path className="fill-[#0B9944] dark:fill-green-500" d="M94,27.3c0.5-0.1,1.1-0.2,1.5-0.1c1.8,0.4,1.4,2.4,1.4,3.9c0,1.5,0.1,3.2-0.5,4.6c-0.6,1.5-2.1,2-3.7,2.1 c-1.3,0-1.3,2.1,0,2.1c1.7-0.1,3.9-0.6,4.9-2c1.5-2,1.3-5.2,1.3-7.5c0-2,0-4-2.1-4.9c-1.1-0.5-2.4-0.4-3.5-0.2 C92.1,25.6,92.7,27.6,94,27.3L94,27.3z"></path> <path className="fill-black dark:fill-white" d="M30.2,8c6.9,2.7,13.9,5.1,21,7.3c11.1,3.4,21.7,5.1,33.2,6.1c4.2,0.3,8.3,0.4,8.2,5.4 c-0.1,4.4,0.2,10.9-1.7,14.9c-2.2,4.6-9.7,3.4-14.1,3.9c-5,0.5-10,1.4-14.9,2.3C50.2,50,37.3,52.4,26.8,58.3 c-1.2,0.7-0.1,2.5,1,1.8c10.8-6.1,24.3-8.4,36.3-10.6c5.6-1,11.3-2,17.1-2.3c4.1-0.2,8.8,0,11.2-4c2.4-3.9,1.7-9.9,2.1-14.3 c0.2-2.7,0.6-5.8-1.7-7.7c-3.1-2.5-9.1-2.1-12.7-2.3c-6.6-0.4-13-1.5-19.4-3.2c-10.2-2.6-20.2-6-30-9.8C29.5,5.5,28.9,7.5,30.2,8 L30.2,8z"></path> <path className="fill-black dark:fill-white" d="M72.4,46c-3.9,0.6-8.2,3-8.9,7.2c-0.6,3.7,1.9,6.5,5.5,6.6c-0.2-0.6-0.3-1.3-0.5-1.9c-3.8,2-8,5.5-8.7,9.9 c-0.5,3.7,1.9,6.4,5.6,6.5c-0.2-0.6-0.5-1.2-0.7-1.8c-4.1,3.7-8.3,10.4-6.2,16.1c1.5,4.1,5.9,4.2,9.1,2c7.4-5,9.4-16.1,11.7-24 c1.9-6.7,3.7-13.4,5.2-20.1c0.3-1.3-1.7-1.9-2-0.6c-0.7,3.4-1.6,6.8-2.5,10.1c-2.2,8.3-4,17.3-7.7,25c-1.3,2.7-7,12.4-11.2,8.2 c-4.1-4.1,1.8-12.2,5-15.2c0.7-0.6,0.1-1.8-0.7-1.8c-4.8-0.1-3.5-5.9-1.3-8.4c1.5-1.7,3.4-3.1,5.4-4.1c1-0.5,0.5-1.9-0.5-1.9 c-4.2-0.1-4.1-5.3-1.4-7.6c1.5-1.2,3.4-1.9,5.2-2.1C74.3,47.8,73.7,45.8,72.4,46L72.4,46z"></path> <path className="fill-black dark:fill-white" d="M13.1,29.8c0.3-6.5,1.7-15.4,5.2-21c2.8-4.3,5.9-1.6,6.8,2.3c1.4,5.9,0.8,12.4,0.5,18.4 c-0.3,7.4-0.5,14.9-2.7,22.1c-0.8,2.8-2.7,8.8-6.3,9.5C12.1,62,13,45.8,13.1,42.5c0.1-1.3-2-1.3-2.1,0c-0.1,3.2-0.1,6.3,0.1,9.5 c0.2,3,0.2,8,2.5,10.4c4.7,4.9,10-5.6,11.1-8.7c2.3-6.7,2.8-13.9,3.1-20.9c0.3-6.5,0.8-13.2-0.1-19.7c-0.4-2.8-1-6.3-3.6-7.9 c-2.4-1.4-4.9-0.7-6.5,1.4c-2.8,3.4-3.8,8.5-4.7,12.7c-0.7,3.5-1.5,7.1-1.7,10.6C11,31.1,13.1,31.1,13.1,29.8L13.1,29.8z"></path> <path className="fill-black dark:fill-white" d="M15.7,63.4c4.5,0,10.9,0.4,12.9-4.5c3.7-9.1,3.9-20.4,4.4-30c0.1-1.3-2-1.3-2.1,0c-0.5,9-1.1,18.3-3.5,27 c-0.8,2.6-1.1,4.1-4,4.8c-2.5,0.6-5.1,0.6-7.7,0.6C14.4,61.3,14.4,63.4,15.7,63.4L15.7,63.4z"></path> <path className="fill-black dark:fill-white" d="M22,6.4c1.8-0.2,4.9-0.8,6.5,0c1.4,0.7,1.5,2.8,1.7,4.2c0.5,2.7,0.6,5.5,0.7,8.2c0,1.3,2.1,1.3,2.1,0 c0-3.2-0.3-6.4-0.9-9.6C31.9,8,31.6,6,30.4,5c-2-1.6-6-1-8.3-0.7C20.7,4.5,20.7,6.6,22,6.4L22,6.4z"></path> <path className="fill-[#0B9944] dark:fill-green-500" d="M82.9,20.8c0,8.6-1.3,17-3.9,25.2c-0.4,1.3,1.6,1.8,2,0.6c2.7-8.4,4-17,4-25.7C85,19.4,82.9,19.4,82.9,20.8 L82.9,20.8z"></path> <path className="fill-black dark:fill-white" d="M77.6,20.6c0.6,3,0.6,6,0.1,9c-0.2,1.3,1.8,1.9,2,0.6c0.6-3.4,0.6-6.7-0.1-10.1C79.4,18.7,77.4,19.3,77.6,20.6 L77.6,20.6z"></path> <path className="fill-black dark:fill-white" d="M77.2,34.5c-0.7,3.9-1.8,7.6-3.3,11.2c-0.5,1.2,1.3,2.3,1.8,1c1.6-3.8,2.8-7.7,3.6-11.7 C79.4,33.8,77.4,33.2,77.2,34.5L77.2,34.5z"></path> <path className="fill-black dark:fill-white" d="M41.1,47.2c4.3-1.5,8.7-2.7,13.1-3.7c1.3-0.3,0.8-2.3-0.6-2c-4.4,1-8.8,2.2-13.1,3.7 C39.3,45.6,39.9,47.6,41.1,47.2L41.1,47.2z"></path> <path className="fill-black dark:fill-white" d="M58.5,42.9c0.1,0.1,0.1,0.1,0.2,0.2c0.9,0.9,2.4-0.5,1.5-1.5c-0.1-0.1-0.1-0.1-0.2-0.2 C59,40.5,57.6,41.9,58.5,42.9L58.5,42.9z"></path> </svg> </figure>
          <h1 className="text-[40px] md:text-5xl lg:text-[4rem] font-bold leading-tight">
            Discover exciting career{" "}
            <br className="hidden md:block" />
            <span className="text-[hsl(144,87%,32%)] dark:text-green-500">opportunities</span> at{" "}
            <span className="relative inline-block">
              Ocean
              {/* Decorative box */}
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 hidden lg:block dark:block">
                <svg
                  width="219"
                  height="87"
                  viewBox="0 0 219 87"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M214 6.5H5V81H214V6.5Z"
                    stroke="#09B850"
                    strokeWidth="2"
                  />
                  <path
                    className="fill-black dark:fill-white"
                    d="M209 0H219V10H209V0Z"
                  />
                  <path
                    className="fill-black dark:fill-white"
                    d="M209 77H219V87H209V77Z"
                  />
                  <path className="fill-black dark:fill-white"
                    d="M0 0H10V10H0V0Z"
                  />
                  <path
                    className="fill-black dark:fill-white"
                    d="M0 75H10V85H0V75Z"
                  />
                </svg>
              </span>
            </span>
          </h1>
          {/* Badge + cursor */}
          <div className="absolute right-0 -mr-40 -mt-6 top-full translate-x-6 translate-y-4 hidden lg:block">
            <div className="relative">
              <small className="bg-[#292a2d] dark:bg-white dark:text-black text-white rounded-full px-3 py-1 text-xs mt-6 font-semibold">
                Software Developer
              </small>
              <span className="text-lg absolute left-0 top-0 transform -translate-y-4 -translate-x-4 -rotate-90">
                <BsFillCursorFill className="text-[#0B9944] dark:text-green-500" size={25} />
              </span>
            </div>
          </div>
        </div>

        {/* Subtitle + Search */}
        <div className="max-w-2xl">
          <p className="text-gray-700 dark:text-gray-300">
            Join our team of digital pioneers, where creativity meets innovation.
            Explore exciting career opportunities at Mizzle and be part of shaping
            the digital future.
          </p>

          <OpenSearchFormBtn />

          {/* Suggestions */}
          <ul className="flex flex-wrap justify-center gap-3 mt-5 text-sm">
            <li className=" text-[#606261] dark:text-[#c4c5c7]">Suggestions:</li>
            {
              careers.slice(0, 5).map((sug: Career, i: number): JSX.Element => (
                 <li key={i}>
                    <Link href={`/careers/${sug.slug}`} className="hover:text-[#0B9944] hover:dark:text-green-500">
                      {sug.title},
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </section>

      <AnimatedImageSection />

      <section className="w-full max-w-7xl mx-auto px-6 md:px-0 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          <div className="flex items-center w-full h-full">
            <div className="w-[3.5rem] h-[3.5rem] flex items-center justify-center bg-[#292a2d] text-white rounded">
              <BsBriefcase className="text-lg" size={25}/>
            </div>
            <div className="ml-3 mt-4">
              <div className="flex items-baseline">
                <h5 className="text-[1.5rem] font-bold mb-0">600</h5>
                <span className="text-[1.5rem] font-bold text-[#0B9944] dark:text-green-500">+</span>
              </div>
              <p className="text-[#606261] dark:text-[#c4c5c7] mt-0">Total Jobs</p>
            </div>
          </div>

          <div className="flex items-center w-full h-full">
            <div className="w-[3.5rem] h-[3.5rem] flex items-center justify-center bg-[#292a2d] text-white rounded">
              <HiOutlineBuildingOffice2 className="text-lg" size={25}/>
            </div>
            <div className="ml-3 mt-4">
              <h5 className="text-[1.5rem] font-bold mb-0">5468</h5>
              <p className="text-[#606261] dark:text-[#c4c5c7] mt-0">Total Companies</p>
            </div>
          </div>

          <div className="flex items-center w-full h-full">
            <div className="w-[3.5rem] h-[3.5rem] flex items-center justify-center bg-[#292a2d] text-white rounded">
              <PiUsersFourLight className="text-lg" size={27}/>
            </div>
            <div className="ml-3 mt-4">
              <div className="flex items-baseline">
                <h5 className="text-[1.5rem] font-bold mb-0">12</h5>
                <span className="text-[1.5rem] font-bold text-[#0B9944] dark:text-green-500">K+</span>
              </div>
              <p className="text-[#606261] dark:text-[#c4c5c7] mt-0">Total Candidates</p>
            </div>
          </div>

          <div className="flex items-center w-full h-full">
            <div className="w-[3.5rem] h-[3.5rem] flex items-center justify-center bg-[#292a2d] text-white rounded">
              <BsBriefcase className="text-lg" size={25}/>
            </div>
            <div className="ml-3 mt-4">
              <div className="flex items-baseline">
                <h5 className="text-[1.5rem] font-bold mb-0">10</h5>
                <span className="text-[1.5rem] font-bold text-[#0B9944] dark:text-green-500">+</span>
              </div>
              <p className="text-[#606261] dark:text-[#c4c5c7] mt-0">New Jobs</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 mb-20 w-full max-w-7xl mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
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
              src="/17.jpg"
              alt="Company team"
              width={512}
              height={682}
              className="rounded-md relative z-10 object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:col-span-7 lg:pl-10 mt-5 lg:mt-0">
            <h2 className="text-[2.75rem] font-bold mb-4">
              Company value to reach quality in work-life
            </h2>
            <p className="text-[#606261] dark:text-[#c4c5c7] mb-8">
              Join our team to experience a workplace that values and supports your quality of life,
              empowering you to reach new heights in your career.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <span className="text-[#0B9944] dark:text-green-500 text-3xl ">
                  <FaHeart />
                </span>
                  <h6 className="font-bold mt-2 mb-1 text-[1.2rem]">Honesty</h6>
                <p className="text-[#606261] dark:text-[#c4c5c7]">
                  The implementation of multilingual support involves.
                </p>
              </div>

              <div>
                <span className="text-[#0B9944] dark:text-green-500 text-3xl">
                  <FaFire />
                </span>
                  <h6 className="font-bold mt-2 mb-1 text-[1.2rem]">Passion</h6>
                <p className="text-[#606261] dark:text-[#c4c5c7]">
                  It focuses on creating an intuitive and efficient design.
                </p>
              </div>

              <div>
                <span className="text-[#0B9944] dark:text-green-500 text-3xl">
                  <FaBullseye />
                </span>
                  <h6 className="font-bold mt-2 mb-1 text-[1.2rem]">Impact</h6>
                <p className="text-[#606261] dark:text-[#c4c5c7]">
                  It ensures that users can access critical assistance whenever they need it.
                </p>
              </div>

              <div>
                <span className="text-[#0B9944] dark:text-green-500 text-3xl">
                  <FaTrophy />
                </span>
                  <h6 className="font-bold mt-2 mb-1 text-[1.2rem]">Recognition</h6>
                <p className="text-[#606261] dark:text-[#c4c5c7]">
                  These advanced functionalities are designed to provide users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OpenPositions />

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
};
export default CareersPage;
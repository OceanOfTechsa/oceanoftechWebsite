"use client";

import { useState } from "react";
import Link from "next/link";
import { FaMapMarkerAlt,  FaBriefcase, FaArrowRight } from "react-icons/fa";
import { BsAwardFill } from "react-icons/bs";
import { JSX } from "react";
import { FiUsers } from "react-icons/fi";
import { type Career, careers } from "./conts";
import ContentNotFound from "@/components/contentNotFound";

const TABS: string[] = ["all", "development", "hr", "marketing", "design"];

const OpenPositions = () : JSX.Element => {
  const [activeTab, setActiveTab] = useState("all");

  // Filter based on tab
  const filteredCareers: Career[] = activeTab === "all"
    ? careers
    : careers.filter((job: Career): boolean => job.category.toLowerCase() === activeTab);

  return (
    <section className="pt-0 w-full max-w-7xl mx-auto px-6 md:px-0 py-20 my-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-[2.75rem] font-bold mb-3">Open Positions</h2>
        <p className="text-[#606261] dark:text-[#c4c5c7]">
          Our friendly team members are always willing to help you understand your present
          technology requirements and provide suggestions on your future needs.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-10">
        <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
          <span className="text-[#606261] dark:text-[#c4c5c7]">Browse by:</span>
          {TABS.map((tab: string): JSX.Element => (
            <button
              key={tab}
              className={`px-[1rem] py-[0.5rem] rounded-sm text-sm font-medium transition cursor-pointer hover:bg-[#f8f8f8] dark:hover:bg-[#292a2d] text-[#606261] dark:text-[#c4c5c7] ${
                activeTab === tab &&
                "bg-[#f8f8f8] dark:bg-[#292a2d] text-black dark:text-white font-semibold"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "all" ? "All Jobs" : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredCareers.length > 0 ? (
            filteredCareers.map((job: Career): JSX.Element => (
              <Link href={`/careers/${job.slug}`} key={job.slug} className="bg-[#f8f8f8] dark:bg-[#292a2d] rounded-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 group">
                <div>
                  <span className="inline-block bg-[#202124] text-white text-xs font-medium px-3 py-1 rounded mb-3 capitalize">
                    {job.category}
                  </span>
                  <h5 className="text-[1.5rem] font-bold group-hover:text-[#09b850] transition-colors duration-500 ease-in-out">
                    {job.title}
                  </h5>
                  <div className="flex flex-wrap gap-4 text-[#606261] dark:text-[#c4c5c7] mt-3">
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
                      <BsAwardFill /> {job.education.map((edu: string, index: number): JSX.Element => (
                        <div key={index}>
                            {edu}
                        </div>
                    ))}
                    </span>
                  </div>
                </div>
                <span
                  className="inline-flex items-center justify-center bg-[#0B9944] hover:bg-[#09B850] text-white px-5 py-2 rounded-sm transition"
                >
                  Apply now <FaArrowRight className="ml-2" />
                </span>
              </Link>
            ))
          ) : (
              <ContentNotFound details="There are no job openings available for this role." />
          )}
        </div>
      </div>
    </section>
  );
}
export default OpenPositions;
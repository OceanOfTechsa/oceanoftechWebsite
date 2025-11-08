"use client";

import { useState, useEffect, JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import type { CaseStudy } from "@/data/caseStudies";
import { ITEMS_PER_PAGE } from "@/AppSettings";

interface CaseStudiesListProps {
  items: CaseStudy[];
  itemsPerPage?: number;
  onPageChange?: () => void;
}

const  CaseStudiesList = ({items,itemsPerPage = ITEMS_PER_PAGE, onPageChange,}: CaseStudiesListProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const totalPages: number = Math.ceil(items.length / itemsPerPage);
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const currentItems: CaseStudy[] = items.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    if (loading && onPageChange) onPageChange();
  }, [loading, onPageChange]);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const handlePageChange = (page: number) => {
    setLoading(true);
    setCurrentPage(page);
  };

  const getPaginationNumbers = () => {
    const delta = 2;
    const range: (number | string)[] = [];
    const rangeWithDots: (number | string)[] = [];
    let last: number | undefined;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (last) {
        if (Number(i) - last === 2) {
          rangeWithDots.push(last + 1);
        } else if (Number(i) - last > 2) {
          rangeWithDots.push("..");
        }
      }
      rangeWithDots.push(i);
      last = Number(i);
    }

    return rangeWithDots;
  };

  return (
    <div className="w-full">
      {/* Case Studies */}
      <div className="space-y-20">
        {loading
          ? [...Array(itemsPerPage)].map((_, idx) => (
              <div key={idx} className="grid md:grid-cols-2 gap-10 items-center animate-pulse">
                <div className={`rounded-lg overflow-hidden ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="h-[400px] bg-gray-200 dark:bg-[#292a2d] rounded-lg"></div>
                </div>
                <div className={`${idx % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="space-y-6">
                    <div className="h-8 w-48 bg-gray-200 dark:bg-[#292a2d] rounded"></div>
                    <div className="h-4 w-full bg-gray-200 dark:bg-[#292a2d] rounded"></div>
                    <div className="h-4 w-3/4 bg-gray-200 dark:bg-[#292a2d] rounded"></div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-1">
                        <div className="h-4 w-4 bg-gray-200 dark:bg-[#292a2d] rounded-full"></div>
                        <div className="h-4 w-10 bg-gray-200 dark:bg-[#292a2d] rounded"></div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {[...Array(3)].map((__, i) => (
                          <div
                            key={i}
                            className="h-6 w-20 bg-gray-200 dark:bg-[#292a2d] rounded-full"
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="h-6 w-32 bg-gray-200 dark:bg-[#292a2d] rounded"></div>
                  </div>
                </div>
              </div>
            ))
          : currentItems.map((caseStudy, i): JSX.Element => (
              <Link
                href={`/portfolio/${caseStudy.projectUrl}`}
                key={caseStudy.id}
                className="grid md:grid-cols-2 gap-10 items-center group"
              >
                {/* Image */}
                <div className={`rounded-md overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <Image
                    src={caseStudy.imageUrl}
                    width={608}
                    height={456}
                    quality={100}
                    loading="eager"
                    className="object-cover w-full h-[400px] transform group-hover:scale-105 transition-transform duration-500"
                    alt={caseStudy.title}
                  />
                </div>

                {/* Text */}
                <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <Image
                    width={141}
                    height={30}
                    quality={100}
                    loading="lazy"
                    src={caseStudy.clientLogo}
                    className="h-[30px] mb-3 lg:mb-4"
                    alt={caseStudy.title}
                  />
                  <h3 className="text-[25.7px] md:text-[2rem] font-bold text-gray-900 dark:text-white">
                    {caseStudy.title}
                  </h3>
                  <p className="mb-3 text-[#606261] dark:text-[#c4c5c7] font-normal text-lg">
                    {caseStudy.subtitle}
                  </p>
                  <div className="flex flex-col gap-3 mb-6 text-gray-600 dark:text-gray-300 font-normal text-base">
                    <div className="flex items-center gap-1 text-[#606261] dark:text-[#c4c5c7]">
                      <GoDotFill size={15} className="text-green-500" />
                      {caseStudy.year}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.categories.map((cat, j) => (
                        <span
                          key={j}
                          className="bg-gray-100 dark:bg-[#292a2d] px-3 py-1 rounded-full"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="group-hover:text-green-600 group-dark:hover:text-green-700 inline-flex items-center font-medium transition-all duration-300">
                    View case study <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-16">
          <button
            disabled={currentPage === 1 || loading}
            onClick={() => handlePageChange(currentPage - 1)}
            className="bg-[#f8f8f8] dark:bg-[#292a2d] hover:text-white disabled:opacity-50 transition-colors duration-300 hover:bg-[#09b850] dark:hover:bg-[#09b850] px-[1rem] py-[0.5rem] text-[1rem] border rounded-[0.313rem] flex items-center gap-2 cursor-pointer"
          >
            <FaLongArrowAltLeft /> Prev
          </button>

          {getPaginationNumbers().map((page, idx) =>
            page === ".." ? (
              <span
                key={idx}
                className="px-[0.5rem] py-[0.5rem] text-[1rem] rounded-[0.313rem] border bg-[#f8f8f8] dark:bg-[#292a2d] cursor-pointer"
              >
                <HiOutlineDotsHorizontal size={20} />
              </span>
            ) : (
              <button
                key={idx}
                onClick={() => handlePageChange(Number(page))}
                disabled={loading}
                className={`px-[1rem] py-[0.5rem] text-[1rem] rounded-[0.313rem] border transition-colors duration-300 cursor-pointer ${
                  currentPage === page
                    ? "bg-green-600 text-white"
                    : "bg-[#f8f8f8] dark:bg-[#292a2d] hover:bg-[#09b850] dark:hover:bg-[#09b850] hover:text-white"
                }`}
              >
                {page}
              </button>
            )
          )}

          <button
            disabled={currentPage === totalPages || loading}
            onClick={() => handlePageChange(currentPage + 1)}
            className="bg-[#f8f8f8] dark:bg-[#292a2d] hover:text-white disabled:opacity-50 transition-colors duration-300 hover:bg-[#09b850] dark:hover:bg-[#09b850] px-[1rem] py-[0.5rem] text-[1rem] border rounded-[0.313rem] flex items-center gap-2 cursor-pointer"
          >
            Next <FaLongArrowAltRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default CaseStudiesList;
"use client";

import { useState, useEffect, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/data/caseStudies";

type Props = {
  categories: CaseStudy["categories"];
  caseStudies: CaseStudy[];
  excludeId?: string;
};

export default function CaseStudyCarousel({ categories, caseStudies, excludeId }: Props): JSX.Element {
  const filtered:CaseStudy[] = caseStudies.filter(
    (c: CaseStudy): boolean =>
      c.id !== excludeId &&
      c.categories.some((cat: string): boolean => categories.includes(cat))
  );

  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect((): () => void => {
    const updateView: () => void = () => {
      const width: number = window.innerWidth;
      const isSmallScreen: boolean = width < 1024;
      setIsMobileOrTablet(isSmallScreen);
      if (width < 768) setItemsPerPage(1);
      else if (width < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  useEffect((): (() => void) | undefined => {
    if (!isMobileOrTablet) return;
    const interval: NodeJS.Timeout = setInterval((): void => {
      setPage((prev: number): number => (prev + 1) % Math.ceil(filtered.length / itemsPerPage));
    }, 4000);

    return (): void => clearInterval(interval);
  }, [isMobileOrTablet, filtered.length, itemsPerPage]);

  const totalPages: number = Math.ceil(filtered.length / itemsPerPage);
  const currentItems: CaseStudy[] = isMobileOrTablet
    ? filtered.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)
    : filtered;

  return (
    <div className="w-full max-w-7xl mx-auto select-none">
      {isMobileOrTablet ? (
        <>
          {/* ✅ Swiper with animation for mobile & tablet */}
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -80, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className={`grid gap-6 ${
                itemsPerPage === 2 ? "grid-cols-2" : "grid-cols-1"
              }`}
            >
              {currentItems.map((study: CaseStudy): JSX.Element => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
            </motion.div>
          </AnimatePresence>

            <div className="flex items-center justify-center gap-3 mt-5">
                <div className="flex gap-2">
                    {totalPages <= 5 ? (
                        Array.from({ length: totalPages }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setPage(idx)}
                                className={`h-2 w-2 rounded-full transition-all cursor-pointer ${
                                idx === page
                                ? "bg-green-500 w-6"
                                : "bg-gray-300 dark:bg-gray-600"
                            }`}
                            />
                        ))
                    ) :
                    (
                        <span className="px-3 py-1 text-xs rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200">
                            {page + 1} / {totalPages}
                        </span>
                    )}
                </div>
            </div>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {
           currentItems ? (
            <>
              {currentItems.map((study: CaseStudy): JSX.Element => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
            </>
           )
           :
           (
            <div>Nothing Found</div>
           )
          }
        </div>
      )}
    </div>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={study.projectUrl} className="group rounded-sm relative transition group">
      {/* Image */}
      <div className="relative w-full md:w-[397] h-[397] overflow-hidden rounded-sm">
        <Image
          src={study.imageUrl}
          alt={study.title}
          fill
          className="object-cover transform group-hover:scale-102 transition-transform duration-800 ease-in-out w-full h-full rounded-sm"
        />
      </div>

      {/* Body */}
      <div className="py-4">
        <h5 className="text-[26.16px] md:text-[1.5rem] font-semibold text-gray-900 dark:text-white">
          {study.title}
        </h5>
        <p className="text-sm text-[#606261] dark:text-[#c4c5c7]">
          {study.subtitle}
        </p>
      </div>
    </Link>
  );
}

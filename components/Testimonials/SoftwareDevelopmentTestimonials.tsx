"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {TechStackBeams} from "@/components/Beam";

const testimonials = [
  {
    review: "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience.",
    author: "Jacqueline Miller",
    role: "Product designer",
  },
  {
    review: "Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.",
    author: "Emma Watson",
    role: "Co-Founder",
  },
  {
    review: "Two before narrow not relied on how except moment myself Dejection assurance Mrs led certainly So gate at no only none open Betrayed.",
    author: "Louis Ferguson",
    role: "Web Developer",
  },
];

const QuoteIcon = () => (
  <svg width="56" height="40" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-10">
    <path d="M11.3043 40C11.222 39.9991 11.1402 39.9874 11.0609 39.9652C10.8802 39.9125 10.7216 39.8027 10.6087 39.6522C10.4958 39.5017 10.4348 39.3186 10.4348 39.1304V22.2304H0.869565C0.638942 22.2304 0.417765 22.1388 0.25469 21.9757C0.0916147 21.8127 0 21.5915 0 21.3609V0.869565C0 0.638942 0.0916147 0.417765 0.25469 0.25469C0.417765 0.0916148 0.638942 0 0.869565 0H22.6087C22.8393 0 23.0605 0.0916148 23.2236 0.25469C23.3866 0.417765 23.4783 0.638942 23.4783 0.869565V21.3435C23.4783 21.5082 23.4316 21.6695 23.3435 21.8087L12.0391 39.5957C11.9607 39.7195 11.8522 39.8216 11.7237 39.8923C11.5952 39.963 11.451 40 11.3043 40ZM1.73913 20.4739H11.3043C11.535 20.4739 11.7561 20.5655 11.9192 20.7286C12.0823 20.8917 12.1739 21.1129 12.1739 21.3435V36.1261L21.7391 21.087V1.73913H1.73913V20.4739Z" fill="#09b850"/>
    <path d="M43.4792 40C43.3968 39.9991 43.315 39.9874 43.2357 39.9652C43.0551 39.9125 42.8964 39.8027 42.7835 39.6522C42.6706 39.5017 42.6096 39.3186 42.6096 39.1304V22.2304H33.0444C32.8137 22.2304 32.5926 22.1388 32.4295 21.9757C32.2664 21.8127 32.1748 21.5915 32.1748 21.3609V0.869565C32.1748 0.638942 32.2664 0.417765 32.4295 0.25469C32.5926 0.0916148 32.8137 0 33.0444 0H54.7835C55.0141 0 55.2353 0.0916148 55.3984 0.25469C55.5615 0.417765 55.6531 0.638942 55.6531 0.869565V21.3435C55.6531 21.5082 55.6064 21.6695 55.5183 21.8087L44.2139 39.5957C44.1355 39.7195 44.027 39.8216 43.8985 39.8923C43.77 39.963 43.6258 40 43.4792 40ZM33.9139 20.4739H43.4792C43.7098 20.4739 43.931 20.5655 44.094 20.7286C44.2571 20.8917 44.3487 21.1129 44.3487 21.3435V36.1261L53.9139 21.087V1.73913H33.9139V20.4739Z" fill="#09b850"/>
  </svg>
);

export default function SoftwareDevelopmentTesimonials() {
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  const totalPages = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused, totalPages]);

  const currentTestimonial = testimonials[page];

  return (
    <section className="py-8 lg:py-16 bg-[#202124] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Testimonials Carousel */}
          <div 
            className=""
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-2 md:mt-4 pe-6"
            >
              {/* Quote Icon */}
              <div className="text-[#09b850] mb-6">
                <QuoteIcon />
              </div>
              
              {/* Review */}
              <p className="text-white text-lg md:text-xl leading-relaxed mb-6">
                {currentTestimonial.review}
              </p>
              
              {/* Author Detail */}
              <div>
                <h6 className="text-white font-semibold text-lg mb-1">
                  {currentTestimonial.author}
                </h6>
                <p className="text-gray-400 text-sm">
                  {currentTestimonial.role}
                </p>
              </div>
            </motion.div>

            {/* Pagination Dots */}
            <div className="flex gap-1 mt-8">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPage(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === page ? "bg-[#09b850] w-5" : "bg-gray-600 w-2"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          <TechStackBeams />
        </div>
      </div>
    </section>
  );
}
"use client";

import {ArrowUpFromDot, MessagesSquare} from "lucide-react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const startPosition = window.pageYOffset;
    const duration = 1000;
    let startTime: number | null = null;

    function animation(currentTime: number | null) {
      if (currentTime === null) return;
      if (startTime === null) startTime = currentTime;
      const timeElapsed: number = currentTime - startTime;
      const progress: number = Math.min(timeElapsed / duration, 1);
      
      const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);
      const easedProgress = easeOutCubic(progress);
      
      window.scrollTo(0, startPosition * (1 - easedProgress));
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        window.scrollTo(0, 0);
      }
    }
    requestAnimationFrame(animation);
  };

  return (
    <div className="fixed bottom-8 right-3 sm:right-28 z-50 flex items-end gap-3">
      <div className="w-[150px] md:w-[154px] flex items-end gap-1">
          <Button type="button" variant="outline" size="sm" className={`rounded-[0.2rem] mt-4 text-white bg-[#292a2d] border-gray-300/30 ${
              isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} `}>
              <Link href="/feedback" className="flex items-center gap-2 ">
                  <MessagesSquare />Feedback
              </Link>
          </Button>
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`cursor-pointer bg-[#09b850] hover:bg-[#0B9944] text-white rounded-[0.2rem] h-[30px] w-[30px] md:h-[34px] md:w-[34px] transition-all duration-300 ease-in-out shadow-md  active:scale-95 flex items-center justify-center ${
            isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ArrowUpFromDot  className="h-5 w-5 md:h-6 md:w-6 font-bold" />
        </button>
      </div>
    </div>
  );
};

export default ScrollToTop;
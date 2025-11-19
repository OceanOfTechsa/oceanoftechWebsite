"use client";

import { ArrowUpFromDot } from "lucide-react";
import { useState, useEffect } from "react";

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
    <div className="fixed bottom-8 right-8 z-50 flex items-end gap-3">
      <div className="w-[40px] md:w-[44px]">
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`cursor-pointer bg-[#09b850] hover:bg-[#0B9944] text-white rounded-[0.2rem] h-[40px] w-[40px] md:h-[44px] md:w-[44px] transition-all duration-300 ease-in-out shadow-md  active:scale-95 flex items-center justify-center ${
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
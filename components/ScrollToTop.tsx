"use client";

import { useState, useEffect } from "react";
import { LuArrowUp } from "react-icons/lu";

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
    // Get current scroll position
    const startPosition = window.pageYOffset;
    const duration = 1000; // Reduced from 1900ms for better performance
    let startTime: number | null = null;

    function animation(currentTime: number | null) {
      if (currentTime === null) return; // Prevent using null value
      if (startTime === null) startTime = currentTime;
      const timeElapsed: number = currentTime - startTime;
      const progress: number = Math.min(timeElapsed / duration, 1);
      
      // Using a smoother easing function
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
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="bg-[#09b850] text-white p-3 rounded-[10%] h-[35px] w-[35px] md:h-[40px] md:w-[40px] text-[16px] md:text-[1rem] leading-[35px] cursor-pointer transition-all ease-in-out duration-300 font-bold hover:animate-pulse flex justify-center items-center shadow-md hover:shadow-lg"
        >
          <LuArrowUp className="h-5 w-5 font-bold" size={30} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
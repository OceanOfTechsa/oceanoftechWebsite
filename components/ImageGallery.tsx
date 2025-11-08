"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Function to format image paths consistently
  const formatImagePath = (imgPath: string) => {
    if (!imgPath) return "";
    
    // If it's already an absolute URL, return as-is
    if (imgPath.startsWith('http') || imgPath.startsWith('data:')) {
      return imgPath;
    }
    
    // If it starts with a slash, return as-is
    if (imgPath.startsWith('/')) {
      return imgPath;
    }
    
    // Otherwise, add a slash at the beginning
    return `/${imgPath}`;
  };

  // Don't render anything until component is mounted (for Next.js hydration)
  if (!isMounted) {
    return (
      <div className="mt-[3.5rem] grid grid-cols-1 sm:grid-cols-3 gap-[3rem] w-full">
        {images.map((_, i) => (
          <div key={i} className="bg-gray-200 animate-pulse rounded-sm h-[300px]"></div>
        ))}
      </div>
    );
  }

  return (
    <div>
      {/* Gallery */}
      <div className="mt-[3.5rem] grid grid-cols-1 sm:grid-cols-3 gap-[3rem] w-full">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => openModal(i)}
            className="block focus:outline-none"
          >
            <Image
              src={formatImagePath(img)}
              alt={`project image ${i + 1}`}
              width={500}
              height={i === 1 ? 700 : 500}
              quality={100}
              loading="lazy"
              className={`rounded-sm cursor-pointer transition-transform duration-300 hover:scale-101 object-cover ${
                i === 1 ? "sm:mt-[3.5rem]" : ""
              }`}
            />
          </button>
        ))}
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-gray-300 cursor-pointer z-60"
          >
            <X size={32} />
          </button>

          {/* Prev button */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white hover:text-gray-300 cursor-pointer z-60"
          >
            <ChevronLeft size={44} />
          </button>

          {/* Image wrapper */}
          <div 
            className="relative w-full max-w-5xl h-[80vh] px-6 flex items-center justify-center rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={formatImagePath(images[currentIndex])}
              alt={`popup image ${currentIndex + 1}`}
              fill
              className="object-contain rounded-sm shadow-sm"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>

          {/* Next button */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:text-gray-300 cursor-pointer z-60"
          >
            <ChevronRight size={44} />
          </button>
        </div>
      )}
    </div>
  );
}
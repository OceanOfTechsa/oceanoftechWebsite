'use client';

import { useState, useEffect } from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { encode } from 'qss';

interface LinkPreviewProps {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  isStatic?: boolean;
  imageSrc?: string;
  openInNewTab?: boolean; // New prop to control link behavior
}

export const LinkPreview = ({
  children,
  url,
  className = '',
  width = 300,
  height = 175,
  quality = 100,
  isStatic = false,
  imageSrc = '',
  openInNewTab = true, // Default to opening in new tab
}: LinkPreviewProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate the preview image source
  const generatePreviewSrc = () => {
    if (isStatic && imageSrc) {
      return imageSrc;
    }
    
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: 'screenshot.url',
      colorScheme: 'dark',
      'viewport.isMobile': true,
      'viewport.deviceScaleFactor': 1,
      'viewport.width': width * 3,
      'viewport.height': height * 3,
    });
    
    return `https://api.microlink.io/?${params}`;
  };

  const previewSrc = generatePreviewSrc();

  // Link attributes based on the openInNewTab prop
  const linkAttributes = openInNewTab
    ? {
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    : {};

  return (
    <>
      {/* Preload hidden image for better performance */}
      {isMounted && !imgError && (
        <div style={{ display: 'none' }}>
          <Image
            src={previewSrc} 
            alt="Preload preview"
            fill
            onError={() => setImgError(true)}
          />
        </div>
      )}

      <HoverCard.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={setIsOpen}
      >
        <HoverCard.Trigger asChild>
          <a
            href={url}
            className={`inline-block text-start transition-colors ${className}`}
            {...linkAttributes}
          >
            {children}
          </a>
        </HoverCard.Trigger>

        <HoverCard.Content
          className="z-50"
          side="top"
          align="center"
          sideOffset={5}
        >
          <AnimatePresence>
            {isOpen && !imgError && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <a
                  href={url}
                  {...linkAttributes}
                  className="block transition-transform hover:scale-[1.02]"
                >
                  <div className="relative" style={{ width, height }}>
                    <Image
                      src={previewSrc}
                      fill
                      alt={`Preview of ${url}`}
                      className="object-cover"
                      onError={() => setImgError(true)}
                      quality={quality}
                    />
                  </div>
                  <div className="p-3">
                    {/* Replaced <p> with <div> to fix hydration errors */}
                    <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {url.replace(/^https?:\/\//, '')}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Click to open link
                    </div>
                  </div>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCard.Content>
      </HoverCard.Root>
    </>
  );
};

export default LinkPreview;


// usage

//<div className="space-y-4">

// <LinkPreview 
//   url="https://example.com" 
//   openInNewTab={false}
// >
//   Internal Link
// </LinkPreview>


// <LinkPreview url="https://example.com">
//   External Link
// </LinkPreview>


// <LinkPreview 
//   url="https://example.com"
//   isStatic
//   imageSrc="/code.jpg"
//   openInNewTab={true}
// >
//   Link with custom image
// </LinkPreview>
//       </div>
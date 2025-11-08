"use client"

import { motion, useAnimation, type PanInfo } from "framer-motion"
import { useEffect, useRef, useState, JSX } from "react"
import Image from "next/image";

const images = [
  { src: "/01.jpg", height: 300, width: 1030},
  { src: "/12.jpg", height: 250, width: 1030},
  { src: "/08.jpg", height: 350, width: 1030},
  { src: "/14.jpg", height: 280, width: 1030},
  { src: "/HomeAboutSection2.jpg", height: 320, width: 1030},
  { src: "/menu-blog.jpg", height: 260, width: 1030,},
  { src: "/reviews.jpg", height: 340, width: 1030},
  { src: "/HomeAboutSection.jpg", height: 290, width: 1030 },
  { src: "/showCase1.jpg", height: 310, width: 1030},
  { src: "/hero.webp", height: 270, width: 1030},
]

const AnimatedImageSection = (): JSX.Element => {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [dragDirection, setDragDirection] = useState(-1) // -1 for left, 1 for right
  const [isDragging, setIsDragging] = useState(false)

  const singleSetWidth = images.length * 420 // 400px width + 20px gap

  useEffect(() => {
    if (!isDragging) {
      const animate = async () => {
        if (dragDirection === -1) {
          // Moving left (right to left)
          await controls.start({
            x: -singleSetWidth,
            transition: {
              duration: singleSetWidth / 30, // Slower speed: 30px per second
              ease: "linear",
            },
          })
          controls.set({ x: 0 })
        } else {
          // Moving right (left to right)
          await controls.start({
            x: 0,
            transition: {
              duration: singleSetWidth / 30,
              ease: "linear",
            },
          })
          controls.set({ x: -singleSetWidth })
        }

        // Continue the loop
        animate()
      }

      animate()
    }
  }, [controls, dragDirection, isDragging, singleSetWidth])

  const handleDragStart = () => {
    setIsDragging(true)
    controls.stop()
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false)

    // Determine direction based on drag velocity
    if (Math.abs(info.velocity.x) > 50) {
      setDragDirection(info.velocity.x > 0 ? 1 : -1)
    }
  }

  return (
    <div className="w-full h-96 overflow-hidden py-20 mt-10">
      <div ref={containerRef} className="relative h-full flex justify-center items-center">
        <motion.div
          className="flex gap-6 h-full items-end  absolute"
          drag="x"
          dragConstraints={{ left: -singleSetWidth * 2, right: singleSetWidth }}
          dragElastic={0.1}
          animate={controls}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          initial={{ x: -singleSetWidth }}
        >
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-5 items-end rounded-sm">
              {images.map((image, index) => (
                <motion.div
                  key={`${setIndex}-${index}`}
                  className="flex-shrink-0 rounded-sm overflow-hidden"
                  style={{ height: `${image.height}px`, width: "400px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    width={image.width} height={image.height}
                    loading="eager"
                    quality={100}
                    className="w-full h-full object-cover rounded-sm"
                    draggable={false}
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default AnimatedImageSection;
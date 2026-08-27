"use client"

import { useEffect, useRef, useState, useCallback, JSX } from "react"
import Image from "next/image"

// ─── Image data ───────────────────────────────────────────────────────────────
const images = [
  { src: "/12.jpg",                width: 1030, height: 1030 },
  { src: "/08.jpg",                width: 1030, height: 1030 },
  { src: "/14.jpg",                width: 1030, height: 1030 },
  { src: "/HomeAboutSection2.jpg", width: 1030, height: 1030 },
  { src: "/menu-blog.jpg",         width: 1030, height: 1030 },
  { src: "/reviews.jpg",           width: 1030, height: 1030 },
  { src: "/HomeAboutSection.jpg",  width: 1030, height: 1030 },
  { src: "/showCase1.jpg",         width: 1030, height: 1030 },
  { src: "/hero.webp",             width: 1030, height: 1030 },
]

// ─── Constants ────────────────────────────────────────────────────────────────
const CARD_W        = 180        // base card width  (at scale 1.0)
const CARD_H        = 280        // base card height (at scale 1.0)
const GAP           = 1          // gap between cards
const STRIDE        = CARD_W + GAP
const SET_COUNT     = 3
const AUTO_SPEED    = 0.45
const FLING_DECAY   = 0.93
const PERSPECTIVE   = 1100

// ─── 3D curve math ────────────────────────────────────────────────────────────
// cardCenterX : card's centre in SCREEN space (pixels from left of viewport)
// stageW      : viewport/stage width
//
// The arc: small + faint at screen-centre, large + vivid at screen-edges.
function cardTransform(cardCenterX: number, stageW: number) {
  // signed distance from screen centre, normalised to [-1, 1]
  const dist  = cardCenterX - stageW / 2
  const t     = Math.max(-1.5, Math.min(1.5, dist / (stageW * 0.5)))
  const tAbs  = Math.abs(t)

  // ── scale: LARGE at edges (tAbs=1), SMALL at centre (tAbs=0) ──
  const scale    = 0.35 + (tAbs * tAbs) * 0.65   // 0.35 → 1.0

  // ── rotateY: fan cards away from viewer at the edges ──
  // left of centre (t<0) → rotate negative Y (right face shows)
  // right of centre (t>0) → rotate positive Y (left face shows)
  const rotateY  = t * 45                          // ±45° at edges

  // ── vertical arc: edges lift upward ──
  const translateY = -(tAbs * tAbs) * 55           // 0px at centre → -55px at edges

  // ── opacity: nearly invisible at centre, solid at edges ──
  const opacity  = 0.18 + Math.pow(tAbs, 0.7) * 0.82

  return { scale, rotateY, translateY, opacity }
}

// ─── Component ───────────────────────────────────────────────────────────────
const AnimatedImageSection = (): JSX.Element => {
  const stageRef   = useRef<HTMLDivElement>(null)
  const xRef       = useRef(0)
  const velRef     = useRef(-AUTO_SPEED)
  const dragging   = useRef(false)
  const lastMouseX = useRef(0)
  const lastTime   = useRef(0)
  const dragVelRef = useRef(0)
  const rafRef     = useRef<number>(0)
  const [, redraw] = useState(0)

  const SINGLE_SET_WIDTH = images.length * STRIDE

  // ── animation loop ────────────────────────────────────────────────────────
  const loop = useCallback(() => {
    if (!dragging.current) {
      xRef.current += velRef.current

      // seamless wraparound
      if (xRef.current < -SINGLE_SET_WIDTH * 2) xRef.current += SINGLE_SET_WIDTH
      if (xRef.current > 0)                      xRef.current -= SINGLE_SET_WIDTH

      // fling decay → settle to AUTO_SPEED
      if (Math.abs(velRef.current) > AUTO_SPEED) {
        const sign = velRef.current < 0 ? -1 : 1
        velRef.current *= FLING_DECAY
        if (Math.abs(velRef.current) < AUTO_SPEED) velRef.current = -AUTO_SPEED * sign
      }
    }

    redraw(n => n + 1)
    rafRef.current = requestAnimationFrame(loop)
  }, [SINGLE_SET_WIDTH])

  useEffect(() => {
    xRef.current = -SINGLE_SET_WIDTH
    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [loop, SINGLE_SET_WIDTH])

  // ── pointer drag ──────────────────────────────────────────────────────────
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current   = true
    lastMouseX.current = e.clientX
    lastTime.current   = performance.now()
    dragVelRef.current = 0
    ;(e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId)
  }, [])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return
    const now = performance.now()
    const dt  = now - lastTime.current
    const dx  = e.clientX - lastMouseX.current
    if (dt > 0) dragVelRef.current = (dx / dt) * 16
    xRef.current      += dx
    lastMouseX.current = e.clientX
    lastTime.current   = now
  }, [])

  const onPointerUp = useCallback(() => {
    if (!dragging.current) return
    dragging.current = false
    const flung = -dragVelRef.current * 0.25
    velRef.current = Math.sign(flung) !== 0
        ? Math.max(-10, Math.min(10, flung))
        : -AUTO_SPEED
  }, [])

  const stageW = stageRef.current?.offsetWidth ?? 1200

  return (
      <section
          ref={stageRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          style={{
            width:             "100%",
            height:            "460px",
            overflow:          "hidden",
            position:          "relative",
            display:           "flex",
            alignItems:        "center",
            cursor:            "grab",
            perspective:       `${PERSPECTIVE}px`,
            perspectiveOrigin: "50% 60%",
          }}
      >
        {/* Track — translateX moves all cards together, 3D math is per-card */}
        <div
            style={{
              position:  "absolute",
              top:       0,
              left:      0,
              height:    "100%",
              width:     `${SINGLE_SET_WIDTH * SET_COUNT}px`,
              transform: `translateX(${xRef.current}px)`,
            }}
        >
          {Array.from({ length: SET_COUNT }).map((_, setIndex) =>
              images.map((image, imgIndex) => {
                const cardIndex = setIndex * images.length + imgIndex

                // Card's left edge in screen space
                const cardScreenLeft   = xRef.current + cardIndex * STRIDE
                // Card's centre in screen space
                const cardScreenCentre = cardScreenLeft + CARD_W / 2

                const { scale, rotateY, translateY, opacity } =
                    cardTransform(cardScreenCentre, stageW)

                return (
                    <div
                        key={`${setIndex}-${imgIndex}`}
                        style={{
                          position:           "absolute",
                          left:               `${cardIndex * STRIDE}px`,
                          top:                "50%",
                          width:              `${CARD_W}px`,
                          height:             `${CARD_H}px`,
                          borderRadius:       "16px",
                          overflow:           "hidden",
                          transform:          `translateY(calc(-50% + ${translateY}px)) rotateY(${rotateY}deg) scale(${scale})`,
                          transformOrigin:    "center center",
                          transformStyle:     "preserve-3d",
                          backfaceVisibility: "hidden",
                          opacity,
                          willChange:         "transform, opacity",
                          boxShadow:          `0 ${6 * scale}px ${28 * scale}px rgba(0,0,0,0.15)`,
                        }}
                    >
                      <Image
                          src={image.src}
                          alt={`Gallery ${imgIndex + 1}`}
                          width={image.width}
                          height={image.height}
                          loading="eager"
                          quality={90}
                          style={{
                            width:         "100%",
                            height:        "100%",
                            objectFit:     "cover",
                            display:       "block",
                            pointerEvents: "none",
                            userSelect:    "none",
                          }}
                          draggable={false}
                      />
                    </div>
                )
              })
          )}
        </div>
      </section>
  )
}

export default AnimatedImageSection
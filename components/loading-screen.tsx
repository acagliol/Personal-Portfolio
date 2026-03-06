"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ANIMATION } from "@/animation/constants"
import {
  loadingExitVariants,
  staggerContainer,
  staggerItemFadeUp,
  loadingBrandedMessage,
} from "@/animation/variants"

export function LoadingScreen() {
  const [count, setCount] = useState(0)
  const exitStyle = ANIMATION.loading.exitStyle
  const exitVariant = loadingExitVariants[exitStyle]

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 80)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]"
      initial={{ opacity: 1 }}
      exit={exitVariant.exit as never}
    >
      {/* Ambient background glow (SVGator: ambient background motion) */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_50%,rgba(255,255,255,0.06),transparent)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.8, 1] }}
        transition={{ duration: 3, times: [0, 0.3, 0.6, 1] }}
      />

      {/* Floating decorative lines (Framer: entrance + line draw feel) */}
      <motion.div
        className="absolute top-1/4 left-1/4 h-px w-32 bg-white/20"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: [0, 0.6, 0.3] }}
        transition={{ duration: 2, delay: 0.5 }}
        style={{ transformOrigin: "left" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 h-px w-24 bg-white/20"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: [0, 0.4, 0.2] }}
        transition={{ duration: 2, delay: 0.7 }}
        style={{ transformOrigin: "right" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 h-px w-20 bg-white/10"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: [0, 0.3, 0.15] }}
        transition={{ duration: 2.2, delay: 0.9 }}
        style={{ transformOrigin: "right" }}
      />

      {/* Main content container */}
      <motion.div
        className="relative flex flex-col items-center gap-14"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Top label */}
        <motion.div className="flex flex-col items-center gap-4" variants={staggerItemFadeUp}>
          <span className="text-[9px] uppercase tracking-[0.5em] text-[#a8a6a1]">
            Portfolio
          </span>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </motion.div>

        {/* Name + branded message (Coding for Designers style: animated message during load) */}
        <motion.div
          className="flex flex-col items-center gap-6"
          variants={staggerItemFadeUp}
        >
          <motion.h1
            className="font-display text-6xl font-light tracking-[0.25em] text-[#fafaf9] sm:text-7xl md:text-8xl uppercase"
            variants={{
              hidden: { opacity: 0, y: 60, filter: "blur(20px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 1.2, ease: ANIMATION.ease },
              },
            }}
          >
            Alejo
          </motion.h1>

          <motion.div
            className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-[#fafaf9]/80"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.35 },
              },
            }}
          >
            {ANIMATION.loading.brandedMessage.split(/(\s·\s|\s+)/).filter(Boolean).map((word, i) => (
              <motion.span
                key={i}
                className="font-display text-lg font-light tracking-wide sm:text-xl"
                custom={i}
                variants={loadingBrandedMessage}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated line divider (self-drawing line feel — SVGator) */}
        <motion.div
          className="h-px w-48 overflow-hidden"
          variants={{
            hidden: { opacity: 0, scaleX: 0 },
            visible: {
              opacity: 1,
              scaleX: 1,
              transition: { duration: 1.2, ease: ANIMATION.ease, delay: 0.4 },
            },
          }}
          style={{ transformOrigin: "center" }}
        >
          <div className="h-full w-full bg-gradient-to-r from-transparent via-[#fafaf9]/60 to-transparent" />
        </motion.div>

        {/* Loading counter and bar (Framer + SVGator: progress bar, branded loader) */}
        <motion.div
          className="flex flex-col items-center gap-4"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.8, delay: 0.6 },
            },
          }}
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm tabular-nums text-[#a8a6a1]">
              {Math.min(100, Math.floor(count))}%
            </span>
            <div className="relative h-px w-36 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-[#fafaf9]"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(100, count)}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>

          <motion.p
            className="text-[10px] uppercase tracking-[0.4em] text-[#a8a6a1]/60"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Loading
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Subtle grid overlay (ambient background — SVGator) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </motion.div>
  )
}

"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItemFadeUp } from "@/animation/variants"
import { ANIMATION } from "@/animation/constants"

/** Route-level loading UI (Framer/SVGator: loading bar + minimal branded feel) */
export default function PortfolioLoading() {
  return (
    <motion.div
      className="flex min-h-[50vh] items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div
        className="flex flex-col items-center gap-6"
        variants={staggerItemFadeUp}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="h-px w-32 overflow-hidden rounded-full bg-white/[0.08]">
            <motion.div
              className="h-full w-full origin-left rounded-full bg-foreground/50"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1.2,
                ease: ANIMATION.ease,
                repeat: Infinity,
                repeatDelay: 0.3,
              }}
              style={{ transformOrigin: "left" }}
            />
          </div>
          <motion.p
            className="text-[11px] font-light tracking-[0.2em] uppercase text-muted-foreground"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Loading
          </motion.p>
        </div>
        {/* Skeleton-style lines (SVGator: loading skeleton screens) */}
        <div className="flex flex-col gap-2">
          <motion.div
            className="h-2 w-48 rounded-sm bg-white/[0.06]"
            variants={staggerItemFadeUp}
          />
          <motion.div
            className="h-2 w-36 rounded-sm bg-white/[0.04]"
            variants={staggerItemFadeUp}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

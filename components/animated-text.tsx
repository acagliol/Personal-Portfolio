"use client"

import { motion } from "framer-motion"

export function AnimatedWords({
  text,
  className = "",
  staggerDelay = 0.08,
  initialDelay = 0,
}: {
  text: string
  className?: string
  staggerDelay?: number
  initialDelay?: number
}) {
  const words = text.split(" ")

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em] last:mr-0"
          initial={{ opacity: 0, y: 60, rotateX: 45, filter: "blur(10px)" }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.9,
            delay: initialDelay + i * staggerDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export function AnimatedChars({
  text,
  className = "",
  staggerDelay = 0.03,
  initialDelay = 0,
}: {
  text: string
  className?: string
  staggerDelay?: number
  initialDelay?: number
}) {
  const chars = text.split("")

  return (
    <span className={className}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: initialDelay + i * staggerDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}

export function AnimatedLines({
  lines,
  className = "",
  staggerDelay = 0.15,
  initialDelay = 0,
}: {
  lines: string[]
  className?: string
  staggerDelay?: number
  initialDelay?: number
}) {
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -60, filter: "blur(16px)" }}
          animate={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            delay: initialDelay + i * staggerDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {line}
        </motion.div>
      ))}
    </div>
  )
}

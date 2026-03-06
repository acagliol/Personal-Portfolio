"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import { AnimatedWords } from "@/components/animated-text"

const links = [
  { label: "GitHub", href: "https://github.com/acagliol", status: "acagliol" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alejo-cagliolo/", status: "alejo-cagliolo" },
  { label: "X", href: "https://x.com/alejo_cagliolo", status: "@alejo_cagliolo" },
  { label: "Email", href: "mailto:acagliol@purdue.edu", status: "acagliol@purdue.edu" },
]

export default function LinksPage() {
  return (
    <div className="space-y-20 md:space-y-28">
      {/* Page header */}
      <div className="relative">
        {/* Floating decoration */}
        <motion.div
          className="absolute -top-8 right-1/4 h-px w-32 bg-white/10"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-[10px] font-light uppercase tracking-[0.5em] text-muted-foreground mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Network
          </motion.p>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <AnimatedWords
              text="Connect"
              className="font-display block mb-4"
              staggerDelay={0.15}
              initialDelay={0.4}
            />
            <motion.span
              className="block font-display text-4xl sm:text-5xl md:text-6xl font-light text-foreground/80 normal-case tracking-wide"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(16px)" }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Let's talk
            </motion.span>
          </motion.h1>

          <motion.p
            className="max-w-2xl text-[15px] font-light leading-relaxed text-muted-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            All links open in a new tab. Click to connect via GitHub, LinkedIn, X, or email.
          </motion.p>
        </motion.div>
      </div>

      {/* Links grid with dramatic motion */}
      <div className="grid gap-6 md:grid-cols-2">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            initial={{ opacity: 0, y: 100, scale: 0.96 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2 + i * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -4 }}
          >
            <Card className="card-tilt group border-white/[0.08] bg-card/70 backdrop-blur-sm overflow-hidden relative h-full">
              {/* Ambient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Floating accent line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.4 + i * 0.1 }}
              />

              <CardContent className="flex items-center justify-between gap-5 py-8 md:py-10 relative z-10">
                <div className="space-y-3">
                  <motion.p
                    className="text-[10px] font-light uppercase tracking-[0.4em] text-muted-foreground/70"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                  >
                    {link.status}
                  </motion.p>
                  <motion.p
                    className="text-2xl font-display font-light tracking-[0.1em] text-foreground/90 group-hover:text-foreground transition-colors uppercase"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 + i * 0.15 }}
                  >
                    {link.label}
                  </motion.p>
                </div>

                <motion.div
                  className="flex-shrink-0 p-3 rounded-lg border border-white/[0.06] bg-card/50 text-muted-foreground group-hover:text-foreground group-hover:border-white/[0.12] group-hover:bg-card transition-all duration-300"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowUpRight className="size-5" />
                </motion.div>
              </CardContent>

              {/* Hover indicator */}
              <motion.div
                className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: -10 }}
                animate={{ x: 0 }}
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
                  Open Link →
                </span>
              </motion.div>
            </Card>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

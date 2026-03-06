"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const toolbox = [
  "Python / C++ / TypeScript",
  "FastAPI / GraphQL / Next.js",
  "XGBoost / QuantLib / NumPy",
  "GCP / AWS / Terraform",
]

const timeline = [
  {
    title: "Projects",
    detail: "Helios (options pricing, Monte Carlo, portfolio optimization). AlphaSignal (ML forecasts, C++ technicals, FastAPI).",
    href: "/projects",
  },
  {
    title: "Experience",
    detail: "Founding Engineer @ Automated Consultancy Services. SWE intern @ Vertikal X. Product Engineer @ Mesh Verify.",
    href: "/resume",
  },
  {
    title: "Coursework",
    detail: "Data Structures & Algorithms, Computer Architecture, Linear Algebra, Discrete Mathematics.",
    href: "/resume",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
}

const slideLeft = {
  hidden: { opacity: 0, x: -72 },
  show: { opacity: 1, x: 0, transition: { type: "spring", damping: 24, stiffness: 200 } },
}
const slideRight = {
  hidden: { opacity: 0, x: 72 },
  show: { opacity: 1, x: 0, transition: { type: "spring", damping: 24, stiffness: 200 } },
}
const slideUp = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { type: "spring", damping: 22, stiffness: 180 } },
}

export default function HomePage() {
  return (
    <motion.div
      className="space-y-12 md:space-y-16"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <section className="grid gap-8 xl:grid-cols-[1.4fr_0.85fr]">
        <motion.div variants={slideLeft}>
          <Card className="grain-overlay min-h-[26rem] border-white/10 bg-[#0a0a0a]/80">
            <CardHeader className="flex h-full flex-col justify-between gap-10">
              <div className="space-y-6">
                <motion.span
                  variants={slideLeft}
                  className="inline-block border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white/70"
                >
                  cs + finance / builder
                </motion.span>
                <div className="space-y-5">
                  <motion.p variants={slideLeft} className="text-[11px] uppercase tracking-[0.32em] text-white/40">
                    Alejo Francisco Cagliolo — Purdue CS + Finance — 2026
                  </motion.p>
                  <motion.h1
                    variants={slideLeft}
                    className="max-w-4xl text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-[#f5f1e8] sm:text-5xl md:text-6xl"
                  >
                    Minimal brutalism.
                    <br />
                    Black glass.
                    <br />
                    Sharp code.
                  </motion.h1>
                  <motion.p variants={slideLeft} className="max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                    CS (Purdue, May 2027). Founding Engineer @ ACS. Quant (Helios), ML + C++ (AlphaSignal). Systems thinking, bias to ship.
                  </motion.p>
                </div>
              </div>
              <motion.div variants={container} className="grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
                {[
                  ["Focus", "Quant + ML, full-stack"],
                  ["Current", "ACS · Helios · AlphaSignal"],
                  ["Style", "Brutalist, motion-heavy"],
                ].map(([label, value]) => (
                  <motion.div key={label} variants={slideUp} className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-white/35">{label}</p>
                    <p className="text-xs tracking-wide text-white/65">{value}</p>
                  </motion.div>
                ))}
              </motion.div>
            </CardHeader>
          </Card>
        </motion.div>

        <motion.div variants={slideRight}>
          <Card className="border-white/10 bg-[#0a0a0a]/80">
            <CardHeader>
              <CardTitle className="text-[11px] uppercase tracking-widest text-white/90">Stack</CardTitle>
              <p className="text-xs text-white/45">Python, C++, TypeScript · FastAPI, Next.js · GCP, Terraform.</p>
            </CardHeader>
            <CardContent className="space-y-0">
              {toolbox.map((t, i) => (
                <motion.div
                  key={t}
                  variants={slideRight}
                  custom={i}
                  className="flex items-center justify-between border-b border-white/5 py-3 last:border-0"
                >
                  <span className="text-xs uppercase tracking-wider text-white/55">{t}</span>
                  <span className="size-1.5 border border-white/20" />
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {timeline.map((entry, index) => (
          <motion.div key={entry.title} variants={slideUp} transition={{ delay: index * 0.08 }}>
            <Link href={entry.href}>
              <Card className="group h-full border-white/10 bg-[#0a0a0a]/80 transition-all hover:border-white/20 hover:bg-[#0d0d0d]">
                <CardHeader>
                  <CardTitle className="text-xs uppercase tracking-widest text-white/80 group-hover:text-white">
                    {entry.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs leading-7 text-white/45">{entry.detail}</p>
                  <p className="mt-3 text-[10px] uppercase tracking-widest text-white/25">→</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </section>

      <motion.div variants={slideUp} className="flex flex-wrap gap-3">
        <Button asChild variant="default" className="border-white/20 bg-white/10 text-[#f5f1e8] hover:bg-white/15">
          <Link href="/links">Hire / connect</Link>
        </Button>
        <Button asChild variant="outline" className="border-white/15 text-white/60 hover:text-white/90">
          <Link href="/resume">See resume</Link>
        </Button>
      </motion.div>
    </motion.div>
  )
}

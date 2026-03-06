"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowUpRight, Github } from "lucide-react"
import { AnimatedWords } from "@/components/animated-text"

const projects = [
  {
    slug: "helios",
    title: "Helios Quantitative Research Platform",
    stack: "Python, NumPy, SciPy, QuantLib, Next.js",
    period: "Oct 2025 – Present",
    bullets: [
      "Options pricing: Black-Scholes, Heston stochastic volatility (calibrated to 250+ SPY strikes, 0.8 vol RMSE), exotic derivatives.",
      "Monte Carlo engine: 1M paths in 33ms, 8.1x variance reduction via control variates.",
      "Portfolio optimization: Markowitz, risk parity, CVaR; Next.js/TypeScript frontend.",
      "QuantLib validation: <0.001% error across 60+ test cases.",
    ],
    href: "https://github.com/acagliol/Helios-Quant",
  },
  {
    slug: "alphasignal",
    title: "AlphaSignal — Alternative Data Platform",
    stack: "Python, FastAPI, XGBoost, C++, PostgreSQL",
    period: "Aug 2025 – Present",
    bullets: [
      "XGBoost stock direction classifier; time-series CV, 53.7% accuracy (AUC 0.586) on 230-day AAPL; +18.1% backtest.",
      "31 technical/momentum features, no look-ahead bias.",
      "C++ RSI/MACD 15–20x faster (pybind11); FastAPI + PostgreSQL backend, Next.js dashboard.",
      "Fama-French 3-factor attribution for risk decomposition.",
    ],
    href: "https://github.com/acagliol/AlphaSignal",
  },
]

export default function ProjectsPage() {
  return (
    <div className="space-y-20 md:space-y-28">
      {/* Dramatic page header */}
      <div className="relative">
        {/* Floating line decorations */}
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
            className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Selected Work
          </motion.p>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <AnimatedWords
              text="Projects"
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
              Building quant systems
            </motion.span>
          </motion.h1>

          <motion.p
            className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            Options pricing, Monte Carlo simulation, portfolio optimization (Helios). ML forecasts, C++ performance optimization, FastAPI infrastructure (AlphaSignal).
          </motion.p>
        </motion.div>
      </div>

      {/* Project cards with heavy motion */}
      <div className="space-y-12">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.slug}
            initial={{ opacity: 0, y: 120, scale: 0.96 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              delay: idx * 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -6 }}
          >
            <Card className="card-tilt group border-white/[0.08] bg-card/70 backdrop-blur-sm overflow-hidden relative">
              {/* Ambient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Floating accent line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: idx * 0.2 + 0.4 }}
              />

              <CardHeader className="gap-4 relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.2 + 0.5 }}
                    >
                      <CardTitle className="text-2xl sm:text-3xl font-light tracking-tight mb-3 group-hover:text-foreground transition-colors">
                        {proj.title}
                      </CardTitle>
                      <CardDescription className="font-mono text-[11px] tracking-wide text-muted-foreground/80">
                        {proj.stack} · {proj.period}
                      </CardDescription>
                    </motion.div>
                  </div>

                  {/* External link */}
                  <motion.a
                    href={proj.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-3 rounded-lg border border-white/[0.06] bg-card/50 text-muted-foreground hover:text-foreground hover:border-white/[0.12] hover:bg-card transition-all duration-300"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 + 0.6 }}
                  >
                    <ArrowUpRight className="size-5" />
                  </motion.a>
                </div>
              </CardHeader>

              <CardContent className="space-y-3 font-mono text-[13px] leading-relaxed text-muted-foreground relative z-10">
                {proj.bullets.map((bullet, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-3 items-start"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.8,
                      delay: idx * 0.2 + 0.7 + i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <span className="text-foreground/40 mt-1.5">•</span>
                    <p className="flex-1">{bullet}</p>
                  </motion.div>
                ))}
              </CardContent>

              {/* Hover indicator */}
              <motion.div
                className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: -10 }}
                whileInView={{ x: 0 }}
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
                  View Details →
                </span>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* More projects CTA */}
      <motion.div
        className="pt-12 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="font-mono text-[12px] text-muted-foreground/70 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          More on{" "}
          <Link
            href="/resume"
            className="text-foreground/90 underline decoration-white/20 hover:decoration-foreground/60 transition-all"
          >
            Resume
          </Link>
          {" "}and{" "}
          <a
            href="https://github.com/acagliol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/90 underline decoration-white/20 hover:decoration-foreground/60 transition-all"
          >
            GitHub
          </a>
        </motion.p>

        {/* Decorative element */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </motion.div>
      </motion.div>
    </div>
  )
}

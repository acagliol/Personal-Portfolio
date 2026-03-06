"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

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

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }
const slideIn = { hidden: { opacity: 0, x: -48 }, show: { opacity: 1, x: 0, transition: { type: "spring", damping: 24 } } }
const slideUp = { hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0, transition: { type: "spring", damping: 22 } } }

export default function ProjectsPage() {
  return (
    <motion.div
      className="space-y-8"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div>
        <motion.p
          variants={slideUp}
          className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/45"
        >
          Builds
        </motion.p>
        <motion.h1
          variants={slideUp}
          className="mt-2 font-mono text-3xl font-semibold uppercase tracking-tight text-[#f5f1e8] sm:text-4xl"
        >
          Projects
        </motion.h1>
        <motion.p
          variants={slideUp}
          className="mt-2 max-w-2xl font-mono text-xs text-white/50"
        >
          Options pricing, Monte Carlo, portfolio optimization (Helios). ML forecasts, C++ technicals, FastAPI (AlphaSignal).
        </motion.p>
      </div>

      <div className="space-y-6">
        {projects.map((proj) => (
          <motion.div key={proj.slug} variants={slideUp}>
            <Card className="border-white/10 bg-[#0a0a0a]/80 transition-all hover:border-white/20">
              <CardHeader className="gap-2">
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="font-mono text-sm uppercase tracking-tight text-white/90">
                    {proj.title}
                  </CardTitle>
                  <a
                    href={proj.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white/80"
                  >
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
                <CardDescription className="font-mono text-[10px] text-white/45">
                  {proj.stack} · {proj.period}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 font-mono text-xs leading-7 text-white/55">
                {proj.bullets.map((b) => (
                  <p key={b}>• {b}</p>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.p variants={slideUp} className="font-mono text-[10px] text-white/35">
        More on <Link href="/resume" className="text-white/75 underline hover:no-underline">Resume</Link> and <a href="https://github.com/acagliol" target="_blank" rel="noopener noreferrer" className="text-white/75 underline hover:no-underline">GitHub</a>.
      </motion.p>
    </motion.div>
  )
}

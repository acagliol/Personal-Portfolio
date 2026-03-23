"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedWords } from "@/components/animated-text"
import { ArrowUpRight } from "lucide-react"

const experience = [
  {
    company: "General Motors Financial",
    role: "Software Engineer Intern",
    period: "Incoming May 2026",
    location: "Arlington, TX",
    bullets: [
      "Incoming Software Engineer Intern for Summer 2026.",
    ],
  },
  {
    company: "Ceptrum Labs",
    role: "Solution Consultant",
    period: "Mar 2026 – Present",
    location: "San Francisco, CA",
    bullets: [
      "Partnered with carrier teams to uncover network troubleshooting pain points and align Neuraltap's AI platform to customer needs.",
      "Led demos and pilots with founder and engineering, tailoring solutions to vendor environments and driving adoption.",
    ],
  },
  {
    company: "Automated Consultancy Services",
    role: "Founding Engineer",
    period: "Jan 2025 – Present",
    location: "Indianapolis, IN",
    bullets: [
      "AI-powered lead routing with sub-5-min response times; 80% reduction in manual review (Together AI, EV scoring).",
      "Fine-tuned LLM pipeline for 26K+ conversations; automated email responses and LCP engagement.",
      "Microservices on GCP (Cloud Functions, Firestore, Pub/Sub); webhooks from Google Ads, Meta, IDX; real-time lead scoring.",
      "Stripe billing: usage-based metering, subscriptions, invoicing, multi-tier pricing.",
      "Zero-downtime AWS→GCP migration (Terraform, Cloud Build CI/CD); ~25% infra cost reduction.",
    ],
  },
  {
    company: "Vertikal X",
    role: "Software Engineer Intern",
    period: "May – Aug 2025",
    location: "Austin, TX",
    bullets: [
      "Redesigned competition results workflow (GraphQL, TypeORM); 33% faster result processing.",
      "Video upload for campaign wizard (auto-save, i18next); 75% higher campaign completion.",
      "Server-side GraphQL resolvers for search; 57% lower query latency.",
    ],
  },
  {
    company: "Mesh Verify",
    role: "Product Engineer Intern",
    period: "Jun – Aug 2023",
    location: "Austin, TX",
    bullets: [
      "Customer feedback tool for B2B KYB platform; +20% satisfaction, +15% retention over 6 months.",
      "Competitive research (entity types, EIN, DBA, state registrations); CIP/AML, beneficial ownership, audit trail backlog.",
    ],
  },
]

const education = [
  {
    school: "Purdue University",
    degree: "B.S. Computer Science, Minor in Finance and Economics",
    period: "Expected May 2027",
    location: "West Lafayette, IN",
    gpa: "GPA 3.45/4.0",
    clubs: "Purdue Powerlifting, Sailing, Startup Club",
  },
  {
    school: "Bocconi University",
    degree: "Study Abroad in Finance and Quantitative Methods",
    period: "Aug – Dec 2026",
    location: "Milan, Italy",
    gpa: "",
    clubs: "Futbol Club, Golf Club, Entrepreneurship Club, Trading Club",
  },
]

const projects = [
  {
    name: "WARNSignal",
    tech: "Python, FastAPI, PostgreSQL, Next.js, SciPy, statsmodels",
    period: "Mar 2026",
    bullets: [
      "Event study on 4,284 WARN Act mass layoff filings across 9 states; built web scrapers for state government sites with entity resolution matching company names to 1,067 public tickers (85% confidence threshold, SEC EDGAR fallback).",
      "Calculated cumulative abnormal returns (CAR) using market model estimation; discovered signal inversion: stocks average +2.71% at 30 days post-filing (t=8.44, p<0.0001) instead of predicted decline.",
      "Ran backtest with -99% total return proving WARN filings are lagging indicators; confirmed semi-strong market efficiency through sub-sample analysis across sectors and market caps.",
      "Built full pipeline: scraping, entity resolution, price fetching, event studies, backtesting; 42 pytest tests, research report with charts, one-page PDF memo.",
    ],
  },
  {
    name: "Helios Quantitative Research Platform",
    tech: "Python, QuantLib, NumPy, SciPy, Next.js, TypeScript",
    period: "Oct 2025 – Present",
    bullets: [
      "Options pricing library: Black-Scholes, Heston stochastic volatility (calibrated to 250+ SPY strikes, 0.8 vol RMSE), exotic derivatives.",
      "Monte Carlo engine: 1M paths in 33ms, 8.1x variance reduction via control variates.",
      "Portfolio optimization: Markowitz, risk parity, CVaR with Next.js frontend; validated against QuantLib (<0.001% error).",
    ],
  },
  {
    name: "AlphaSignal - Alternative Data Platform",
    tech: "Python, FastAPI, XGBoost, C++, PostgreSQL, Next.js",
    period: "Aug 2025 – Present",
    bullets: [
      "XGBoost stock direction classifier: 53.7% accuracy (AUC: 0.586) on 230-day AAPL dataset with time-series CV; backtested +18.1% returns.",
      "Engineered 31 technical/momentum features with strict look-ahead bias prevention.",
      "Accelerated RSI/MACD 15-20x via C++ (pybind11); FastAPI + PostgreSQL backend with Next.js dashboard; Fama-French 3-factor attribution.",
    ],
  },
]

const skills = [
  "Python",
  "C++",
  "TypeScript",
  "FastAPI",
  "React",
  "Next.js",
  "GCP",
  "AWS",
  "Terraform",
  "PostgreSQL",
  "XGBoost",
  "QuantLib",
]

export default function ResumePage() {
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
            Background
          </motion.p>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <AnimatedWords
              text="Resume"
              className="font-cinzel block mb-4"
              staggerDelay={0.15}
              initialDelay={0.4}
            />
            <motion.span
              className="block font-allura text-4xl sm:text-5xl md:text-6xl text-foreground/80 normal-case"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(16px)" }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Experience & Education
            </motion.span>
          </motion.h1>

          <motion.div
            className="flex flex-wrap items-center gap-4 text-[15px] font-light text-muted-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <span>Alejo Francisco Cagliolo</span>
            <span className="text-white/20">·</span>
            <a href="mailto:acagliol@purdue.edu" className="hover:text-foreground transition-colors">
              acagliol@purdue.edu
            </a>
            <span className="text-white/20">·</span>
            <a href="https://github.com/acagliol" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              GitHub
            </a>
            <span className="text-white/20">·</span>
            <a href="https://www.linkedin.com/in/alejo-cagliolo/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Education section */}
      <section>
        <motion.h2
          className="font-cinzel text-3xl font-light tracking-wide mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h2>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="card-tilt border-white/[0.08] bg-card/70 backdrop-blur-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bebas uppercase tracking-wider mb-2">
                        {edu.school}
                      </CardTitle>
                      <p className="text-[13px] font-light text-muted-foreground">{edu.degree} · {edu.location}</p>
                    </div>
                    <span className="text-[11px] font-light uppercase tracking-[0.3em] text-muted-foreground/70">
                      {edu.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 space-y-3 text-[13px] font-light text-muted-foreground">
                  {edu.gpa && <p>{edu.gpa}</p>}
                  <p>Activities: {edu.clubs}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience section */}
      <section>
        <motion.h2
          className="font-cinzel text-3xl font-light tracking-wide mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
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
                  transition={{ duration: 1.2, delay: idx * 0.15 + 0.4 }}
                />

                <CardHeader className="gap-3 relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <motion.h3
                        className="text-2xl font-bebas uppercase tracking-wider text-foreground/95 group-hover:text-foreground mb-2"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.15 + 0.5 }}
                      >
                        {exp.company}
                      </motion.h3>
                      <p className="text-[13px] font-light text-muted-foreground">
                        {exp.role} · {exp.location}
                      </p>
                    </div>
                    <span className="text-[11px] font-light uppercase tracking-[0.3em] text-muted-foreground/70 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3 text-[13px] font-light leading-relaxed text-muted-foreground relative z-10">
                  {exp.bullets.map((bullet, i) => (
                    <motion.div
                      key={i}
                      className="flex gap-3 items-start"
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        duration: 0.8,
                        delay: idx * 0.15 + 0.6 + i * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <span className="text-foreground/40 mt-1">•</span>
                      <p className="flex-1">{bullet}</p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects section */}
      <section>
        <motion.h2
          className="font-cinzel text-3xl font-light tracking-wide mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="card-tilt group border-white/[0.08] bg-card/70 backdrop-blur-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <motion.div
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: idx * 0.15 + 0.4 }}
                />

                <CardHeader className="gap-3 relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <motion.h3
                        className="text-2xl font-bebas uppercase tracking-wider text-foreground/95 group-hover:text-foreground mb-2"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.15 + 0.5 }}
                      >
                        {project.name}
                      </motion.h3>
                      <p className="text-[13px] font-light text-muted-foreground">
                        {project.tech}
                      </p>
                    </div>
                    <span className="text-[11px] font-light uppercase tracking-[0.3em] text-muted-foreground/70 whitespace-nowrap">
                      {project.period}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3 text-[13px] font-light leading-relaxed text-muted-foreground relative z-10">
                  {project.bullets.map((bullet, i) => (
                    <motion.div
                      key={i}
                      className="flex gap-3 items-start"
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, delay: idx * 0.15 + 0.6 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <span className="text-foreground/40 mt-1">•</span>
                      <p className="flex-1">{bullet}</p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills section */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="font-cinzel text-3xl font-light tracking-wide mb-12">Skills & Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Card className="card-hover group border-white/[0.08] bg-card/60 backdrop-blur-sm h-full">
                <CardContent className="pt-6 pb-6 text-center">
                  <span className="text-[13px] font-light tracking-tight">{skill}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.div
        className="pt-12 text-center flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <p className="font-light text-[13px] text-muted-foreground/70">
          Full projects on{" "}
          <a
            href="https://github.com/acagliol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/90 underline decoration-white/20 hover:decoration-foreground/60 transition-all inline-flex items-center gap-1"
          >
            GitHub
            <ArrowUpRight className="size-3" />
          </a>
        </p>
      </motion.div>
    </div>
  )
}

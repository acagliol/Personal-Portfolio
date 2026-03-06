"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedWords } from "@/components/animated-text"
import { ArrowUpRight } from "lucide-react"

const experience = [
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

const education = {
  school: "Purdue University",
  degree: "B.S. Computer Science, Minor in Finance and Economics",
  period: "Expected May 2027",
  gpa: "GPA 3.45/4.0",
  clubs: "Purdue Powerlifting, Sailing, Startup Club",
}

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
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="font-cinzel text-3xl font-light tracking-wide mb-8">Education</h2>
        <Card className="card-tilt border-white/[0.08] bg-card/70 backdrop-blur-sm overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
          <CardHeader className="relative z-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <CardTitle className="text-2xl font-bebas uppercase tracking-wider mb-2">
                  {education.school}
                </CardTitle>
                <p className="text-[13px] font-light text-muted-foreground">{education.degree}</p>
              </div>
              <span className="text-[11px] font-light uppercase tracking-[0.3em] text-muted-foreground/70">
                {education.period}
              </span>
            </div>
          </CardHeader>
          <CardContent className="relative z-10 space-y-3 text-[13px] font-light text-muted-foreground">
            <p>{education.gpa}</p>
            <p>Activities: {education.clubs}</p>
          </CardContent>
        </Card>
      </motion.section>

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

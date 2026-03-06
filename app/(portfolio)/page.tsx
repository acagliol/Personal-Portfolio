"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedWords, AnimatedChars } from "@/components/animated-text"
import { useRef } from "react"
import { blogPosts } from "@/lib/blog-posts"

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
  {
    title: "Blogs",
    detail: "Technical writing on quant systems, ML pipelines, and product engineering decisions.",
    href: "/blogs",
  },
]

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  return (
    <div className="space-y-32 md:space-y-40 cinematic-bg relative">
      {/* MORE Moving decorative elements */}
      <motion.div
        className="fixed top-1/4 right-1/3 w-px h-64 bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none"
        animate={{
          y: [0, 40, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed bottom-1/3 left-1/4 w-px h-48 bg-gradient-to-t from-white/10 via-white/5 to-transparent pointer-events-none"
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="fixed top-1/2 left-1/2 w-[800px] h-[800px] rounded-full bg-white/[0.015] blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          x: [-100, 100, -100],
          y: [-50, 50, -50],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dramatic Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
      >
        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 h-px w-48 bg-white/10"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.4 }}
          transition={{ duration: 2, delay: 1 }}
          style={{ transformOrigin: "left" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 h-px w-32 bg-white/10"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 1.3 }}
          style={{ transformOrigin: "right" }}
        />

        {/* Ambient floating glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          {/* Small label */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span
              className="inline-block px-4 py-2 border border-white/10 text-[10px] font-extralight uppercase tracking-[0.4em] text-muted-foreground"
              whileHover={{ borderColor: "rgba(255,255,255,0.2)", scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Portfolio 2026
            </motion.span>
          </motion.div>

          {/* Main name - HUGE and thin/cinematic */}
          <motion.h1
            className="text-7xl sm:text-8xl md:text-9xl tracking-tight mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <motion.span
              className="block font-display font-extralight tracking-[0.2em] mb-4 uppercase"
              initial={{ opacity: 0, y: 80, filter: "blur(20px)" }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Alejo
            </motion.span>
            <motion.span
              className="block font-display text-6xl sm:text-7xl md:text-8xl font-light tracking-[0.15em] text-foreground/90 uppercase"
              initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Francisco
            </motion.span>
            <motion.span
              className="block font-display text-5xl sm:text-6xl md:text-7xl font-light text-foreground/85 normal-case tracking-wide"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Cagliolo
            </motion.span>
          </motion.h1>

          {/* Subtitle with animated chars */}
          <motion.div
            className="flex flex-col items-center gap-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
          >
            <AnimatedChars
              text="CS + Finance · Builder · Systems Thinker"
              className="text-xl sm:text-2xl font-light tracking-wide"
              staggerDelay={0.02}
              initialDelay={2.6}
            />

            <motion.div
              className="h-px w-64 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 3.2 }}
            />

            <motion.p
              className="max-w-2xl text-[15px] font-light leading-relaxed text-muted-foreground/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.6 }}
            >
              Purdue CS (May 2027). Founding Engineer @ ACS. Building quantitative systems, ML infrastructure, and premium interfaces.
            </motion.p>
          </motion.div>

          {/* CTA Buttons — animated hover */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4 }}
          >
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button asChild size="lg" className="text-[13px] font-light tracking-wide px-8">
                <Link href="/projects">View Projects</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button asChild size="lg" variant="inverse" className="text-[13px] font-light tracking-wide px-8">
                <Link href="/links">Connect</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 4.5 }}
        >
          <span className="text-[9px] font-light uppercase tracking-[0.4em] text-muted-foreground/60">
            Scroll
          </span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.section>

      {/* Stats Cards with dramatic hover */}
      <section className="grid gap-8 lg:grid-cols-3">
        {[
          {
            label: "Focus",
            value: "Quantitative Systems & ML Infrastructure",
            delay: 0.1,
          },
          {
            label: "Current Work",
            value: "ACS · Helios · AlphaSignal",
            delay: 0.2,
          },
          {
            label: "Philosophy",
            value: "Premium Design · Strong Systems · Ship Fast",
            delay: 0.3,
          },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 80, filter: "blur(16px)" }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="card-tilt card-float group h-full border-white/[0.08] bg-card/80 backdrop-blur-sm overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <CardHeader className="relative z-10">
                <motion.span
                  className="text-[10px] font-light uppercase tracking-[0.4em] text-muted-foreground/70 mb-4 block"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: item.delay + 0.3 }}
                >
                  {item.label}
                </motion.span>
                <CardTitle className="text-xl font-light leading-relaxed tracking-tight">
                  {item.value}
                </CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Stack section with staggered items */}
      <section>
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[11px] font-light uppercase tracking-[0.4em] text-muted-foreground mb-4">
            Stack
          </h2>
          <p className="font-display text-4xl sm:text-5xl font-light tracking-wide">
            Technologies & Tools
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {toolbox.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 60, rotateX: 12 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -3 }}
            >
              <Card className="card-hover group border-white/[0.08] bg-card/60 backdrop-blur-sm h-full">
                <CardContent className="pt-6 flex items-center justify-between">
                  <span className="text-[13px] font-light tracking-tight">{tech}</span>
                  <motion.span
                    className="size-2 rounded-full bg-foreground/40 group-hover:bg-foreground"
                    whileHover={{ scale: 1.8, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline preview cards */}
      <section>
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[11px] font-light uppercase tracking-[0.4em] text-muted-foreground mb-4">
            Overview
          </h2>
          <p className="font-display text-4xl sm:text-5xl font-light tracking-wide">
            Recent Work
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {timeline.map((entry, index) => (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, y: 100, scale: 0.96 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
            >
              <Link href={entry.href}>
                <Card className="card-tilt group h-full border-white/[0.08] bg-card/70 backdrop-blur-sm overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-lg font-light tracking-tight mb-4 group-hover:text-foreground transition-colors">
                      {entry.title}
                    </CardTitle>
                    <p className="text-[13px] font-light leading-relaxed text-muted-foreground">
                      {entry.detail}
                    </p>
                    <motion.p
                      className="mt-6 text-[11px] font-light tracking-[0.3em] text-muted-foreground/70 group-hover:text-muted-foreground"
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.25 }}
                    >
                      View →
                    </motion.p>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[11px] font-light uppercase tracking-[0.4em] text-muted-foreground mb-4">
            Writing
          </h2>
          <p className="font-display text-4xl sm:text-5xl font-light tracking-wide">
            Latest blogs
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {blogPosts.slice(0, 2).map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 80, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
            >
              <Link href={post.href ?? `/blogs/${post.slug}`} className="block">
                <Card className="card-tilt group h-full border-white/[0.08] bg-card/70 backdrop-blur-sm overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <CardHeader className="relative z-10">
                    <p className="text-[10px] font-light uppercase tracking-[0.35em] text-muted-foreground/70">
                      {post.displayDate} / {post.readTime}
                    </p>
                    <CardTitle className="text-2xl font-light tracking-tight">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-[14px] font-light leading-relaxed text-muted-foreground">
                      {post.summary}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button asChild variant="inverse" className="font-light tracking-wide">
            <Link href="/blogs">Read all blogs</Link>
          </Button>
        </motion.div>
      </section>

      {/* Final CTA */}
      <motion.section
        className="py-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="font-display text-5xl sm:text-6xl mb-12 font-light tracking-wide"
          initial={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
          whileInView={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Let's build something
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Button asChild size="lg" variant="default" className="font-light tracking-wide">
              <Link href="/links">Get in touch</Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Button asChild size="lg" variant="inverse" className="font-light tracking-wide">
              <Link href="/resume">See resume</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}

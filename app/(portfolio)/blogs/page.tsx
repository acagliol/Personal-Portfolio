"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedWords } from "@/components/animated-text"
import { blogPosts } from "@/lib/blog-posts"

export default function BlogsPage() {
  return (
    <div className="space-y-20 md:space-y-28">
      <div className="relative">
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
            Writing
          </motion.p>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <AnimatedWords
              text="Blogs"
              className="font-display block mb-4"
              staggerDelay={0.15}
              initialDelay={0.4}
            />
            <motion.span
              className="block font-display text-4xl sm:text-5xl md:text-6xl font-light text-foreground/80 normal-case tracking-wide"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(16px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Engineering, markets, and product thinking
            </motion.span>
          </motion.h1>

          <motion.p
            className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            Brief essays on the systems I build, from pricing infrastructure and ML workflows to
            performance-focused product design.
          </motion.p>
        </motion.div>
      </div>

      <div className="space-y-6">
        {blogPosts.map((post, idx) => {
          const postHref = post.href ?? `/blogs/${post.slug}`
          return (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 80, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
            >
              <Link href={postHref} className="block">
                <Card className="card-tilt group border-white/[0.08] bg-card/70 backdrop-blur-sm overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <CardHeader className="relative z-10">
                    <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
                      <span>{post.displayDate}</span>
                      <span className="text-white/20">/</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-2xl font-light tracking-tight group-hover:text-foreground transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 flex items-end justify-between gap-6">
                    <p className="max-w-3xl text-[14px] leading-relaxed text-muted-foreground">
                      {post.summary}
                    </p>
                    <div className="flex-shrink-0 rounded-lg border border-white/[0.08] p-3 text-muted-foreground transition-colors group-hover:text-foreground">
                      <ArrowUpRight className="size-5" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

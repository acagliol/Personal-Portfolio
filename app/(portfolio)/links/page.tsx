"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const links = [
  { label: "GitHub", href: "https://github.com/acagliol", status: "acagliol" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alejo-cagliolo/", status: "alejo-cagliolo" },
  { label: "X", href: "https://x.com/alejo_cagliolo", status: "@alejo_cagliolo" },
  { label: "Email", href: "mailto:acagliol@purdue.edu", status: "acagliol@purdue.edu" },
]

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }
const slideIn = { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { type: "spring", damping: 24 } } }
const slideUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { type: "spring", damping: 22 } } }

export default function LinksPage() {
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
          Network
        </motion.p>
        <motion.h1
          variants={slideUp}
          className="mt-2 font-mono text-3xl font-semibold uppercase tracking-tight text-[#f5f1e8] sm:text-4xl"
        >
          Connect
        </motion.h1>
        <motion.p
          variants={slideUp}
          className="mt-2 font-mono text-xs text-white/50"
        >
          All links open in a new tab. Hover for handles; click to go.
        </motion.p>
      </div>

      <TooltipProvider delayDuration={80}>
        <div className="grid gap-4 md:grid-cols-2">
          {links.map((link, i) => (
            <motion.div key={link.label} variants={slideUp}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="group border-white/10 bg-[#0a0a0a]/80 transition-all hover:-translate-y-0.5 hover:border-white/20">
                      <CardContent className="flex items-center justify-between gap-4 pt-6">
                        <div className="space-y-2">
                          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">
                            {link.status}
                          </p>
                          <p className="font-mono text-lg font-semibold uppercase tracking-widest text-[#f5f1e8] group-hover:text-white">
                            {link.label}
                          </p>
                        </div>
                        <ArrowUpRight className="size-5 text-white/40 group-hover:text-white" />
                      </CardContent>
                    </Card>
                  </a>
                </TooltipTrigger>
                <TooltipContent className="border-white/10 bg-[#0a0a0a] font-mono text-xs">
                  {link.status}
                </TooltipContent>
              </Tooltip>
            </motion.div>
          ))}
        </div>
      </TooltipProvider>
    </motion.div>
  )
}

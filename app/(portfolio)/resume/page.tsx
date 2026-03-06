"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }
const slideIn = { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0, transition: { type: "spring", damping: 24 } } }
const slideUp = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { type: "spring", damping: 22 } } }

export default function ResumePage() {
  return (
    <motion.div
      className="space-y-6"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <Card className="border-white/10 bg-[#0a0a0a]/80">
        <CardHeader className="gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <motion.span
              variants={slideIn}
              className="inline-block border border-white/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.3em] text-[#666]"
            >
              resume
            </motion.span>
            <div className="space-y-2">
              <CardTitle className="font-mono text-2xl uppercase tracking-tight text-[#f5f1e8] sm:text-3xl">
                Alejo Francisco Cagliolo
              </CardTitle>
              <CardDescription className="max-w-2xl font-mono text-xs text-[#666]">
                acagliol@purdue.edu · (425) 362-9496 · Austin, TX · Purdue CS + Finance & Economics, May 2027 · GPA 3.45/4.0
              </CardDescription>
            </div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-white/15 font-mono text-[10px] uppercase tracking-widest">
                <FileText className="mr-2 size-3" />
                Quick contact
              </Button>
            </DialogTrigger>
            <DialogContent className="border-white/10 bg-[#0a0a0a]">
              <DialogHeader>
                <DialogTitle className="font-mono text-white/90">Contact</DialogTitle>
                <DialogDescription className="font-mono text-[#666]">
                  GitHub, LinkedIn, X, and email are in the Links section.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3 border border-white/10 p-4 font-mono text-xs">
                  <p className="text-[#f5f1e8]">Alejo Francisco Cagliolo</p>
                  <p className="text-[#888]">acagliol@purdue.edu</p>
                  <p className="text-[#888]">(425) 362-9496 · Austin, TX</p>
                  <p className="text-[#666]">github.com/acagliol · linkedin.com/in/alejo-cagliolo</p>
                </div>
                <div className="space-y-3 border border-white/10 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#555]">Links</p>
                  <a href="https://github.com/acagliol" className="block text-white/90 underline hover:no-underline">GitHub</a>
                  <a href="https://www.linkedin.com/in/alejo-cagliolo/" className="block text-white/90 underline hover:no-underline">LinkedIn</a>
                  <a href="https://x.com/alejo_cagliolo" className="block text-white/90 underline hover:no-underline">X</a>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardHeader>
      </Card>

      <Tabs defaultValue="snapshot" className="space-y-6">
        <TabsList className="inline-flex w-full max-w-full border border-white/10 bg-[#0a0a0a] p-1 font-mono">
          <TabsTrigger value="snapshot" className="font-mono text-[10px] uppercase data-[state=active]:bg-white/15 data-[state=active]:text-[#f5f1e8]">
            Snapshot
          </TabsTrigger>
          <TabsTrigger value="highlights" className="font-mono text-[10px] uppercase data-[state=active]:bg-white/15 data-[state=active]:text-[#f5f1e8]">
            Highlights
          </TabsTrigger>
          <TabsTrigger value="coursework" className="font-mono text-[10px] uppercase data-[state=active]:bg-white/15 data-[state=active]:text-[#f5f1e8]">
            Coursework
          </TabsTrigger>
        </TabsList>

        <TabsContent value="snapshot">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="border-white/10 bg-[#0a0a0a]/80">
              <CardHeader>
                <CardTitle className="font-mono text-xs uppercase tracking-widest text-[#f5f1e8]">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-mono text-xs text-[#888]">
                <div className="border-b border-white/5 pb-3">
                  <span className="text-[#f5f1e8]">Purdue University</span> — Expected May 2027
                </div>
                <div className="border-b border-white/5 pb-3">
                  B.S. Computer Science, Minor in Finance and Economics · GPA 3.45/4.0
                </div>
                <div>Clubs: Purdue Powerlifting, Sailing, Startup Club</div>
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-[#0a0a0a]/80">
              <CardHeader>
                <CardTitle className="font-mono text-xs uppercase tracking-widest text-[#f5f1e8]">Certification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 font-mono text-xs">
                <span className="inline-block border border-white/15 px-2 py-1 text-[10px] uppercase text-[#666]">
                  Google Project Management Certificate · Jul 2025
                </span>
                <p className="text-[#666]">Skills: Python, C++, TypeScript, FastAPI, React, Next.js, GCP, AWS, Terraform, PostgreSQL, XGBoost, QuantLib</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="highlights">
          <div className="space-y-6">
            {[
              {
                title: "Automated Consultancy Services · Founding Engineer · Jan 2025 – Present",
                loc: "Indianapolis, IN",
                bullets: [
                  "AI-powered lead routing with sub-5-min response times; 80% reduction in manual review (Together AI, EV scoring).",
                  "Fine-tuned LLM pipeline for 26K+ conversations; automated email responses and LCP engagement.",
                  "Microservices on GCP (Cloud Functions, Firestore, Pub/Sub); webhooks from Google Ads, Meta, IDX; real-time lead scoring.",
                  "Stripe billing: usage-based metering, subscriptions, invoicing, multi-tier pricing.",
                  "Zero-downtime AWS→GCP migration (Terraform, Cloud Build CI/CD); ~25% infra cost reduction.",
                ],
              },
              {
                title: "Vertikal X · Software Engineer Intern · May – Aug 2025",
                loc: "Austin, TX",
                bullets: [
                  "Redesigned competition results workflow (GraphQL, TypeORM); 33% faster result processing.",
                  "Video upload for campaign wizard (auto-save, i18next); 75% higher campaign completion.",
                  "Server-side GraphQL resolvers for search; 57% lower query latency.",
                ],
              },
              {
                title: "Mesh Verify · Product Engineer Intern · Jun – Aug 2023",
                loc: "Austin, TX",
                bullets: [
                  "Customer feedback tool for B2B KYB platform; +20% satisfaction, +15% retention over 6 months.",
                  "Competitive research (entity types, EIN, DBA, state registrations); CIP/AML, beneficial ownership, audit trail backlog.",
                ],
              },
              {
                title: "Projects",
                loc: "",
                bullets: [
                  "Helios (Python, NumPy, SciPy, QuantLib, Next.js) — Black-Scholes, Heston (250+ SPY strikes, 0.8 vol RMSE), exotic derivatives; Monte Carlo 1M paths in 33ms, 8.1x variance reduction; Markowitz, risk parity, CVaR; QuantLib validation <0.001% error.",
                  "AlphaSignal (Python, FastAPI, XGBoost, C++, PostgreSQL) — XGBoost direction classifier, 53.7% accuracy (AUC 0.586), +18.1% backtest; 31 technical/momentum features; C++ RSI/MACD 15–20x faster (pybind11); Fama-French 3-factor attribution.",
                ],
              },
            ].map((block, i) => (
              <motion.div key={block.title} variants={slideIn}>
                <Card className="border-white/10 bg-[#0a0a0a]/80">
                  <CardHeader>
                    <CardTitle className="font-mono text-xs uppercase tracking-tight text-white/90">
                      {block.title}
                    </CardTitle>
                    {block.loc && (
                      <CardDescription className="font-mono text-[10px] text-[#555]">{block.loc}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-2 font-mono text-xs leading-7 text-[#888]">
                    {block.bullets.map((b) => (
                      <p key={b}>• {b}</p>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="coursework">
          <Card className="border-white/10 bg-[#0a0a0a]/80">
            <CardHeader>
              <CardTitle className="font-mono text-xs uppercase tracking-widest text-[#f5f1e8]">Relevant Coursework</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {["Data Structures & Algorithms", "Computer Architecture", "Linear Algebra", "Discrete Mathematics"].map((c) => (
                <motion.div
                  key={c}
                  variants={slideIn}
                  className="border border-white/10 p-4 font-mono text-[10px] uppercase tracking-widest text-[#aaa]"
                >
                  {c}
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}

"use client"

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import {
  ArrowUpRight,
  ChevronDown,
  FileText,
  Layers3,
  Link2,
  Menu,
  Sparkles,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

type ViewKey = "home" | "resume" | "links" | "notes"
type ResumeTab = "snapshot" | "highlights" | "coursework"

type NavItem = {
  key: ViewKey
  label: string
  kicker: string
}

const navItems: NavItem[] = [
  { key: "home", label: "Home", kicker: "intro" },
  { key: "resume", label: "Resume", kicker: "experience" },
  { key: "links", label: "Links", kicker: "network" },
  { key: "notes", label: "Notes", kicker: "process" },
]

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
  },
  {
    title: "Experience",
    detail: "Founding Engineer @ Automated Consultancy Services. SWE intern @ Vertikal X. Product Engineer @ Mesh Verify.",
  },
  {
    title: "Coursework",
    detail: "Data Structures & Algorithms, Computer Architecture, Linear Algebra, Discrete Mathematics.",
  },
]

const linkPlaceholders = [
  { label: "GitHub", href: "https://github.com/acagliol", status: "acagliol" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alejo-cagliolo/", status: "alejo-cagliolo" },
  { label: "X", href: "https://x.com/alejo_cagliolo", status: "@alejo_cagliolo" },
  { label: "Email", href: "mailto:acagliol@purdue.edu", status: "acagliol@purdue.edu" },
]

function useIndicator(activeKey: string, deps: unknown[] = []) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    const active = container.querySelector<HTMLElement>(`[data-indicator-key="${activeKey}"]`)
    if (!active) return

    const containerBox = container.getBoundingClientRect()
    const activeBox = active.getBoundingClientRect()

    container.style.setProperty("--indicator-left", `${activeBox.left - containerBox.left}px`)
    container.style.setProperty("--indicator-width", `${activeBox.width}px`)
  }, [activeKey, ...deps])

  return containerRef
}

function MotionNav({
  active,
  onChange,
  mobile = false,
}: {
  active: ViewKey
  onChange: (key: ViewKey) => void
  mobile?: boolean
}) {
  const ref = useIndicator(active, [mobile])

  return (
    <div
      ref={ref}
      className={cn(
        "relative border border-border bg-card/70 p-1",
        mobile ? "grid gap-1" : "flex items-center gap-1"
      )}
    >
      <span className="nav-indicator absolute bottom-1 left-0 top-1 bg-foreground" aria-hidden />
      {navItems.map((item) => (
        <button
          key={item.key}
          data-indicator-key={item.key}
          onClick={() => onChange(item.key)}
          className={cn(
            "interactive-press relative z-10 flex min-w-28 flex-col items-start px-4 py-3 text-left uppercase transition-colors duration-200 ease-out",
            mobile && "min-w-0",
            active === item.key ? "text-background" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <span className="text-[10px] tracking-[0.3em]">{item.kicker}</span>
          <span className="text-sm font-semibold tracking-[0.18em]">{item.label}</span>
        </button>
      ))}
    </div>
  )
}

function ViewFrame({
  view,
  direction,
}: {
  view: ViewKey
  direction: 1 | -1
}) {
  const className = direction === 1 ? "view-forward" : "view-backward"

  return (
    <div key={view} className={cn("min-h-[60svh]", className)}>
      {view === "home" && <HomeView />}
      {view === "resume" && <ResumeView />}
      {view === "links" && <LinksView />}
      {view === "notes" && <NotesView />}
    </div>
  )
}

function HomeView() {
  return (
    <div className="space-y-6">
      <section className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
        <Card className="grain-overlay min-h-[28rem] [--stagger:40ms]">
          <CardHeader className="flex h-full flex-col justify-between gap-10">
            <div className="space-y-6">
              <Badge variant="default" className="w-fit">
                cs + finance / builder
              </Badge>
              <div className="section-parallax space-y-5">
                <p className="text-[12px] uppercase tracking-[0.34em] text-muted-foreground">
                  Alejo Francisco Cagliolo / Purdue CS + Finance / 2026
                </p>
                <h1 className="max-w-4xl text-5xl font-semibold uppercase leading-none tracking-[-0.05em] sm:text-6xl md:text-7xl">
                  Minimal brutalism.
                  <br />
                  Black glass.
                  <br />
                  Sharp code.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  CS student (Purdue, May 2027). Founding Engineer @ ACS. Quant (Helios), ML + C++ (AlphaSignal).
                  Strong systems thinking and a bias toward shipping.
                </p>
              </div>
            </div>

            <div className="grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
              {[
                ["Focus", "Quantitative + ML, full-stack (Python, C++, Next.js)"],
                ["Current", "Founding Engineer @ ACS · Helios · AlphaSignal"],
                ["Style", "Minimal, brutalist, motion-heavy"],
              ].map(([label, value], index) => (
                <div
                  key={label}
                  className="list-stagger-row space-y-2"
                  style={{ ["--row-delay" as string]: `${90 + index * 70}ms` }}
                >
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</p>
                  <p className="text-sm uppercase tracking-[0.16em]">{value}</p>
                </div>
              ))}
            </div>
          </CardHeader>
        </Card>

        <Card className="[--stagger:120ms]">
          <CardHeader>
            <CardTitle>Live Stack</CardTitle>
            <CardDescription>
              Python, C++, TypeScript · FastAPI, Next.js · XGBoost, QuantLib · GCP, Terraform.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {toolbox.map((item, index) => (
              <div
                key={item}
                className="list-stagger-row flex items-center justify-between border-b border-border pb-3 last:border-b-0 last:pb-0"
                style={{ ["--row-delay" as string]: `${160 + index * 70}ms` }}
              >
                <span className="text-sm uppercase tracking-[0.16em]">{item}</span>
                <span className="live-dot size-2 rounded-full bg-foreground" />
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {timeline.map((entry, index) => (
          <Card key={entry.title} className="[--stagger:200ms]">
            <CardHeader>
              <CardTitle>{entry.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p
                className="list-stagger-row text-sm leading-7 text-muted-foreground"
                style={{ ["--row-delay" as string]: `${220 + index * 80}ms` }}
              >
                {entry.detail}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}

function ResumeView() {
  const [activeTab, setActiveTab] = useState<ResumeTab>("snapshot")
  const pillRef = useIndicator(activeTab, [activeTab])

  return (
    <div className="space-y-6">
      <Card className="[--stagger:40ms]">
        <CardHeader className="gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <Badge className="w-fit">resume</Badge>
            <div className="space-y-2">
              <CardTitle className="text-3xl sm:text-4xl">Alejo Francisco Cagliolo</CardTitle>
              <CardDescription className="max-w-2xl">
                acagliol@purdue.edu · (425) 362-9496 · Austin, TX · Purdue CS + Finance & Economics, May 2027 · GPA 3.45/4.0
              </CardDescription>
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="inverse">
                <FileText className="mr-2 size-4" />
                Quick contact
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Contact</DialogTitle>
                <DialogDescription>
                  GitHub, LinkedIn, X, and email are in the Links section.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-3 border border-border p-4">
                  <p className="text-sm font-medium">Alejo Francisco Cagliolo</p>
                  <p className="text-sm text-muted-foreground">acagliol@purdue.edu</p>
                  <p className="text-sm text-muted-foreground">(425) 362-9496 · Austin, TX</p>
                  <p className="text-sm text-muted-foreground">github.com/acagliol · linkedin.com/in/alejo-cagliolo</p>
                </div>
                <div className="space-y-3 border border-border p-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Links</p>
                  <a href="https://github.com/acagliol" className="block text-sm underline">GitHub</a>
                  <a href="https://www.linkedin.com/in/alejo-cagliolo/" className="block text-sm underline">LinkedIn</a>
                  <a href="https://x.com/alejo_cagliolo" className="block text-sm underline">X</a>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardHeader>
      </Card>

      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ResumeTab)}>
        <div
          ref={pillRef}
          className="relative inline-flex w-full max-w-full overflow-x-auto border border-border bg-muted/70 p-1"
        >
          <span className="pill-indicator absolute bottom-1 left-0 top-1 bg-foreground" aria-hidden />
          <TabsList className="w-full border-0 bg-transparent p-0">
            {[
              ["snapshot", "Snapshot"],
              ["highlights", "Highlights"],
              ["coursework", "Coursework"],
            ].map(([value, label]) => (
              <TabsTrigger
                key={value}
                value={value}
                data-indicator-key={value}
                className="min-w-0 flex-1"
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="snapshot">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="[--stagger:120ms]">
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="list-stagger-row border-b border-border pb-3 text-sm leading-7 text-muted-foreground">
                  <strong className="text-foreground">Purdue University</strong> — Expected May 2027
                </div>
                <div className="list-stagger-row border-b border-border pb-3 text-sm leading-7 text-muted-foreground">
                  B.S. Computer Science, Minor in Finance and Economics · GPA 3.45/4.0
                </div>
                <div className="list-stagger-row text-sm leading-7 text-muted-foreground">
                  Clubs: Purdue Powerlifting, Sailing, Startup Club
                </div>
              </CardContent>
            </Card>
            <Card className="[--stagger:200ms]">
              <CardHeader>
                <CardTitle>Certification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Badge variant="muted" className="w-fit">
                  Google Project Management Certificate · Jul 2025
                </Badge>
                <p className="text-sm text-muted-foreground">Skills: Python, C++, TypeScript, FastAPI, React, Next.js, GCP, AWS, Terraform, PostgreSQL, XGBoost, QuantLib</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="highlights">
          <div className="space-y-6">
            <Card className="[--stagger:80ms]">
              <CardHeader>
                <CardTitle>Automated Consultancy Services · Founding Engineer · Jan 2025 – Present</CardTitle>
                <CardDescription>Indianapolis, IN</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm leading-7 text-muted-foreground">
                <p>• AI-powered lead routing with sub-5-min response times; 80% reduction in manual review (Together AI, EV scoring).</p>
                <p>• Fine-tuned LLM pipeline for 26K+ conversations; automated email responses and LCP engagement.</p>
                <p>• Microservices on GCP (Cloud Functions, Firestore, Pub/Sub); webhooks from Google Ads, Meta, IDX; real-time lead scoring.</p>
                <p>• Stripe billing: usage-based metering, subscriptions, invoicing, multi-tier pricing.</p>
                <p>• Zero-downtime AWS→GCP migration (Terraform, Cloud Build CI/CD); ~25% infra cost reduction.</p>
              </CardContent>
            </Card>
            <Card className="[--stagger:80ms]">
              <CardHeader>
                <CardTitle>Vertikal X · Software Engineer Intern · May – Aug 2025</CardTitle>
                <CardDescription>Austin, TX</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm leading-7 text-muted-foreground">
                <p>• Redesigned competition results workflow (GraphQL, TypeORM); 33% faster result processing.</p>
                <p>• Video upload for campaign wizard (auto-save, i18next); 75% higher campaign completion.</p>
                <p>• Server-side GraphQL resolvers for search; 57% lower query latency.</p>
              </CardContent>
            </Card>
            <Card className="[--stagger:80ms]">
              <CardHeader>
                <CardTitle>Mesh Verify · Product Engineer Intern · Jun – Aug 2023</CardTitle>
                <CardDescription>Austin, TX</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm leading-7 text-muted-foreground">
                <p>• Customer feedback tool for B2B KYB platform; +20% satisfaction, +15% retention over 6 months.</p>
                <p>• Competitive research (entity types, EIN, DBA, state registrations); CIP/AML, beneficial ownership, audit trail backlog.</p>
              </CardContent>
            </Card>
            <Card className="[--stagger:80ms]">
              <CardHeader>
                <CardTitle>Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-7 text-muted-foreground">
                <p><strong className="text-foreground">Helios</strong> (Python, NumPy, SciPy, QuantLib, Next.js) — Black-Scholes, Heston (250+ SPY strikes, 0.8 vol RMSE), exotic derivatives; Monte Carlo 1M paths in 33ms, 8.1x variance reduction; Markowitz, risk parity, CVaR; QuantLib validation &lt;0.001% error.</p>
                <p><strong className="text-foreground">AlphaSignal</strong> (Python, FastAPI, XGBoost, C++, PostgreSQL) — XGBoost direction classifier, 53.7% accuracy (AUC 0.586), +18.1% backtest; 31 technical/momentum features; C++ RSI/MACD 15–20x faster (pybind11); Fama-French 3-factor attribution.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="coursework">
          <Card className="[--stagger:120ms]">
            <CardHeader>
              <CardTitle>Relevant Coursework</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {["Data Structures & Algorithms", "Computer Architecture", "Linear Algebra", "Discrete Mathematics"].map(
                (item, index) => (
                  <div
                    key={item}
                    className="list-stagger-row border border-border p-4 text-sm uppercase tracking-[0.16em]"
                    style={{ ["--row-delay" as string]: `${120 + index * 60}ms` }}
                  >
                    {item}
                  </div>
                )
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function LinksView() {
  return (
    <div className="space-y-6">
      <Card className="[--stagger:40ms]">
        <CardHeader>
          <Badge className="w-fit">connect</Badge>
          <CardTitle className="text-3xl sm:text-4xl">GitHub, LinkedIn, X, Email.</CardTitle>
          <CardDescription className="max-w-2xl">
            All links open in a new tab. Hover for handles; click to go.
          </CardDescription>
        </CardHeader>
      </Card>

      <TooltipProvider delayDuration={80}>
        <div className="grid gap-4 md:grid-cols-2">
          {linkPlaceholders.map((item) => (
            <Tooltip key={item.label}>
              <TooltipTrigger asChild>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="[--stagger:120ms] transition-transform duration-200 ease-out hover:-translate-y-1">
                    <CardContent className="flex items-center justify-between gap-4 pt-6">
                      <div className="space-y-2">
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                          {item.status}
                        </p>
                        <p className="text-xl font-semibold uppercase tracking-[0.18em]">
                          {item.label}
                        </p>
                      </div>
                      <ArrowUpRight className="size-5" />
                    </CardContent>
                  </Card>
                </a>
              </TooltipTrigger>
              <TooltipContent>{item.status}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </div>
  )
}

function NotesView() {
  const [open, setOpen] = useState(true)
  const [contactReady, setContactReady] = useState(true)
  const [showLive, setShowLive] = useState(true)

  return (
    <div className="space-y-6">
      <Card className="[--stagger:40ms]">
        <CardHeader className="gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <Badge className="w-fit">system notes</Badge>
            <CardTitle className="text-3xl sm:text-4xl">Micro-interactions are wired in.</CardTitle>
            <CardDescription className="max-w-2xl">
              This section demonstrates animated toggles, checkboxes, and collapsible content while
              keeping the same black brutalist language.
            </CardDescription>
          </div>
          <div className="flex items-center gap-3 border border-border px-4 py-3">
            <span className={cn("size-2 rounded-full bg-foreground", showLive && "live-dot")} />
            <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">live mode</span>
            <Switch checked={showLive} onCheckedChange={setShowLive} />
          </div>
        </CardHeader>
      </Card>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card className="[--stagger:120ms]">
          <CardHeader>
            <CardTitle>Checklist</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Resume section prepared", checked: true },
              { label: "External links placeholders set", checked: true },
              { label: "Contact details still to replace", checked: contactReady },
            ].map((item, index) => (
              <label
                key={item.label}
                className="list-stagger-row flex items-center gap-3 border-b border-border pb-3 text-sm uppercase tracking-[0.14em] last:border-b-0 last:pb-0"
                style={{ ["--row-delay" as string]: `${140 + index * 70}ms` }}
              >
                <Checkbox
                  checked={item.checked}
                  onCheckedChange={item.label.includes("Contact") ? (value) => setContactReady(Boolean(value)) : undefined}
                />
                <span>{item.label}</span>
              </label>
            ))}
          </CardContent>
        </Card>

        <Card className="[--stagger:200ms]">
          <CardHeader>
            <CardTitle>Expandable Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <Collapsible open={open} onOpenChange={setOpen}>
              <CollapsibleTrigger asChild>
                <button className="interactive-press flex w-full items-center justify-between border border-border px-4 py-4 text-left text-sm uppercase tracking-[0.18em]">
                  Motion rules and editing notes
                  <ChevronDown className={cn("size-4 transition-transform duration-200", open && "rotate-180")} />
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className="collapsible-body overflow-hidden border border-t-0 border-border">
                <div className="space-y-3 p-4 text-sm leading-7 text-muted-foreground">
                  <p>No harsh linear transitions. Micro interactions stay in the 150-300ms range.</p>
                  <p>Page-level swaps slide horizontally based on forward/back direction.</p>
                  <p>Everything respects reduced motion by collapsing animations to near-instant.</p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function PortfolioShell() {
  const [view, setView] = useState<ViewKey>("home")
  const [direction, setDirection] = useState<1 | -1>(1)
  const [scrollShift, setScrollShift] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollShift(window.scrollY)

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const viewIndex = useMemo(() => navItems.findIndex((item) => item.key === view), [view])

  const changeView = (next: ViewKey) => {
    if (next === view) return

    const nextIndex = navItems.findIndex((item) => item.key === next)
    setDirection(nextIndex > viewIndex ? 1 : -1)
    setView(next)
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto flex min-h-screen w-full max-w-[1680px] flex-col px-4 py-4 md:px-6 lg:flex-row lg:gap-6 lg:px-8">
        <aside className="mb-4 flex-shrink-0 lg:mb-0 lg:w-[26rem]">
          <div className="sticky top-4 space-y-4 transition-[width,transform] duration-300 ease-out">
            <Card className="grain-overlay [--stagger:0ms]">
              <CardHeader className="space-y-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">Alejo</p>
                    <h2 className="text-3xl font-semibold uppercase tracking-[-0.04em] sm:text-4xl">
                      cs + finance
                    </h2>
                  </div>

                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="sm" className="lg:hidden">
                        <Menu className="size-4" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                      <SheetHeader>
                        <SheetTitle>Navigate</SheetTitle>
                        <SheetDescription>
                          Mobile drawer with the same anchored navigation state.
                        </SheetDescription>
                      </SheetHeader>
                      <MotionNav active={view} onChange={changeView} mobile />
                    </SheetContent>
                  </Sheet>
                </div>

                <p className="text-sm leading-7 text-muted-foreground">
                  Purdue CS · Founding Engineer @ ACS · Helios & AlphaSignal. Minimal brutalist design,
                  dark glass, intentional motion.
                </p>

                <div className="hidden lg:block">
                  <MotionNav active={view} onChange={changeView} />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="default" onClick={() => changeView("links")}>Hire / connect</Button>
                  <Button variant="inverse" onClick={() => changeView("resume")}>See resume</Button>
                </div>
              </CardHeader>
            </Card>

            <Card className="[--stagger:80ms]">
              <CardContent className="grid gap-4 pt-6 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  { icon: Sparkles, label: "Motion", value: "Premium, fast, reduced-motion safe" },
                  { icon: Layers3, label: "Layout", value: "Persistent frame with animated swaps" },
                  { icon: Link2, label: "Content", value: "Resume, projects, GitHub, LinkedIn, X" },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className="list-stagger-row flex items-start gap-3"
                    style={{ ["--row-delay" as string]: `${110 + index * 60}ms` }}
                  >
                    <item.icon className="mt-0.5 size-4" />
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm uppercase tracking-[0.14em]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </aside>

        <main className="flex-1">
          <div
            className="space-y-6"
            style={{ ["--scroll-shift" as string]: scrollShift } as React.CSSProperties}
          >
            <header className="flex flex-col gap-4 border border-border bg-card/70 px-5 py-4 backdrop-blur-sm md:flex-row md:items-center md:justify-between">
              <div className="section-parallax">
                <p className="text-[10px] uppercase tracking-[0.34em] text-muted-foreground">
                  Personal portfolio / brutalist motion / single page system
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.16em]">
                  View {String(viewIndex + 1).padStart(2, "0")} / {String(navItems.length).padStart(2, "0")}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="live-dot size-2 rounded-full bg-foreground" />
                <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">
                  transition layer active
                </p>
              </div>
            </header>

            <ViewFrame key={`${view}-${direction}`} view={view} direction={direction} />
          </div>
        </main>
      </div>
    </div>
  )
}
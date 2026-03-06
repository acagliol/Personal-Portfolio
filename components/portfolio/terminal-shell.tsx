"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Menu } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const NAV = [
  { href: "/", label: "Home", kicker: "intro" },
  { href: "/resume", label: "Resume", kicker: "experience" },
  { href: "/projects", label: "Projects", kicker: "builds" },
  { href: "/links", label: "Links", kicker: "network" },
]

const INDEX = (path: string) => NAV.findIndex((n) => n.href === path)

export function TerminalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const prevIndex = useRef(INDEX(pathname))

  useEffect(() => {
    prevIndex.current = INDEX(pathname)
  }, [pathname])

  const direction = INDEX(pathname) >= prevIndex.current ? 1 : -1
  const slideOffset = 80

  const slideTransition = {
    initial: {
      opacity: 0,
      x: direction > 0 ? slideOffset : -slideOffset,
      scale: 0.98,
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: {
      opacity: 0,
      x: direction > 0 ? -slideOffset : slideOffset,
      scale: 0.98,
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <div className="min-h-screen flex flex-col font-mono">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-md px-4 py-4">
        <div className="mx-auto flex max-w-[1680px] items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium tracking-[0.2em] text-[#f5f1e8] hover:text-white transition-colors"
          >
            Alejo
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors",
                  pathname === item.href
                    ? "text-[#f5f1e8]"
                    : "text-white/40 hover:text-white/70"
                )}
              >
                {pathname === item.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 border border-white/20 bg-white/5"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </Link>
            ))}
          </nav>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white/70">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-white/10 bg-[#0a0a0a]">
              <SheetHeader>
                <SheetTitle className="text-xs uppercase tracking-widest text-white/80">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-1">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block py-3 pl-2 text-sm tracking-widest transition-colors",
                      pathname === item.href ? "text-[#f5f1e8]" : "text-white/50 hover:text-white/80"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="relative flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={slideTransition.initial}
            animate={slideTransition.animate}
            exit={slideTransition.exit}
            className="relative mx-auto min-h-[calc(100vh-6rem)] max-w-[1680px] px-4 py-8 md:px-8 lg:px-12"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-white/10 py-3 px-4">
        <div className="mx-auto max-w-[1680px] flex justify-center">
          <span className="text-[10px] tracking-[0.3em] text-white/30">—</span>
        </div>
      </footer>
    </div>
  )
}

"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AnimatedBackground } from "@/components/animated-background"
import { pageTransitionVariants } from "@/animation/variants"

const NAV = [
  { href: "/", label: "Home" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/links", label: "Links" },
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
  const pageTransition = pageTransitionVariants(direction as 1 | -1)

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Advanced Animated Background */}
      <AnimatedBackground />

      {/* Clean minimal header */}
      <motion.header
        className="sticky top-0 z-50 border-b border-white/[0.06] bg-background/80 backdrop-blur-xl"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="group relative">
            <motion.span
              className="text-[14px] font-extralight tracking-[0.2em] uppercase text-foreground/90"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              Alejo
            </motion.span>
            <motion.span
              className="absolute -bottom-0.5 left-0 h-px bg-foreground/60 origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{ width: "100%" }}
            />
          </Link>

          {/* Desktop nav — minimal thin links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="relative py-3">
                {pathname === item.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -mx-2 rounded-sm bg-white/[0.06]"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <motion.span
                  className={cn(
                    "relative text-[12px] font-light tracking-[0.25em] uppercase transition-colors duration-300",
                    pathname === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground/80"
                  )}
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu trigger — minimal */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 p-2 text-muted-foreground hover:text-foreground transition-colors"
            whileTap={{ scale: 0.92 }}
            whileHover={{ opacity: 1 }}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="size-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="size-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* Full-screen mobile menu — clean */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden bg-background/98 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex h-full flex-col items-center justify-center gap-1"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.06, delayChildren: 0.15 },
                },
              }}
            >
              {NAV.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 px-8"
                  >
                    <motion.span
                      className="text-[13px] font-light tracking-[0.3em] uppercase text-foreground/90"
                      whileHover={{ x: 4, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content with dramatic transitions */}
      <main className="relative flex-1" style={{ perspective: "2000px" }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            style={{ transformStyle: "preserve-3d" }}
            className="relative mx-auto min-h-[calc(100vh-7rem)] max-w-[1400px] px-5 pt-12 pb-20 md:px-8 md:pt-16 md:pb-24 lg:px-12"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Minimal footer */}
      <motion.footer
        className="border-t border-white/[0.06] py-5 px-5 md:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="mx-auto max-w-[1400px] flex justify-center items-center gap-3">
          <motion.span
            className="h-px w-8 bg-white/20"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            style={{ transformOrigin: "right" }}
          />
          <span className="text-[10px] font-extralight tracking-[0.4em] uppercase text-muted-foreground/50">
            2026
          </span>
          <motion.span
            className="h-px w-8 bg-white/20"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            style={{ transformOrigin: "left" }}
          />
        </div>
      </motion.footer>
    </div>
  )
}

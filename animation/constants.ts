/**
 * Animation config used by loading screen, page transitions, and entrance effects.
 * Informed by Framer + SVGator articles and landing-page prompt (Bauhaus: purposeful, crisp).
 */

export const ANIMATION = {
  /** Easing: confident, minimal (Bauhaus-style) */
  ease: [0.16, 1, 0.3, 1] as const,
  easeOut: [0.76, 0, 0.24, 1] as const,

  /** Loading screen */
  loading: {
    /** Which exit style the full-screen loader uses */
    exitStyle: "slideUp" as "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "wipeDiagonal" | "scaleFade",
    exitDuration: 1.2,
    exitDelay: 0.2,
    /** Branded message shown during load (Coding for Designers style) */
    brandedMessage: "Build · Ship · Iterate",
  },

  /** Page transition (route change) — Dynex-style */
  pageTransition: {
    slideOffset: 120,
    duration: 0.9,
    exitDuration: 0.6,
  },

  /** Stagger for lists / cards */
  stagger: {
    containerDelay: 0.15,
    itemDelay: 0.08,
  },
} as const

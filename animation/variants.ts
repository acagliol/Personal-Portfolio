/**
 * Shared Framer Motion variants for portfolio.
 * Used by: loading-screen, terminal-shell (page transitions), and section/card entrances.
 * References: Framer (page transitions, loading slide-up, entrance), SVGator (liquid/transition effects).
 */

import { ANIMATION } from "./constants"

export type LoadingExitStyle = (typeof ANIMATION.loading)["exitStyle"]

/** Full-screen loading exit animations (inspired by Framer "slide up to reveal" + SVGator page transition effects) */
export const loadingExitVariants: Record<
  LoadingExitStyle,
  { exit: { [key: string]: unknown }; transition: { duration: number; delay: number; ease: readonly number[] } }
> = {
  slideUp: {
    exit: {
      y: "-100%",
      transition: {
        duration: ANIMATION.loading.exitDuration,
        delay: ANIMATION.loading.exitDelay,
        ease: ANIMATION.easeOut,
      },
    },
    transition: { duration: ANIMATION.loading.exitDuration, delay: ANIMATION.loading.exitDelay, ease: ANIMATION.easeOut },
  },
  slideDown: {
    exit: {
      y: "100%",
      transition: {
        duration: ANIMATION.loading.exitDuration,
        delay: ANIMATION.loading.exitDelay,
        ease: ANIMATION.easeOut,
      },
    },
    transition: { duration: ANIMATION.loading.exitDuration, delay: ANIMATION.loading.exitDelay, ease: ANIMATION.easeOut },
  },
  slideLeft: {
    exit: {
      x: "-100%",
      transition: {
        duration: ANIMATION.loading.exitDuration,
        delay: ANIMATION.loading.exitDelay,
        ease: ANIMATION.easeOut,
      },
    },
    transition: { duration: ANIMATION.loading.exitDuration, delay: ANIMATION.loading.exitDelay, ease: ANIMATION.easeOut },
  },
  slideRight: {
    exit: {
      x: "100%",
      transition: {
        duration: ANIMATION.loading.exitDuration,
        delay: ANIMATION.loading.exitDelay,
        ease: ANIMATION.easeOut,
      },
    },
    transition: { duration: ANIMATION.loading.exitDuration, delay: ANIMATION.loading.exitDelay, ease: ANIMATION.easeOut },
  },
  wipeDiagonal: {
    exit: {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      transition: {
        duration: ANIMATION.loading.exitDuration,
        delay: ANIMATION.loading.exitDelay,
        ease: ANIMATION.easeOut,
      },
    },
    transition: { duration: ANIMATION.loading.exitDuration, delay: ANIMATION.loading.exitDelay, ease: ANIMATION.easeOut },
  },
  scaleFade: {
    exit: {
      scale: 1.1,
      opacity: 0,
      transition: {
        duration: ANIMATION.loading.exitDuration,
        delay: ANIMATION.loading.exitDelay,
        ease: ANIMATION.easeOut,
      },
    },
    transition: { duration: ANIMATION.loading.exitDuration, delay: ANIMATION.loading.exitDelay, ease: ANIMATION.easeOut },
  },
}

/** Dynex-style page transition: direction-aware slide + fade + blur (Framer article) */
export function pageTransitionVariants(direction: 1 | -1) {
  const slideOffset = ANIMATION.pageTransition.slideOffset
  return {
    initial: {
      opacity: 0,
      x: direction > 0 ? slideOffset : -slideOffset,
      scale: 0.96,
      filter: "blur(20px)",
      rotateY: direction > 0 ? 8 : -8,
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      rotateY: 0,
      transition: {
        duration: ANIMATION.pageTransition.duration,
        ease: ANIMATION.ease,
        scale: { duration: 0.7 },
      },
    },
    exit: {
      opacity: 0,
      x: direction > 0 ? -slideOffset * 0.6 : slideOffset * 0.6,
      scale: 0.94,
      filter: "blur(16px)",
      transition: {
        duration: ANIMATION.pageTransition.exitDuration,
        ease: ANIMATION.easeOut,
      },
    },
  }
}

/** Stagger container for entrance (Framer entrance + SVGator scroll reveal) */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION.stagger.itemDelay,
      delayChildren: ANIMATION.stagger.containerDelay,
    },
  },
}

/** Single item: fade-up + slight blur (Biograph-style focus) */
export const staggerItemFadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: ANIMATION.ease },
  },
}

/** Single item: slide from left (Tellet-style) */
export const staggerItemSlideLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: ANIMATION.ease },
  },
}

/** Loading screen: branded message word stagger (Coding for Designers style) */
export const loadingBrandedMessage = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.4 + i * 0.08, ease: ANIMATION.ease },
  }),
}

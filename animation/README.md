# Portfolio animation system

This folder holds **shared animation variants and references** used across the portfolio. It’s informed by the CS reference folders so we keep loading, page transitions, and entrances consistent and on-brand.

## Reference folders (CS root, one level up from portfolio-brutalist)

- **`../../landing-page-prompt/dfesinger items.md`** — Bauhaus-style one-pager prompt: clarity, purposeful motion, crisp transitions, narrative arc. Use for tone (intentional, minimal, confident).
- **`../../framer-animation-article/11-professional-animation-strategies.md`** — Framer strategies: background animations, hover effects, **page transitions** (e.g. Dynex: smooth left-to-right fade), **entrance animations** (fade-up, slide-in), **loading** (branded message + slide up to reveal, like Coding for Designers), scroll-triggered, microinteractions, text animations.
- **`../../svgator-animation-article/31-website-animation-examples.md`** — SVGator list: page transition effects (fade, slide, full-page reveal), **loading** (progress bar, skeleton, self-drawing), **liquid motion**, line animation, morphing, microinteractions.

## What lives here

| File | Purpose |
|------|--------|
| `README.md` | This file — references + index. |
| `variants.ts` | Framer motion variants: loading exits, page transitions, entrance staggers. |
| `constants.ts` | Config (e.g. which loading exit style, durations). |

## Usage

- **Loading screen** — Uses `loadingExitVariants` and optional branded message (staggered text).
- **Page transitions** (terminal-shell) — Uses `pageTransitionVariants(direction)` for route changes (Dynex-style left/right slide + fade).
- **Sections / cards** — Can use `entranceVariants`, `staggerContainer`, `staggerItem` for scroll-in and list stagger.

## Techniques we use (from the articles)

- **Loading:** Branded message + sliding exit (slide up, or slide left/right/wipe); progress bar; optional skeleton.
- **Page transitions:** Direction-aware slide (left-to-right or right-to-left) + fade + optional blur/scale (Dynex-style).
- **Entrance:** Fade-up, slide-in, blur-to-focus (Biograph-style); staggered children.
- **Microinteractions:** Button/link hover (scale, underline draw); card hover (tilt, lift).
- **Background:** Ambient gradient motion (see `AnimatedBackground`); parallax on hero.

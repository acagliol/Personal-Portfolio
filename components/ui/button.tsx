"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center overflow-hidden rounded-md border px-5 py-2.5 text-[13px] font-medium tracking-[0.02em] transition-all duration-300 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-background border-foreground/20 hover:bg-foreground/95 hover:border-foreground/30 active:scale-[0.98]",
        inverse:
          "bg-transparent text-foreground border-white/15 hover:bg-white/[0.08] hover:border-white/25 active:scale-[0.98]",
        ghost:
          "bg-transparent text-foreground border-transparent hover:bg-white/[0.06] active:scale-[0.98]",
      },
      size: {
        default: "h-11 min-w-[120px]",
        sm: "h-9 min-w-[100px] px-4 text-xs",
        lg: "h-12 min-w-[140px] px-6 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
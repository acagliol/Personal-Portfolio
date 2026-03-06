"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "interactive-press interactive-fill relative inline-flex items-center justify-center overflow-hidden rounded-none border border-border px-4 py-2 text-sm font-medium uppercase tracking-[0.22em] text-foreground transition-[color,border-color,box-shadow,transform] duration-200 ease-out disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-background hover:border-foreground hover:text-background",
        inverse:
          "bg-background text-foreground hover:border-foreground hover:text-background",
        ghost:
          "bg-transparent text-foreground hover:border-foreground hover:text-background",
      },
      size: {
        default: "h-11 min-w-32",
        sm: "h-9 min-w-24 px-3 text-xs",
        lg: "h-12 min-w-36 px-6",
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
        <span className="relative z-10">{children}</span>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
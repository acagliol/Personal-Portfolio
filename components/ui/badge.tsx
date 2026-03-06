import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "badge-pop inline-flex items-center rounded-none border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em]",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background",
        muted: "bg-muted text-foreground",
        outline: "bg-transparent text-foreground",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
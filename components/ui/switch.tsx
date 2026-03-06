"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(
      "relative inline-flex h-7 w-14 items-center border border-border bg-muted transition-colors duration-200 ease-out data-[state=checked]:bg-foreground/90",
      className
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb className="switch-thumb block size-5 bg-background shadow-sm" />
  </SwitchPrimitive.Root>
))
Switch.displayName = SwitchPrimitive.Root.displayName

export { Switch }
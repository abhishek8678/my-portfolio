import * as React from "react"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex w-full h-11 rounded-lg border border-white/10 bg-[#1A1A24]/60 backdrop-blur-md px-4 py-2 text-min-foreground text-base transition-all duration-200 placeholder:text-min-muted-foreground focus:outline-none focus:border-min-accent/50 focus:ring-2 focus:ring-min-accent/20 focus:shadow-glow-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex w-full min-h-[120px] rounded-lg border border-white/10 bg-[#1A1A24]/60 backdrop-blur-md px-4 py-3 text-min-foreground text-base transition-all duration-200 placeholder:text-min-muted-foreground focus:outline-none focus:border-min-accent/50 focus:ring-2 focus:ring-min-accent/20 focus:shadow-glow-sm resize-y",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Input, Textarea }

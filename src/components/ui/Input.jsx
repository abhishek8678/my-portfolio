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
        "flex w-full h-12 rounded-2xl bg-[#E0E5EC] shadow-neu-inset px-4 py-2 text-foreground text-base transition-all duration-300 placeholder:text-muted/60 focus:outline-none focus:shadow-neu-inset-deep focus:ring-2 focus:ring-accent/20",
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
        "flex w-full min-h-[120px] rounded-2xl bg-[#E0E5EC] shadow-neu-inset px-4 py-3 text-foreground text-base transition-all duration-300 placeholder:text-muted/60 focus:outline-none focus:shadow-neu-inset-deep focus:ring-2 focus:ring-accent/20 resize-y",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Input, Textarea }

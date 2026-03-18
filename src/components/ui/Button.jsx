import * as React from "react"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const Button = React.forwardRef(({ className, variant = "primary", size = "default", children, ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-min-accent focus-visible:ring-offset-2 focus-visible:ring-offset-min-bg disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] rounded-lg"
  
  const variants = {
    primary: "bg-min-accent text-min-accent-foreground hover:brightness-110 hover:shadow-glow-sm",
    secondary: "bg-transparent text-min-foreground border border-white/15 hover:bg-white/5 hover:border-white/25",
    ghost: "bg-transparent text-min-foreground border-transparent hover:bg-white/5",
  }

  const sizes = {
    sm: "h-9 px-4 text-sm",
    default: "h-11 px-6 text-base",
    lg: "h-12 px-8 text-lg",
    icon: "h-11 w-11",
  }

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
})
Button.displayName = "Button"

export { Button }

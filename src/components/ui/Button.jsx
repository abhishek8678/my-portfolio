import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "primary", size = "default", children, ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-medium font-body tracking-tight transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#89AACC]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
  
  const variants = {
    primary: "bg-text-primary text-bg rounded-full hover:scale-105 active:scale-[0.98]",
    secondary: "bg-transparent text-text-primary border-2 border-stroke rounded-full hover:bg-surface hover:border-stroke active:scale-[0.98]",
    ghost: "bg-transparent text-text-primary rounded-full hover:bg-surface active:scale-[0.98]",
    outline: "bg-bg text-text-primary border border-stroke rounded-full hover:bg-surface active:scale-[0.98]",
  }

  const sizes = {
    sm: "h-9 px-5 text-sm",
    default: "h-11 px-7 text-sm",
    lg: "h-12 px-8 text-base",
    icon: "h-11 w-11",
  }

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant] || variants.primary, sizes[size] || sizes.default, className)}
      {...props}
    >
      {children}
    </button>
  )
})
Button.displayName = "Button"

export { Button }

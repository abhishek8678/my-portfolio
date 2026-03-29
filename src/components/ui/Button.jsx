import * as React from "react"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const Button = React.forwardRef(({ className, variant = "primary", size = "default", children, ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#E0E5EC] disabled:opacity-50 disabled:pointer-events-none rounded-2xl"
  
  const variants = {
    primary: "bg-accent text-white shadow-neu-extruded hover:-translate-y-[1px] hover:shadow-neu-extruded-hover active:translate-y-[0.5px] active:shadow-neu-inset-sm",
    secondary: "bg-[#E0E5EC] text-foreground shadow-neu-extruded hover:-translate-y-[1px] hover:shadow-neu-extruded-hover active:translate-y-[0.5px] active:shadow-neu-inset",
    ghost: "bg-transparent text-muted hover:text-foreground hover:shadow-neu-extruded active:shadow-neu-inset",
  }

  const sizes = {
    sm: "h-9 px-4 text-sm rounded-xl",
    default: "h-12 px-6 text-base",
    lg: "h-14 px-8 text-lg",
    icon: "h-12 w-12 rounded-xl",
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

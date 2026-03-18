import * as React from "react"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const Card = React.forwardRef(({ className, highlight = false, hover = false, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative rounded-xl bg-[#1A1A24]/60 backdrop-blur-md border border-white/10 transition-all duration-300 ease-out overflow-hidden p-6 sm:p-8",
        hover && "hover:border-white/15 hover:bg-[#1A1A24]/80 hover:scale-[1.02] hover:shadow-lg",
        highlight && "border-min-accent/20 shadow-[0_0_0_1px_rgba(245,158,11,0.2),0_0_30px_rgba(245,158,11,0.15)]",
        className
      )}
      {...props}
    >
      <div className="relative z-10 flex h-full flex-col text-left">
        {children}
      </div>
    </div>
  )
})
Card.displayName = "Card"

export { Card }

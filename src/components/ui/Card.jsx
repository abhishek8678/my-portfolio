import * as React from "react"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const Card = React.forwardRef(({ className, inset = false, hover = false, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative rounded-[32px] bg-[#E0E5EC] transition-all duration-300 ease-out overflow-hidden p-6 sm:p-8",
        inset ? "shadow-neu-inset" : "shadow-neu-extruded",
        hover && "hover:-translate-y-1 hover:shadow-neu-extruded-hover",
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

import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef(({ className, hover = false, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative rounded-xl bg-card backdrop-blur-[8px] border border-border transition-all duration-300 ease-out overflow-hidden p-6 sm:p-8",
        hover && "hover:border-border-hover hover:bg-[rgba(26,26,36,0.8)] hover:scale-[1.02] hover:shadow-lg",
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

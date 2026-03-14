import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-11 w-full min-w-0 rounded-lg border border-[#2a2333] bg-[#15101c] px-3 py-1 text-sm text-white shadow-none transition-[color,box-shadow] outline-none",
        "placeholder:text-slate-600",
        "selection:bg-primary selection:text-primary-foreground",
        "focus-visible:outline-none focus-visible:border-[#7f13ec] focus-visible:ring-[3px] focus-visible:ring-[#7f13ec]/20",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        className
      )}
      {...props}
    />
  )
}

export { Input }

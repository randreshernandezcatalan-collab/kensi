import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-lg border border-line bg-[#0b0e15] px-4 py-2 text-sm text-ink ring-offset-bg file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-ink-dim focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neon focus-visible:border-neon disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

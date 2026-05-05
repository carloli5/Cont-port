import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "flex h-9 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#7d9995] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-[#7d9995]",
      className
    )}
    ref={ref}
    {...props}
  />
))
Input.displayName = "Input"

export { Input }

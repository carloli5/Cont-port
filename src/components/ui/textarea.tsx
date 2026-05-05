import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "flex min-h-[80px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#7d9995] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-[#7d9995]",
      className
    )}
    ref={ref}
    {...props}
  />
))
Textarea.displayName = "Textarea"

export { Textarea }

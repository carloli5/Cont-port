import * as React from "react"

import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      role="status"
      className={cn(
        "inline-block h-8 w-8 animate-spin rounded-full border-4 border-current border-t-transparent",
        className
      )}
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </span>
  )
}

export { Spinner }

import * as React from "react"

import { cn } from "@/lib/utils"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground",
        className,
      )}
      {...props}
    />
  )
}

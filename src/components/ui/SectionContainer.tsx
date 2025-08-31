import type { ReactNode } from "react"

interface SectionContainerProps {
  children: ReactNode
  className?: string
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
  padding?: "none" | "sm" | "md" | "lg"
}

export function SectionContainer({ children, className = "", maxWidth = "lg", padding = "md" }: SectionContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    full: "max-w-full",
  }

  const paddingClasses = {
    none: "",
    sm: "px-2 py-2",
    md: "px-4 py-4",
    lg: "px-6 py-6",
  }

  return (
    <div className={`mx-auto ${maxWidthClasses[maxWidth]} ${paddingClasses[padding]} ${className}`}>{children}</div>
  )
}

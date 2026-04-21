import * as React from "react"
import { cn } from "@/lib/utils"

interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  level?: 1 | 2 | 3 | 4
}

const Heading = React.forwardRef<HTMLDivElement, HeadingProps>(
  ({ className, title, description, level = 1, ...props }, ref) => {
    const HeadingTag = `h${level}` as const

    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        {title && (
          <HeadingTag className="text-3xl font-bold tracking-tight">
            {title}
          </HeadingTag>
        )}
        {description && (
          <p className="text-base text-muted-foreground">{description}</p>
        )}
      </div>
    )
  }
)
Heading.displayName = "Heading"

export { Heading }

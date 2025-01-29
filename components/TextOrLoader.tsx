import { cn } from "@/lib/utils"
import React, { ReactNode } from "react"
import SpinnerCircle from "./SpinnerCircle"

type Props = {
  className?: string
  children?: ReactNode
  isLoading?: boolean
  spinnerSize?: number
  spinnerClassName?: string
}

export default function TextOrLoader({
  children,
  isLoading,
  className,
  spinnerSize = 24,
  spinnerClassName,
}: Props) {
  return (
    <div className={cn("grid grid-cols-1 grid-rows-1", className)}>
      <div
        className={cn("col-span-full row-span-full", {
          invisible: isLoading,
        })}
      >
        {children}
      </div>
      <div
        className={cn(
          "col-span-full row-span-full inline-flex items-center justify-center gap-2 text-gray-200",
          {
            invisible: !isLoading,
          },
          spinnerClassName,
        )}
      >
        <SpinnerCircle size={spinnerSize} />
      </div>
    </div>
  )
}

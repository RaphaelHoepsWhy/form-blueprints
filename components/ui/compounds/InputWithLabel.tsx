"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"

// Extend the HTMLInputElement props
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const InputWithLabel = React.forwardRef<HTMLInputElement, Props>(
  ({ className, label, id, ...props }, ref) => {
    const generatedId = React.useId()
    const inputId = id || `input-${generatedId}`

    const [isLabelHidden, setIsLabelHidden] = useState(true)

    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsLabelHidden(false)
      }, 150)

      return () => clearTimeout(timeout)
    }, [])

    return (
      <div
        className={cn(
          "relative mt-1 grid w-full max-w-[300px] grid-cols-1 grid-rows-1 items-start",
          className,
        )}
      >
        <Input
          id={inputId}
          placeholder=" "
          className={cn("peer col-span-full row-span-full")}
          ref={ref}
          {...props}
        />
        <Label
          htmlFor={inputId}
          className={cn(
            "pointer-events-none col-span-full row-span-full origin-bottom-left translate-y-[0.7rem] items-start justify-start pl-3 text-start leading-none text-neutral-600 opacity-100 transition-all peer-focus:-translate-x-1 peer-focus:translate-y-[-0.6rem] peer-focus:scale-75 peer-[&:not(:placeholder-shown)]:-translate-x-1 peer-[&:not(:placeholder-shown)]:translate-y-[-0.6rem] peer-[&:not(:placeholder-shown)]:scale-75",
            { "opacity-0": isLabelHidden },
          )}
        >
          <span className="bg-white px-1 py-0.5">
            {label}
            {props.required && (
              <span className="text-15 relative bottom-0.5 left-0.5 leading-none text-gray-400">
                *
              </span>
            )}
          </span>
        </Label>
      </div>
    )
  },
)

InputWithLabel.displayName = "InputWithCompactLabel"

export { InputWithLabel as InputWithCompactLabel }

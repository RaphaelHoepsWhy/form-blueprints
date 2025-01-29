import TextOrLoader from "@/components/TextOrLoader"
import { Button, ButtonProps } from "@/components/ui/button"
import React from "react"

interface Props extends ButtonProps {
  isLoading?: boolean
}

export default function ButtonWithLoader({
  isLoading,
  children,
  ...rest
}: Props) {
  return (
    <Button disabled={isLoading} {...rest}>
      <TextOrLoader isLoading={!!isLoading}>{children}</TextOrLoader>
    </Button>
  )
}

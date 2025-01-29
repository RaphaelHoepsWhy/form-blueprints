import React from "react"
import { InputWithLabel } from "./ui/compounds/InputWithLabel"
import ButtonWithLoader from "./ui/compounds/ButtonWithLoader"

type Props = {
  className?: string
}

export default function DemoForm({}: Props) {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-[300px] flex-col gap-4">
        <InputWithLabel name="name" label="Name" required />
        <InputWithLabel
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          required
        />
        <InputWithLabel
          name="phone"
          label="Phone"
          type="tel"
          autoComplete="tel"
        />
        <ButtonWithLoader type="submit" className="mt-1">
          Submit
        </ButtonWithLoader>
      </div>
    </div>
  )
}

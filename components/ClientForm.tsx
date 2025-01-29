"use client"

import React, { useActionState } from "react"
import { InputWithLabel } from "./ui/compounds/InputWithLabel"
import ButtonWithLoader from "./ui/compounds/ButtonWithLoader"
import Form from "next/form"
import { updateUserData, UserData } from "@/lib/actions"
import { CheckboxWithLabel } from "./ui/compounds/CheckboxWithLabel"

type Props = {
  className?: string
}

interface ActionState {
  errorMessage: string | undefined
  success: boolean
}

export default function DemoForm({}: Props) {
  async function submitUserData(
    _currentStateeee: ActionState,
    formData: FormData,
  ): Promise<ActionState> {
    const user: UserData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      throwError: formData.get("throwError") === "on",
    }

    try {
      await updateUserData(user)
      return { success: true, errorMessage: undefined }
    } catch (error) {
      if (error instanceof Error) {
        return { success: false, errorMessage: error.toString() }
      }
      return { success: false, errorMessage: "An unexpected error occurred" }
    }
  }

  const [state, formAction, isPending] = useActionState<ActionState, FormData>(
    submitUserData,
    {
      errorMessage: undefined,
      success: false,
    },
  )

  return (
    <div className="flex justify-center">
      <Form
        className="flex w-full max-w-[300px] flex-col gap-4"
        action={formAction}
      >
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
        <CheckboxWithLabel
          name="throwError"
          id="throwError"
          label={"I accept that this request will throw an error"}
        />

        <ButtonWithLoader type="submit" className="mt-1" isLoading={isPending}>
          Submit
        </ButtonWithLoader>
        {state.success && (
          <span className="text-sm text-green-700">Success: Data updated</span>
        )}
        {state.errorMessage && (
          <span className="text-sm text-red-700">{state.errorMessage}</span>
        )}
      </Form>
    </div>
  )
}

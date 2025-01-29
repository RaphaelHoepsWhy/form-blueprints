"use client"

import React, { useActionState, useState } from "react"
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
  const [prefilledFormData, setPrefilledFormData] = useState<FormData>() // Only relevant to control the form data to be filled after a formAction completes

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
      setPrefilledFormData(undefined)
      return { success: true, errorMessage: undefined }
    } catch (error) {
      setPrefilledFormData(formData)
      console.error(error) // will log the server error, but only in dev mode. See comment in updateUserData()
      return {
        success: false,
        // message ment to be shown to the user in the UI. Usually non technical. The UI should still look good with this
        errorMessage: "Sorry, this did not work :( Please try again.",
      }
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
        <InputWithLabel
          name="name"
          label="Name"
          required
          defaultValue={(prefilledFormData?.get("name") as string) || ""}
        />
        <InputWithLabel
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          required
          defaultValue={(prefilledFormData?.get("email") as string) || ""}
        />
        <InputWithLabel
          name="phone"
          label="Phone"
          type="tel"
          autoComplete="tel"
          defaultValue={(prefilledFormData?.get("phone") as string) || ""}
        />
        <CheckboxWithLabel
          name="throwError"
          id="throwError"
          label={"I agree to server errors"}
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

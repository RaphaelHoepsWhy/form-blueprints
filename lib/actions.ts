"use server"

export interface UserData {
  name: string
  email: string
  phone?: string
  throwError?: boolean
}

// Dummy function to simulate a call to an API. You can use sensitive data, like keys from process.env etc. here
export async function updateUserData({
  name,
  email,
  phone,
  throwError,
}: UserData): Promise<void> {
  console.log(`Processing userData on the server: ${name}, ${email}, ${phone}`)

  await new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (throwError) {
        reject(
          // Note that next.js will not pass this error message to the client in production, because it could contain sensitive details.
          // The purpose of this message is to provide technical details to help with server-side development.
          // Showing a meaningful message to the user is the UI component's responsibility .
          new Error("Error in server function."),
        )
      } else {
        resolve()
      }
    }, 1000)
  })
}

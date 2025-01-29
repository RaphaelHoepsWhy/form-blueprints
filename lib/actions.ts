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
          new Error(
            "Error in server function. Note that next.js will not pass this string to the client in production, because it could contain sensitive details. The purpose here is to help with server-side development not to give hints to the users.",
          ),
        )
      } else {
        resolve()
      }
    }, 1000)
  })
}

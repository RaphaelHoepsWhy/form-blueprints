"use server"

export interface UserData {
  name: string
  email: string
  throwError?: boolean
  phone?: string
}

// Dummy call to an API. Use secret keys from process.env etc.
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
        reject(new Error("Failed to update user data."))
      } else {
        resolve()
      }
    }, 1000)
  })
}

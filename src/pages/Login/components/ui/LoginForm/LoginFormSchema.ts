import { z } from 'zod'

export const loginFormSchema = z.object({
  email: z.string().trim().min(2).max(50).nonempty(),
  password: z.string().trim().min(2).max(50).nonempty()
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>

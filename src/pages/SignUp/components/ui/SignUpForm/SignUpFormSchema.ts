import { z } from 'zod'

export const signUpFormSchema = z.object({
  email: z.string().trim().min(2).max(50).nonempty(),
  firstName: z.string().trim().min(2).max(50).nonempty(),
  lastName: z.string().trim().min(2).max(50).nonempty(),
  password: z.string().trim().min(2).max(50).nonempty()
})

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>

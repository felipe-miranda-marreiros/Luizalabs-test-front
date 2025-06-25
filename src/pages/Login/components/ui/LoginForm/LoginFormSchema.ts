import { z } from 'zod'

export const loginFormSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty({ message: 'Campo obrigatório' })
    .email({ message: 'Digite um email válido' }),
  password: z
    .string()
    .trim()
    .nonempty({ message: 'Campo obrigatório' })
    .min(6, { message: 'Senha deve conter pelo menos 6 caracteres' })
    .max(40, { message: 'Senha deve conter no máximo 40 caracteres' })
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>

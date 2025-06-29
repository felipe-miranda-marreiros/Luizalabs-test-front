import { z } from 'zod'

export const signUpFormSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty('Campo obrigatório')
    .email('Insira um email válido'),
  firstName: z
    .string()
    .trim()
    .nonempty('Campo obrigatório')
    .min(3, 'Insira um nome válido')
    .max(50, 'Insira um nome válido'),
  lastName: z
    .string()
    .trim()
    .nonempty('Campo obrigatório')
    .min(3, 'Insira um nome válido')
    .max(50, 'Insira um nome válido'),
  password: z
    .string()
    .trim()
    .nonempty('Campo obrigatório')
    .min(6, 'Senha minima de 6 caracteres')
    .max(50, 'Senha máxima de 50 caracteres')
})

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>

import { Button } from '@/shared/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/shared/components/ui/card'
import { Input } from '@/shared/components/ui/input'
import { cn } from '@/shared/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/shared/components/ui/form'
import { signUpFormSchema, type SignUpFormSchema } from './SignUpFormSchema'
import { Link, useNavigate } from 'react-router'
import { useSignUp } from '@/entities/SignUp'
import { Error } from '@/shared/components/ui/error'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { EyeIcon, EyeOffIcon } from 'lucide-react'

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const [isShow, setisShow] = useState(false)
  const { mutate, error, isPending } = useSignUp()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const form = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }
  })

  function onSubmit(data: SignUpFormSchema) {
    mutate(
      {
        email: data.email,
        first_name: data.firstName,
        last_name: data.lastName,
        password: data.password
      },
      {
        onSuccess: () => {
          queryClient.resetQueries()
          queryClient.invalidateQueries()
          navigate('/', { replace: true })
        }
      }
    )
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Faça o cadastro da sua conta</CardTitle>
          <CardDescription>
            Preencha os campos abaixo para criar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Error className="mb-4" error={error} />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sobrenome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu sobrenome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu e-mail" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="one-time-code"
                          inputMode="text"
                          type={isShow ? 'text' : 'password'}
                          IconRight={
                            isShow ? (
                              <EyeIcon
                                onClick={() =>
                                  setisShow((prevState) => !prevState)
                                }
                              />
                            ) : (
                              <EyeOffIcon
                                onClick={() =>
                                  setisShow((prevState) => !prevState)
                                }
                              />
                            )
                          }
                          placeholder="Sua senha..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col gap-3">
                  <Button
                    isLoading={isPending}
                    type="submit"
                    className="w-full"
                  >
                    Cadastrar
                  </Button>
                </div>
              </div>
              <div className="mt-4 text-center text-sm">
                Deseja fazer login?{' '}
                <Link to="/login" className="underline underline-offset-4">
                  Voltar para o login
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

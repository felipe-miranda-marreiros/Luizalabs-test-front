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
import { loginFormSchema, type LoginFormSchema } from './LoginFormSchema'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/shared/components/ui/form'
import { Link, useNavigate } from 'react-router'
import { useLogin } from '@/entities/Login'
import { useQueryClient } from '@tanstack/react-query'
import { Error } from '@/shared/components/ui/error'

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const queryClient = useQueryClient()
  const { mutate, error, isPending } = useLogin()
  const navigate = useNavigate()
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  function onSubmit(data: LoginFormSchema) {
    mutate(
      {
        email: data.email,
        password: data.password
      },
      {
        onSuccess: () => {
          queryClient.resetQueries()
          queryClient.invalidateQueries()
          navigate('/dashboard/products', { replace: true })
        }
      }
    )
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Faça login em sua conta</CardTitle>
          <CardDescription>
            Digite o seu e-mail abaixo para fazer login
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Error className="mb-4" error={error} />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu e-mail..." {...field} />
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
                        <Input placeholder="Sua senha..." {...field} />
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
                    Entrar
                  </Button>
                </div>
              </div>
              <div className="mt-4 text-center text-sm">
                Não tem uma conta?{' '}
                <Link to="/sign-up" className="underline underline-offset-4">
                  Fazer cadastro
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

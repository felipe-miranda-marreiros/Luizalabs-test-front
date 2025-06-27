import userEvent from '@testing-library/user-event'
import { render } from '@/shared/test/test-utils'
import { screen, waitFor } from '@testing-library/dom'
import { Routes } from '@/app/routes/routes'
import { MemoryRouter } from 'react-router'
import { server } from '@/shared/test'

jest.unmock('react-router')

describe('<SignUpPage />', () => {
  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())

  afterAll(() => {
    server.close()
    jest.resetAllMocks()
  })

  test('Should navigate to Login page when clicking "Voltar para o login"', async () => {
    render(
      <MemoryRouter initialEntries={['/sign-up']}>
        <Routes />
      </MemoryRouter>
    )

    const link = screen.getByRole('link', { name: /Voltar para o login/i })
    await userEvent.click(link)

    expect(await screen.findByText(/Faça login em sua conta/i)).toBeDefined()
  })
  test('Should navigate to products page on sign up success', async () => {
    render(
      <MemoryRouter initialEntries={['/sign-up']}>
        <Routes />
      </MemoryRouter>
    )

    const emailInput = screen.getByPlaceholderText(/seu e-mail/i)
    const fistNameInput = screen.getByPlaceholderText(/seu nome/i)
    const lastNameInput = screen.getByPlaceholderText(/seu sobrenome/i)
    const passwordInput = screen.getByPlaceholderText(/sua senha/i)

    const submitButton = screen.getByRole('button', { name: /cadastrar/i })

    await userEvent.type(emailInput, 'user@email.com')
    await userEvent.type(passwordInput, '123456')
    await userEvent.type(fistNameInput, 'any_name')
    await userEvent.type(lastNameInput, 'any_name')
    await userEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByTestId('product-page')).toBeInTheDocument()
    })
  })
})

import userEvent from '@testing-library/user-event'
import { render } from '@/shared/test/test-utils'
import { screen, waitFor } from '@testing-library/dom'
import { Routes } from '@/app/routes/routes'
import { MemoryRouter } from 'react-router'
import { server } from '@/shared/test'

jest.unmock('react-router')

describe('<LoginPage />', () => {
  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())

  afterAll(() => {
    server.close()
    jest.resetAllMocks()
  })

  test('Should navigate to sign-up page when clicking "Fazer cadastro"', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes />
      </MemoryRouter>
    )

    const link = screen.getByRole('link', { name: /fazer cadastro/i })
    await userEvent.click(link)

    expect(
      await screen.findByText(/Faça o cadastro da sua conta/i)
    ).toBeDefined()
  })
  test('Should navigate to products page on login success', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes />
      </MemoryRouter>
    )

    const emailInput = screen.getByPlaceholderText(/seu e-mail/i)
    const passwordInput = screen.getByPlaceholderText(/sua senha/i)
    const submitButton = screen.getByRole('button', { name: /entrar/i })

    await userEvent.type(emailInput, 'user@email.com')
    await userEvent.type(passwordInput, '123456')
    await userEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByTestId('product-page')).toBeInTheDocument()
    })
  })
})

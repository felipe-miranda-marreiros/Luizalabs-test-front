import { screen, fireEvent, waitFor } from '@testing-library/react'
import { LoginForm } from './LoginForm'
import '@testing-library/jest-dom'
import { render } from '@/shared/test/test-utils'
import { MemoryRouter } from 'react-router'

describe('<LoginForm />', () => {
  it('Should render form fields correctly', () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    )
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()
  })

  it('Should show validation errors when submitting empty form', async () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    )

    fireEvent.click(screen.getByRole('button', { name: /entrar/i }))

    await waitFor(() => {
      expect(
        screen.getAllByText(/campo obrigatório/i).length
      ).toBeGreaterThanOrEqual(1)
    })
  })

  it('Should submit form with valid inputs', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    )

    const emailInput = screen.getByPlaceholderText(/seu e-mail/i)
    const passwordInput = screen.getByPlaceholderText(/sua senha/i)

    fireEvent.change(emailInput, { target: { value: 'it@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })

    fireEvent.click(screen.getByRole('button', { name: /entrar/i }))

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith({
        email: 'it@example.com',
        password: 'password123'
      })
    })

    consoleSpy.mockRestore()
  })
})

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
})

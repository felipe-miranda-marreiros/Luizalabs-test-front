import { Routes } from '@/app/routes/routes'
import { render } from '@/shared/test/test-utils'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'

describe('<LoginPage />', () => {
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
})

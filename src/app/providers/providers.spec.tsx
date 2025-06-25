import { render, screen } from '@testing-library/react'
import { Providers } from './providers'
import type { PropsWithChildren } from 'react'

jest.mock('../hooks/setup', () => ({
  Setup: ({ children }: PropsWithChildren) => (
    <div data-testid="setup">{children}</div>
  )
}))

jest.mock('../routes/routes', () => ({
  Routes: () => <div data-testid="routes">Routes content</div>
}))

describe('<Providers />', () => {
  it('Should render QueryClientProvider, BrowserRouter, Setup and Routes', () => {
    render(<Providers />)
    expect(screen.getByTestId('setup')).toBeInTheDocument()
    expect(screen.getByTestId('routes')).toBeInTheDocument()
    expect(screen.getByText('Routes content')).toBeInTheDocument()
  })
})

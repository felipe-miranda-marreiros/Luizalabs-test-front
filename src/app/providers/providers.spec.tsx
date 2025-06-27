import { render, screen } from '@testing-library/react'
import { Providers } from './providers'

jest.mock('../routes/routes', () => ({
  Routes: () => <div data-testid="routes">Routes content</div>
}))

describe('<Providers />', () => {
  it('Should render QueryClientProvider, BrowserRouter, and Routes', () => {
    render(<Providers />)
    expect(screen.getByTestId('routes')).toBeInTheDocument()
    expect(screen.getByText('Routes content')).toBeInTheDocument()
  })
})

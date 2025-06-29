import { render } from '@/shared/test/test-utils'
import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { Routes } from './routes'

describe('<Routes />', () => {
  test('Should render Products page by default', async () => {
    render(
      <MemoryRouter>
        <Routes />
      </MemoryRouter>
    )

    expect(await screen.findByTestId('product-page')).toBeInTheDocument()
  })
})

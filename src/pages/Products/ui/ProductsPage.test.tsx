import { Routes } from '@/app/routes/routes'
import { server } from '@/shared/test/server/server'
import { render } from '@/shared/test/test-utils'
import { screen } from '@testing-library/dom'
import { MemoryRouter } from 'react-router'

describe('<ProductsPage />', () => {
  beforeAll(() => {
    server.listen()
  })

  afterEach(() => {
    server.resetHandlers()
  })

  afterAll(() => {
    server.close()
  })

  test('Should render ProductsPage with ProductList when list is not empty', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes />
      </MemoryRouter>
    )
    const products = await screen.findAllByTestId('product-id')
    expect(products.length).toBeGreaterThanOrEqual(3)
  })
})

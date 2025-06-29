import { render } from '@/shared/test/test-utils'
import { screen, waitFor } from '@testing-library/dom'
import { Routes } from '@/app/routes/routes'
import { MemoryRouter } from 'react-router'
import { server } from '@/shared/test'
import { http, HttpResponse } from 'msw'
import { WISH_FULL_URL } from '@/shared/test/server/Wish/wishHandlers'

jest.unmock('react-router')

describe('<WishListPage />', () => {
  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())

  afterAll(() => {
    server.close()
    jest.resetAllMocks()
  })

  test('Should display an empty message if wish list is empty', async () => {
    server.use(
      http.get(WISH_FULL_URL, () => {
        return HttpResponse.json([], { status: 200 })
      })
    )

    render(
      <MemoryRouter initialEntries={['/wish-list']}>
        <Routes />
      </MemoryRouter>
    )

    await waitFor(() =>
      expect(screen.queryByTestId('spinner')).not.toBeInTheDocument()
    )

    expect(
      await screen.findByText(/Sua lista de favoritos está vazia./i)
    ).toBeInTheDocument()
  })
  test('Should not display an empty message if wish list is not empty', async () => {
    render(
      <MemoryRouter initialEntries={['/wish-list']}>
        <Routes />
      </MemoryRouter>
    )

    await waitFor(() =>
      expect(screen.queryByTestId('spinner')).not.toBeInTheDocument()
    )

    expect(
      screen.queryByText(/Sua lista de favoritos está vazia./i)
    ).not.toBeInTheDocument()
  })
})

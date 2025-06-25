import { renderHook } from '@/shared/test/test-utils'
import { useFavoriteCount } from './useFavoriteCount'
import { waitFor } from '@testing-library/dom'
import { wishListService } from '../services/wishListService'

describe('useFavoriteCount', () => {
  it('Should return 0 when wishlist is null', async () => {
    jest.spyOn(wishListService, 'get').mockReturnValueOnce(null)
    const { result } = renderHook(() => useFavoriteCount())
    await waitFor(() => {
      expect(result.current.count).toBe(0)
    })
  })

  it('Should return correct count when wishlist has items', async () => {
    jest.spyOn(wishListService, 'get').mockReturnValueOnce({
      total: 2,
      items: [{ id: 1 }, { id: 2 }]
    })
    const { result } = renderHook(() => useFavoriteCount())
    await waitFor(() => {
      expect(result.current.count).toBe(2)
    })
  })
})

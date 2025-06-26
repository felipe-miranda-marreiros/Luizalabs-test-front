import { renderHook } from '@/shared/test/test-utils'
import { useFavoriteCount } from './useFavoriteCount'
import { waitFor } from '@testing-library/dom'
import { wishService } from '../services/wishService'

describe('useFavoriteCount', () => {
  it('Should return 0 when wishlist is null', async () => {
    jest.spyOn(wishService, 'get').mockReturnValueOnce(null)
    const { result } = renderHook(() => useFavoriteCount())
    await waitFor(() => {
      expect(result.current.count).toBe(0)
    })
  })

  it('Should return correct count when wishlist has items', async () => {
    jest.spyOn(wishService, 'get').mockReturnValueOnce({
      count: 2,
      items: [1, 2]
    })
    const { result } = renderHook(() => useFavoriteCount())
    await waitFor(() => {
      expect(result.current.count).toBe(2)
    })
  })
})

import { renderHook } from '@/shared/test/test-utils'
import { useToggleFavorite } from './useToggleFavorite'
import { wishListService } from '../services/wishListService'
import { act, waitFor } from '@testing-library/react'

describe('useToggleFavorite', () => {
  it('Should return true if isFavorite is true', () => {
    jest.spyOn(wishListService, 'isOnWishList').mockReturnValueOnce(true)
    const { result } = renderHook(() => useToggleFavorite('1'))
    expect(result.current.isFavorite).toBe(true)
  })

  it('Should toggle isFavorite and invalidate query on success', async () => {
    jest.spyOn(wishListService, 'isOnWishList').mockReturnValueOnce(false)
    const { result } = renderHook(() => useToggleFavorite('2'))
    expect(result.current.isFavorite).toBe(false)
    act(() => {
      result.current.onToggle()
    })
    await waitFor(() => {
      expect(result.current.isFavorite).toBe(true)
    })
  })

  it('Should set isFavorite to false on mutation error', async () => {
    jest.spyOn(wishListService, 'isOnWishList').mockReturnValueOnce(false)
    jest.spyOn(wishListService, 'add').mockRejectedValueOnce(new Error())

    const { result } = renderHook(() => useToggleFavorite('2'))
    expect(result.current.isFavorite).toBe(false)
    act(() => {
      result.current.onToggle()
    })
    await waitFor(() => {
      expect(result.current.isFavorite).toBe(false)
    })
  })
})

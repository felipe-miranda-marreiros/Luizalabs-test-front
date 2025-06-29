import { renderHook } from '@/shared/test/test-utils'
import { useToggleFavorite } from '../hooks/useToggleFavorite'
import { wishService } from '../services/wishService'
import { wishApi } from '../services/wishApi'
import { act, waitFor } from '@testing-library/react'
import * as toast from 'sonner'
import { QueryKeys } from '@/shared/api'

const navigateMock = jest.fn()

jest.mock('react-router', () => {
  const actual = jest.requireActual('react-router')
  return {
    ...actual,
    useNavigate: () => navigateMock
  }
})

describe('useToggleFavorite', () => {
  it('Should initialize isFavorite based on isOnWishList: true', () => {
    jest.spyOn(wishService, 'isOnWishList').mockReturnValueOnce(true)
    const { result } = renderHook(() => useToggleFavorite('1'))
    expect(result.current.isFavorite).toBe(true)
  })
  it('Should initialize isFavorite based on isOnWishList: false', () => {
    jest.spyOn(wishService, 'isOnWishList').mockReturnValueOnce(false)
    const { result } = renderHook(() => useToggleFavorite('1'))
    expect(result.current.isFavorite).toBe(false)
  })

  it('Should call addOrRemove and update isFavorite on success', async () => {
    jest.spyOn(wishService, 'isOnWishList').mockReturnValueOnce(false)
    const addOrRemoveSpy = jest
      .spyOn(wishApi, 'addOrRemove')
      .mockResolvedValueOnce({ count: 1, items: [1] })
    const addSpy = jest.spyOn(wishService, 'add').mockResolvedValueOnce()

    const { result } = renderHook(() => useToggleFavorite('1'))

    await act(async () => {
      result.current.onToggle()
    })

    await waitFor(() => {
      expect(addOrRemoveSpy).toHaveBeenCalledWith(1)
      expect(addSpy).toHaveBeenCalledWith(1)
      expect(result.current.isFavorite).toBe(true)
    })
  })

  it('Should invalidate queries on success', async () => {
    jest.spyOn(wishService, 'isOnWishList').mockReturnValueOnce(false)
    jest
      .spyOn(wishApi, 'addOrRemove')
      .mockResolvedValueOnce({ count: 1, items: [1] })

    const { result } = renderHook(() => useToggleFavorite('1'))

    const invalidateSpy = jest.spyOn(
      result.current.queryClient,
      'invalidateQueries'
    )

    await act(async () => {
      result.current.onToggle()
    })

    await waitFor(() => {
      expect(invalidateSpy).toHaveBeenCalledWith({
        queryKey: [QueryKeys.SETUP_APP]
      })
      expect(invalidateSpy).toHaveBeenCalledWith({
        queryKey: [QueryKeys.FAVORITE_COUNT]
      })
      expect(invalidateSpy).toHaveBeenCalledWith({
        queryKey: [QueryKeys.WISH_LIST],
        type: 'all'
      })
    })
  })

  it('Should handle 403 error: show toast and navigate', async () => {
    jest.spyOn(wishService, 'isOnWishList').mockReturnValueOnce(false)
    jest.spyOn(wishApi, 'addOrRemove').mockRejectedValueOnce({
      status: 403,
      response: {}
    })

    const toastApy = jest.spyOn(toast, 'toast')

    const { result } = renderHook(() => useToggleFavorite('1'))

    await act(async () => {
      result.current.onToggle()
    })

    await waitFor(() => {
      expect(toastApy).toHaveBeenCalledWith('Faça login para continuar')
      expect(navigateMock).toHaveBeenCalledWith('/login')
    })
  })

  it('should handle 400 error: show toast with message', async () => {
    jest.spyOn(wishService, 'isOnWishList').mockReturnValueOnce(false)
    jest.spyOn(wishApi, 'addOrRemove').mockRejectedValueOnce({
      status: 400,
      response: {
        data: {
          errors: [{ message: 'any_error' }]
        }
      }
    })
    const toastApy = jest.spyOn(toast, 'toast')

    const { result } = renderHook(() => useToggleFavorite('1'))

    await act(async () => {
      result.current.onToggle()
    })

    await waitFor(() => {
      expect(toastApy).toHaveBeenCalledWith('any_error')
    })
  })
})

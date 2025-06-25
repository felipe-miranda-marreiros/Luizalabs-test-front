import { wishListService, type WishListProps } from './wishListService'

const WISH_LIST_KEY = 'WISH_LIST'

const mockInitialData: WishListProps = {
  total: 0,
  items: []
}

describe('wishListService', () => {
  beforeEach(() => {
    localStorage.clear()
    localStorage.setItem(WISH_LIST_KEY, JSON.stringify(mockInitialData))
    jest.clearAllMocks()
  })

  it('should setup list in localStorage if not exists', () => {
    localStorage.removeItem(WISH_LIST_KEY)
    wishListService.setupListOnLocalStorage()

    const stored = localStorage.getItem(WISH_LIST_KEY)
    expect(stored).not.toBeNull()
    expect(JSON.parse(stored!)).toEqual(mockInitialData)
  })

  it('should return false if item is not on wishlist', () => {
    const result = wishListService.isOnWishList(1)
    expect(result).toBe(false)
  })

  it('should add item to wishlist', async () => {
    await wishListService.add(1)

    const list = JSON.parse(localStorage.getItem(WISH_LIST_KEY)!)
    expect(list.items).toHaveLength(1)
    expect(list.items[0].id).toBe(1)
    expect(list.total).toBe(1)
  })

  it('should remove item if already on wishlist', async () => {
    await wishListService.add(1)
    await wishListService.add(1)
    const list = JSON.parse(localStorage.getItem(WISH_LIST_KEY)!)
    expect(list.items).toHaveLength(0)
    expect(list.total).toBe(0)
  })

  it('should delete item by id', async () => {
    await wishListService.add(1)
    wishListService.deleteById(1)

    const list = JSON.parse(localStorage.getItem(WISH_LIST_KEY)!)
    expect(list.items).toHaveLength(0)
    expect(list.total).toBe(0)
  })

  it('should get wishlist correctly', async () => {
    await wishListService.add(42)
    const result = wishListService.get()

    expect(result).not.toBeNull()
    expect(result!.items[0].id).toBe(42)
  })

  it('should remove list and reset to initial state', () => {
    localStorage.setItem(
      WISH_LIST_KEY,
      JSON.stringify({ total: 3, items: [{ id: 1 }, { id: 2 }, { id: 3 }] })
    )
    wishListService.removeList()
    const list = JSON.parse(localStorage.getItem(WISH_LIST_KEY)!)
    expect(list.items).toHaveLength(0)
    expect(list.total).toBe(0)
  })
})

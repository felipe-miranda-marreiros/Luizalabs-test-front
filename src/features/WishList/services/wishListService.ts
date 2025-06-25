interface WishListProps {
  total: number
  items: {
    id: number
  }[]
}

const initialState: WishListProps = {
  items: [],
  total: 0
}

const WISH_LIST_KEY = 'WISH_LIST'

function isOnWishList(id: number): boolean {
  try {
    const wishList = localStorage.getItem(WISH_LIST_KEY)
    if (!wishList) return false
    const parsedWishList: WishListProps = JSON.parse(wishList)
    return parsedWishList.items.some((item) => item.id === id)
  } catch (error) {
    console.log(error)
    return false
  }
}

function get(): WishListProps | null {
  try {
    const wishList = localStorage.getItem(WISH_LIST_KEY)
    if (!wishList) return null
    const parsedWishList: WishListProps = JSON.parse(wishList)
    return parsedWishList
  } catch (error) {
    console.log(error)
    return null
  }
}

function add(id: number): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      const wishList = localStorage.getItem(WISH_LIST_KEY)
      if (!wishList) return
      const isItemOnList = isOnWishList(id)
      if (isItemOnList) {
        deleteById(id)
        resolve()
        return
      }
      const parsedWishList: WishListProps = JSON.parse(wishList)
      parsedWishList.items.push({ id })
      parsedWishList.total = parsedWishList.items.length
      localStorage.setItem(WISH_LIST_KEY, JSON.stringify(parsedWishList))
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}

function deleteById(id: number): void {
  try {
    const wishList = localStorage.getItem(WISH_LIST_KEY)
    if (!wishList) return
    const parsedWishList: WishListProps = JSON.parse(wishList)
    const updatedWishList = parsedWishList.items.filter(
      (item) => item.id !== id
    )
    parsedWishList.total = updatedWishList.length
    parsedWishList.items = updatedWishList
    localStorage.setItem(WISH_LIST_KEY, JSON.stringify(parsedWishList))
  } catch (error) {
    console.log(error)
  }
}

function removeList(): void {
  try {
    localStorage.removeItem(WISH_LIST_KEY)
    localStorage.setItem(WISH_LIST_KEY, JSON.stringify(initialState))
  } catch (error) {
    console.log(error)
  }
}

function setupListOnLocalStorage(): boolean {
  const localData = localStorage.getItem(WISH_LIST_KEY)
  if (!localData) {
    localStorage.setItem(WISH_LIST_KEY, JSON.stringify(initialState))
  }
  return true
}

export const wishListService = {
  get,
  isOnWishList,
  add,
  deleteById,
  removeList,
  setupListOnLocalStorage
}

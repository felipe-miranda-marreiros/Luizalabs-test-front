import { productAdapters } from '@/entities/Product/services/adapters/productAdapter'
import type { Product } from '@/entities/Product'
import type { WishesAPI } from '../models/wish'
import { wishApi } from './wishApi'

async function wishList(): Promise<Product[]> {
  const response = await wishApi.wishList()
  return productAdapters.productListAdapter(response)
}

async function wishes(): Promise<WishesAPI> {
  const response = await wishApi.wishes()
  return response
}

const initialState: WishesAPI = {
  items: [],
  count: 0
}

const WISH_LIST_KEY = 'WISH_LIST'

function isOnWishList(id: number): boolean {
  try {
    const wishList = localStorage.getItem(WISH_LIST_KEY)
    if (!wishList) return false
    const parsedWishList: WishesAPI = JSON.parse(wishList)
    return parsedWishList.items.some((productId) => productId === id)
  } catch (error) {
    console.log(error)
    return false
  }
}

function get(): WishesAPI | null {
  try {
    const wishList = localStorage.getItem(WISH_LIST_KEY)
    if (!wishList) return null
    const parsedWishList: WishesAPI = JSON.parse(wishList)
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
      const parsedWishList: WishesAPI = JSON.parse(wishList)
      parsedWishList.items.push(id)
      parsedWishList.count = parsedWishList.items.length
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
    const parsedWishList: WishesAPI = JSON.parse(wishList)
    const updatedWishList = parsedWishList.items.filter((item) => item !== id)
    parsedWishList.count = updatedWishList.length
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

function setupListOnLocalStorage(wishes: WishesAPI): boolean {
  try {
    localStorage.setItem(WISH_LIST_KEY, JSON.stringify(wishes))
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

export const wishService = {
  wishList,
  wishes,
  setupListOnLocalStorage,
  removeList,
  isOnWishList,
  add,
  get
}

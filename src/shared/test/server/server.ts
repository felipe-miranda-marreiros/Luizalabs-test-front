import { setupServer } from 'msw/node'
import { productHandlers } from './Product/productHandlers'

export const server = setupServer(...productHandlers)

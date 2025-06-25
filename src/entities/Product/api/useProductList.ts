import { useQuery } from '@tanstack/react-query'
import { productService } from '../services/productService'

export function useProductList() {
  const query = useQuery({
    queryKey: ['PRODUCT_LIST'],
    queryFn: productService.productList
  })

  return query
}

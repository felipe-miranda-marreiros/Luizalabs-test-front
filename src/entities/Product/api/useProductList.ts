import { useQuery } from '@tanstack/react-query'
import { productService } from '../services/productService'
import { QueryKeys } from '@/shared/api'

export function useProductList() {
  const query = useQuery({
    queryKey: [QueryKeys.PRODUCT_LIST],
    queryFn: productService.productList
  })

  return query
}

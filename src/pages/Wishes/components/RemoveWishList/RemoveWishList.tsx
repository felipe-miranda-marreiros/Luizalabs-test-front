import { useRemoveWishList } from '@/entities/Wish'
import { QueryKeys } from '@/shared/api'
import { Button } from '@/shared/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/shared/components/ui/dialog'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

export function RemoveWishList() {
  const [isOpen, setIsOpen] = useState(false)
  const { mutate } = useRemoveWishList()
  const queryClient = useQueryClient()

  function onConfirm() {
    mutate(undefined, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: [QueryKeys.FAVORITE_COUNT]
        })
        await queryClient.invalidateQueries({
          queryKey: [QueryKeys.WISH_LIST],
          type: 'all'
        })
        setIsOpen(false)
      }
    })
  }

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Limpar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Limpar favoritos</DialogTitle>
          <DialogDescription>Seus itens serão removidos.</DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Fechar
            </Button>
          </DialogClose>
          <Button onClick={onConfirm} type="button" variant="destructive">
            Limpar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

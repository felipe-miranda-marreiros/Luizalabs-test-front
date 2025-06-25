function formatterBRL(amount: number): string {
  const BRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
  return BRL.format(amount)
}

export const currencyUtil = {
  formatterBRL
}

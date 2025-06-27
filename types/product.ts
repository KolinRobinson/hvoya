// приклад
type AdditionImage = {
  id: number
  imageUrl: string
  alt: string
}

type ColorOption = {
  id: number
  hex: string
  name: string
}

type Product = {
  id?: number
  slug: string
  name: string
  mainImageUrl: string
  currency: string
  price: number
}

export type Products = Array<Product>

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

export interface SingleProductReview {
  id: string
  rating: number
  review_text: string
  user: string
  created: string
}

export interface SingleProductColor {
  id: string
  image_url: string
  is_main: boolean
  color_name: string
  hex: string
}

export interface SingleProductSubcategory {
  id: string
  name: string
  slug: string
  image_url: string
}

export interface SingleProduct {
  id: string
  name: string
  description: string
  material: string
  depth: number
  width: number
  height: number
  slug: string
  price: string
  stock: number | null
  avg_rating: number
  subcategory: SingleProductSubcategory
  reviews: {
    count: number
    items: SingleProductReview[]
  }
  productcolors: SingleProductColor[]
  created: string
}

export type Products = Array<Product>

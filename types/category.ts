type Subcategory = {
  id: string
  name: string
}

export type Category = {
  id: string
  name: string
  subcategory: Subcategory[]
}

export type Categories = Array<Category>

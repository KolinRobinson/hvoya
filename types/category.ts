type Subcategory = {
  id: string
  name: string
}

export type Category = {
  id: string
  name: string
  subcategory: Subcategory[]
}

export type ApiCategory = {
  id: string
  name: string
  img: string
  created: Date | string
  updated: Date | string
}

export type Categories = Array<Category>

export type ApiCategories = Array<ApiCategory> | null

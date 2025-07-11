export type ApiCategory = {
  id: string
  name: string
  image_url: string
  slug: string
  created: Date | string
  updated: Date | string
}

export type ApiSubcategory = {
  id: string
  created: string
  updated: string
  name: string
  image_url: string
  slug: string
  category: ApiCategory
}

export interface ApiCategoryResponse {
  results: ApiCategory[]
}
export interface ApiSubcategoryResponse {
  results: ApiSubcategory[]
}

export type ApiCategories = Array<ApiCategory>
export type ApiSubcategories = Array<ApiSubcategory>

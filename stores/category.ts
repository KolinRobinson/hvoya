import type {
  ApiCategories,
  ApiSubcategories,
  ApiCategoryResponse,
  ApiSubcategoryResponse,
} from '~/types'

export const useCategoryStore = defineStore('category', {
  state: (): {
    apiSubcategories: ApiSubcategories
    apiCategories: ApiCategories
    loaded: boolean
  } => ({
    apiCategories: [],
    apiSubcategories: [],
    loaded: false,
  }),
  actions: {
    async fetchMainCategories({ force = false } = {}) {
      if (this.loaded && !force) return this.apiCategories

      const { $api } = useNuxtApp()

      try {
        const [categoriesRes, subcategoriesRes] = await Promise.all([
          $api<ApiCategories>('/api/catalog/category/'),
          $api<ApiSubcategories>('/api/catalog/subcategory/'),
        ])
        this.apiCategories = structuredClone(categoriesRes)
        this.apiSubcategories = structuredClone(subcategoriesRes)
        this.loaded = true
      } catch (error) {
        console.warn('[fetchInitialCatalog error]', error)
        this.apiCategories = []
        this.apiSubcategories = []
        this.loaded = false
      }
    },
  },
  getters: {
    categoryMeta: state => (routeId: string) => {
      if (!state.apiCategories) return null

      const category = state.apiCategories.find(item => item.slug === routeId)

      return category
        ? {
            id: category.slug,
            name: category.name,
          }
        : null
    },
    homeCategoriesList: (state): ApiCategories => state.apiCategories,
    getSubcategoryBySlug: state => (slug: string) => {
      if (!state.apiSubcategories) return null

      const subcategoriesBySlug = state.apiSubcategories.filter(item => item.category.slug === slug)

      console.log(subcategoriesBySlug)

      return subcategoriesBySlug
    },
  },
})

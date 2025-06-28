import type { Categories, Category, ApiCategories } from '~/types'

export const useCategoryStore = defineStore('category', {
  state: (): { categories: Categories; apiCategories: ApiCategories; loaded: boolean } => ({
    categories: [
      {
        id: 'furniture',
        name: 'Furniture',
        subcategory: [
          { id: 'sofas', name: 'Sofas' },
          { id: 'chairs', name: 'Chairs' },
          { id: 'tables', name: 'Tables' },
          { id: 'storage', name: 'Storage' },
        ],
      },
      {
        id: 'decor',
        name: 'Decor',
        subcategory: [
          { id: 'lamp', name: 'Lamp' },
          { id: 'mirrors', name: 'Mirrors' },
          { id: 'sculptures', name: 'Sculptures' },
        ],
      },
    ],
    apiCategories: [],
    loaded: false,
  }),
  actions: {
    async fetchMainCategories({ force = false } = {}) {
      console.log('[fetchSwagger] loaded:', this.loaded)
      if (this.loaded && !force) return this.apiCategories

      const { $api } = useNuxtApp()

      try {
        const data = await $api('/api/catalog/')
        this.apiCategories = structuredClone(data.results)
        this.loaded = true
        return this.apiCategories
      } catch (error) {
        console.warn('[fetchSwagger error]', error)
        this.apiCategories = null
        this.loaded = false
        return null
      }
    },
  },
  getters: {
    categoriesList: (state): Categories => state.categories,
    categoryMeta: state => (routeId: string) => {
      const category = state.categories.find((item: Category) => item.id === routeId)
      return category
        ? {
            id: category.id,
            name: category.name,
          }
        : null
    },
    homeCategoriesList: (state): ApiCategories => state.apiCategories,
  },
})

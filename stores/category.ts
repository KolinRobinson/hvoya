import type { Categories, Category } from '~/types'

export const useCategoryStore = defineStore('category', {
  state: (): { categories: Categories } => ({
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
  }),

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
  },
})

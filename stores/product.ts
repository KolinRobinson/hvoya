import type { SingleProduct, Products } from '~/types'

export const useProductStore = defineStore('product', {
  state: (): { newArrivalProducts: Products; actualProduct: Partial<SingleProduct> } => ({
    newArrivalProducts: [
      {
        mainImageUrl: '/images/arrivals-1.jpg',
        name: 'Wooden cart',
        price: 1000,
        currency: '$',
        slug: 'product1',
      },
      {
        mainImageUrl: '/images/arrivals-2.jpg',
        name: 'Lamp MVDA',
        price: 1000,
        currency: '$',
        slug: 'product2',
      },
      {
        mainImageUrl: '/images/arrivals-3.jpg',
        name: 'Wooden chair',
        price: 1000,
        currency: '$',
        slug: 'product3',
      },
      {
        mainImageUrl: '/images/arrivals-4.jpg',
        name: 'Vase Lipari',
        price: 1000,
        currency: '$',
        slug: 'product4',
      },
    ],
    actualProduct: {},
  }),

  actions: {
    async fetchProductBySlug(productSlug: string): Promise<Partial<SingleProduct>> {
      const { $api } = useNuxtApp()

      try {
        const actualProductRes = await $api(`/api/products/${productSlug}`)
        this.actualProduct = structuredClone(actualProductRes)
        console.log(this.actualProduct)
        return this.actualProduct
      } catch (error) {
        console.warn('[fetchInitialCatalog error]', error)
        this.actualProduct = {}
        return {}
      }
    },
  },

  getters: {
    arrivalProductList: (state): Products => state.newArrivalProducts,

    productMeta: state => (routeId: string) => {
      if (!state.actualProduct) return null
      const product = state.actualProduct
      return product
        ? {
            id: product.slug,
            name: product.name,
          }
        : null
    },
  },
})

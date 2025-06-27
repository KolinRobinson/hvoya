import type { Products } from '~/types'

export const useProductStore = defineStore('product', {
  state: (): { newArrivalProducts: Products } => ({
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
  }),

  getters: {
    arrivalProductList: (state): Products => state.newArrivalProducts,
  },
})

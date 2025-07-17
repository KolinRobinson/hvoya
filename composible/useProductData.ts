import { useRoute } from 'vue-router'
import { useProductStore } from '~/stores/product'
import type { SingleProduct } from '~/types'

export function useProductData() {
  const route = useRoute()
  const productStore = useProductStore()

  const actualColor = ref<string | undefined>(
    productStore.actualProduct.productcolors?.[0]?.color_name
  )
  const count = ref<number>(1)

  const {
    data: productData,
    pending,
    error,
  } = useAsyncData(
    'product',
    async () => {
      const { $api } = useNuxtApp()
      const res = await $api<SingleProduct>(`/api/products/${route.params.product}`)
      productStore.actualProduct = structuredClone(res)
      actualColor.value = res.productcolors?.[0]?.color_name ?? ''

      return res
    },
    { server: true }
  )

  const product = computed(() => productData.value)

  const productColors = computed(() => product.value?.productcolors ?? [])

  function setActualColor(color: string) {
    actualColor.value = color
  }

  return {
    product,
    productColors,
    actualColor,
    setActualColor,
    count,
    pending,
    error,
  }
}

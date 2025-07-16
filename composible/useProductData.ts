import { useRoute } from 'vue-router'
import { useProductStore } from '~/stores/product'
import type { SingleProduct } from '~/types'

export function useProductData() {
  const route = useRoute()
  const productStore = useProductStore()
  const actualColor = ref<string | undefined>(undefined)

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
      return res
    },
    { server: true }
  )

  const product = computed(() => productData.value)
  const productColors = computed(() => product.value?.productcolors ?? [])

  const defaultColor = computed(() => productColors.value[0]?.color_name)
  actualColor.value = defaultColor.value

  function setActualColor(color: string) {
    actualColor.value = color
  }

  return {
    product,
    productColors,
    actualColor,
    setActualColor,
    pending,
    error,
  }
}

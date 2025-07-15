<script setup lang="ts">
const route = useRoute()

import { useProductStore } from '~/stores/product'

const actualProduct = useProductStore()

const { pending } = await useAsyncData(
  'single-product-data',
  async () => {
    await actualProduct.fetchProductBySlug('0c3b40dd-83f9-4c78-a94f-d5fefc898832')
  },
  {
    server: true,
  }
)

const actualColor = ref<string | undefined>()

watchEffect(() => {
  const colors = actualProduct.actualProduct?.productcolors
  if (colors?.length) {
    actualColor.value = colors[0].color_name
  }
})

console.log('pending', pending)
</script>

<template>
  <section class="pt-3 pb-8 px-[1.25rem]">
    <ui-breadcrumbs class="mb-4"></ui-breadcrumbs>
    <article>
      <product-page-carousel
        v-if="!pending"
        :images="actualProduct.actualProduct.productcolors"
        :actual-color="actualColor"
      />
    </article>
  </section>
</template>

<style scoped></style>

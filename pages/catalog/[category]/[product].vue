<script setup lang="ts">
import { useProductData } from '~/composible/useProductData'
import type { SingleProductColor } from '~/types'

const { product, productColors, actualColor, setActualColor, pending, error, count } =
  useProductData()

const filteredColors = computed(() => {
  console.log(product.value)
  const seen = new Set<string>()
  return productColors.value.filter((color: SingleProductColor) => {
    const key = color.color_name
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
})
</script>

<template>
  <section class="pt-3 pb-8 px-[1.25rem]">
    <ui-breadcrumbs class="mb-4"></ui-breadcrumbs>
    <article v-if="product">
      <product-page-carousel :images="productColors" :actual-color="actualColor" />
      <div class="flex flex-col pt-4 gap-[2rem]">
        <div class="flex flex-col gap-[1.5rem]">
          <h1 class="text-xl">{{ product.name }}</h1>
          <ui-rating-with-reviews :average-rating="product.avg_rating" :review-count="10" />
          <p class="">{{ product.description }}</p>
        </div>
        <ui-color-picker :colors="filteredColors" v-model:activeColor="actualColor" />
        <div class="flex flex-col gap-[1.25rem]">
          <span class="font-medium text-xl">{{ 'UAH ' + product.price }}</span>
          <div class="flex items-center gap-[1.5rem]">
            <ui-counter v-model:count="count" />
            <ui-button type="primary" class="w-full">Add to cart</ui-button>
          </div>
        </div>
        <div class="flex flex-col">
          <ui-accordion v-if="product.material">
            <template #title>
              <p>Materials</p>
            </template>
            <p class="mt-2">{{ product.material }}</p>
          </ui-accordion>
          <ui-accordion v-if="product.height || product.width || product.depth">
            <template #title>
              <p>Sizes</p>
            </template>
            <div class="mt-2 flex flex-col gap-[0.75rem]">
              <p v-if="product.height">{{ 'Height: ' + product.height + 'cm' }}</p>
              <p v-if="product.width">{{ 'Width: ' + product.width + 'cm' }}</p>
              <p v-if="product.depth">{{ 'Depth: ' + product.depth + 'cm' }}</p>
            </div>
          </ui-accordion>
          <ui-accordion>
            <template #title>
              <p>Delivery</p>
            </template>
            <p class="mt-2">We will deliver in 7 days</p>
          </ui-accordion>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped></style>

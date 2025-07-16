<script setup lang="ts">
import { useProductData } from '~/composible/useProductData'

const { product, productColors, actualColor, setActualColor, pending, error } = useProductData()
console.log('pending', pending)
console.log(product)
</script>

<template>
  <section class="pt-3 pb-8 px-[1.25rem]">
    <ui-breadcrumbs class="mb-4"></ui-breadcrumbs>
    <article v-if="product">
      <product-page-carousel :images="productColors" :actual-color="actualColor" />
      <div class="flex flex-col pt-4 gap-[2rem]">
        <div class="flex flex-col gap-[1.5rem]">
          <h1 class="text-xl">{{ product.name }}</h1>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped></style>

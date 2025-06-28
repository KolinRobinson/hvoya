<script setup lang="ts">
import { useCategoryStore } from '~/stores/category'
const categories = useCategoryStore()

await useAsyncData('swagger', () => categories.fetchMainCategories(), {
  server: true,
  lazy: true,
})

definePageMeta({
  breadcrumbs: 'Home',
})
</script>

<template>
  <home-page-hero />
  <home-page-arrivals />
  <home-page-categories />
  <home-page-concept />
</template>

<style scoped></style>

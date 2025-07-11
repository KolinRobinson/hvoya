<script setup lang="ts">
import { useCategoryStore } from '~/stores/category'
const categories = useCategoryStore()
</script>

<template>
  <section
    class="flex flex-col px-[1.25rem] gap-[2rem] xs:flex-row xs:gap-[0] mt-5 sm:mt-9 lg:px-[3.75rem] xl:mt-15"
  >
    <category-card
      v-for="category in categories.homeCategoriesList"
      class="xs:w-1/2"
      :main-image="category.image_url"
      :title="category.name"
      :slug="category.slug"
      :key="category.id"
    />
  </section>
</template>

<style scoped></style>

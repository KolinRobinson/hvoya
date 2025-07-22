<script setup lang="ts">
import { useCategoryStore } from '~/stores/category'

const categories = useCategoryStore()

await useAsyncData(
  'main-categories-data',
  async () => {
    const data = await categories.fetchMainCategories()
    return data
  },
  {
    server: true,
    lazy: true,
  }
)
</script>

<template>
  <div class="flex flex-col w-full min-h-[100vh] bg-neutral-200">
    <LayoutsHeader />
    <main class="pt-6 md:pt-8">
      <slot></slot>
    </main>
    <LayoutsFooter />
  </div>
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
import { useWebsiteStore } from '~/stores'
const website = useWebsiteStore()

await useAsyncData('swagger', () => website.fetchSwagger(), {
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
</template>

<style scoped></style>

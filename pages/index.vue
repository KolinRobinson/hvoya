<script setup lang="ts">
import { useWebsiteStore } from '~/stores'
const website = useWebsiteStore()

await useAsyncData('swagger', () => website.fetchSwagger(), {
  server: true,
})
</script>

<template>
  <div>
    <h1 class="font-brand">Home Page</h1>
    <pre v-if="website.swaggerData">
    {{ website.swaggerData.swagger }}
  </pre>
  </div>
</template>

<style scoped></style>

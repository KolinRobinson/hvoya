<script setup lang="ts">
import { useWebsiteStore } from '~/stores'
const website = useWebsiteStore()

await website.fetchSwagger()
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

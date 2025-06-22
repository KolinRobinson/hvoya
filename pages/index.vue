<script setup lang="ts">
import { useWebsiteStore } from '~/stores'

const website = useWebsiteStore()

await callOnce(website.testFetch)
</script>

<template>
  <div>
    <h1 class="font-brand">Home Page</h1>
  </div>
</template>

<style scoped></style>

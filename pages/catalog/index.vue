<script setup lang="ts">
import { boolean } from 'zod'

definePageMeta({
  breadcrumbs: 'Catalogue',
})

const isTestChecked = ref<boolean>(true)
</script>

<template>
  <h1>catalog</h1>
  <ui-breadcrumbs></ui-breadcrumbs>
  <ui-checkbox v-model:checked="isTestChecked"></ui-checkbox>
</template>

<style scoped></style>

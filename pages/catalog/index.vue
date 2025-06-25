<script setup lang="ts">
definePageMeta({
  breadcrumbs: 'Catalogue',
})

const isTestChecked = ref<boolean>(true)
const input1Value = ref<string>('')
</script>

<template>
  <h1>catalog</h1>
  <ui-breadcrumbs></ui-breadcrumbs>
  <ui-checkbox v-model:checked="isTestChecked"></ui-checkbox>
  <ui-input :input-value="input1Value" placeholder="aaaa" required type="text"></ui-input>
</template>

<style scoped></style>

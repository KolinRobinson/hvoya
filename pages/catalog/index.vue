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
  <ui-button type="primary">primary</ui-button>
  <ui-button type="icon" icon-name="common/close">icon</ui-button>
  <ui-button type="textIcon">textIcon</ui-button>
  <ui-button type="small">small</ui-button>
  <ui-button type="outlined">outlined</ui-button>
  <ui-button type="secondary">secondary</ui-button>
</template>

<style scoped></style>

<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <h1>category ID: {{ route.params.category }}</h1>
  <ui-breadcrumbs></ui-breadcrumbs>
</template>

<style scoped></style>

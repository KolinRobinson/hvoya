<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <h1>Товар ID: {{ route.params.id }}</h1>
</template>

<style scoped></style>

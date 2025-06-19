<script setup lang="ts">
</script>

<template>
<div class="main-layout">
  <slot></slot>
</div>
</template>

<style scoped lang="scss">
.main-layout{
  display: grid;
  grid-template-columns: 3fr 1fr;
}
</style>

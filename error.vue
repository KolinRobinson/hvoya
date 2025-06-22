<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center text-center px-4">
    <h1 class="text-5xl font-bold">404 - Сторінку не знайдено</h1>
    <p class="mt-4 text-gray-600">
      Ми не змогли знайти цю сторінку. Можливо, вона була видалена або ви ввели неправильну адресу.
    </p>
    <NuxtLink to="/" class="mt-6 text-blue-500 underline">Повернутись на головну</NuxtLink>
  </div>
</template>

<style scoped></style>

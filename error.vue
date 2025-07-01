<script setup lang="ts">
definePageMeta({})
</script>

<template>
  <NuxtLayout name="default">
    <div
      class="h-[calc(100vh-4rem)] flex flex-col items-center justify-start text-center px-2 sm:pt-8 md:pt-15"
    >
      <h1 class="text-[8rem] font-medium text-taupe">404</h1>
      <p class="text-black font-medium text-xl">The page was not found</p>
      <NuxtLink to="/" class="link-btn !px-9 mt-5 z-10">Повернутись на головну</NuxtLink>

      <nuxt-icon
        name="common/404_illustrations_pt2"
        class="absolute right-0 bottom-2 w-14 sm:bottom-12 xl:bottom-16 xl:w-18"
        filled
      />
      <layouts-404-svg
        class="absolute right-21 bottom-2 w-17 sm:bottom-12 xl:bottom-16 xl:right-25"
      />
    </div>
  </NuxtLayout>
</template>

<style scoped>
.nuxt-icon::v-deep svg {
  width: 100% !important;
  height: auto !important;
}
</style>

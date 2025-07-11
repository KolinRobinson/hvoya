<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    mainImage?: string
    slug: string
  }>(),
  {
    title: 'Category title',
    mainImage: '/images/submenu_image.png',
  }
)

function goToSingleCategory(slug: string): void {
  const router = useRouter()
  router.push(`/catalog/${slug}`)
}
</script>

<template>
  <article class="flex flex-col gap-[1.5rem]" @click="goToSingleCategory(props.slug)">
    <nuxt-img :src="props.mainImage" class="w-full aspect-1" />
    <h3 class="text-xl font-medium">{{ props.title }}</h3>
  </article>
</template>

<style scoped></style>

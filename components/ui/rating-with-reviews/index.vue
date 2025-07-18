<script setup lang="ts">
import RatingStars from './rating-star.vue'

const props = defineProps<{
  averageRating: number
  reviewCount: number
  isShowLink: boolean
}>()

const maxStars = computed(() => Math.floor(props.averageRating))
const lastStarFill = computed(() => {
  if (props.averageRating > Math.trunc(props.averageRating))
    return (props.averageRating - Math.trunc(props.averageRating)) * 100
  return 100
})
</script>

<template>
  <div class="flex gap-[1rem] items-center">
    <client-only>
      <div class="flex items-center gap-[0.25rem]">
        <rating-stars
          v-for="idx in maxStars"
          :key="idx"
          :fill-percent="idx === maxStars ? lastStarFill : 100"
        />
      </div>
    </client-only>
    <nuxt-link v-if="isShowLink" to="#reviews" class="underline">
      {{ reviewCount + ' ' + (reviewCount > 1 ? 'Reviews' : 'Review') }}
    </nuxt-link>
  </div>
</template>

<style scoped></style>

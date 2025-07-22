<script setup lang="ts">
import type { SingleProductReview } from '~/types'

const props = defineProps<{
  review: SingleProductReview
}>()

const formattedDate = computed(() => {
  const date = new Date(props.review.created)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0') // +1 бо getMonth() дає 0-11
  const year = date.getFullYear()
  return `${day}.${month}.${year}`
})
</script>

<template>
  <div class="py-[0.75rem] flex flex-col gap-[1.25rem]">
    <ui-rating-with-reviews
      :average-rating="review.rating"
      :is-show-link="false"
      :review-count="10"
    />

    <div class="flex gap-[1.25rem] items-center">
      <h3 class="font-medium">{{ review.user }}</h3>
      <time :datetime="review.created">{{ formattedDate }}</time>
    </div>

    <p>{{ review.review_text }}</p>
  </div>
</template>

<style scoped></style>

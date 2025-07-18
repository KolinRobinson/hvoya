<script setup lang="ts">
import type { SingleProductReview } from '~/types'
import SingleReview from '~/components/ui/reviews/single-review.vue'

const props = defineProps<{
  reviews: Array<SingleProductReview>
}>()
</script>

<template>
  <ul class="flex flex-col gap-[1.5rem]">
    <li v-for="review in reviews" :key="review.id">
      <single-review :review="review" />
    </li>
  </ul>
</template>

<style scoped></style>

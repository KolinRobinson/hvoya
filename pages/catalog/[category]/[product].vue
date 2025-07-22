<script setup lang="ts">
import { useProductData } from '~/composible/useProductData'
import type { SingleProductColor } from '~/types'

const { product, productColors, actualColor, setActualColor, pending, error, count } =
  useProductData()

const filteredColors = computed(() => {
  console.log(product.value)
  const seen = new Set<string>()
  return productColors.value.filter((color: SingleProductColor) => {
    const key = color.color_name
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
})

const route = useRoute()
const reqURL = useRequestURL()

const fullUrl = computed(() => {
  return `${reqURL.origin}${route.fullPath}`
})
</script>

<template>
  <article class="pt-3 pb-8 px-[1.25rem] flex flex-col lg:px-[3.75rem] lg:pt-5">
    <!-- Schema.org Product -->
    <SchemaOrgProduct
      v-if="product"
      :name="product.name"
      :description="product.description"
      :sku="product.id"
      :material="product.material"
      :category="product.subcategory.name"
      :image="productColors[0].image_url"
      :brand="{ name: 'Hvoya' }"
      :offers="{
        '@type': 'Offer',
        price: product.price,
        priceCurrency: 'UAH',
        availability:
          product.stock !== null && product.stock > 0
            ? 'https://schema.org/InStock'
            : 'https://schema.org/OutOfStock',
        url: fullUrl,
      }"
      :aggregateRating="{
        '@type': 'AggregateRating',
        ratingValue: product.avg_rating,
        reviewCount: product.reviews.count,
      }"
      :review="
        product.reviews.items.map(r => ({
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: r.rating,
          },
          author: {
            '@type': 'Person',
            name: r.user,
          },
          reviewBody: r.review_text,
          datePublished: r.created,
        }))
      "
      :additionalProperty="[
        { '@type': 'PropertyValue', name: 'Width', value: product.width + 'cm' },
        { '@type': 'PropertyValue', name: 'Height', value: product.height + 'cm' },
        { '@type': 'PropertyValue', name: 'Depth', value: product.depth + 'cm' },
      ]"
    />

    <ui-breadcrumbs class="mb-4 lg:mb-5"></ui-breadcrumbs>
    <section v-if="product" class="md:flex md:gap-[1.5rem]">
      <product-page-carousel :images="productColors" :actual-color="actualColor" />
      <div class="flex flex-col pt-4 gap-[2rem] md:w-2/5 xl:w-2/5">
        <div class="flex flex-col gap-[1.5rem]">
          <h1 class="text-xl">{{ product.name }}</h1>
          <ui-rating-with-reviews
            :average-rating="product.avg_rating"
            :is-show-link="true"
            :review-count="10"
          />
          <p class="">{{ product.description }}</p>
        </div>
        <ui-color-picker :colors="filteredColors" v-model:activeColor="actualColor" />
        <div class="flex flex-col gap-[1.25rem]">
          <span class="font-medium text-xl">{{ 'UAH ' + product.price }}</span>
          <div class="flex items-center gap-[1.5rem]">
            <ui-counter v-model:count="count" />
            <ui-button type="primary" class="w-full">Add to cart</ui-button>
          </div>
        </div>
        <div class="flex flex-col">
          <ui-accordion v-if="product.material">
            <template #title>
              <p>Materials</p>
            </template>
            <p class="mt-2">{{ product.material }}</p>
          </ui-accordion>
          <ui-accordion v-if="product.height || product.width || product.depth">
            <template #title>
              <p>Sizes</p>
            </template>
            <div class="mt-2 flex flex-col gap-[0.75rem]">
              <p v-if="product.height">{{ 'Height: ' + product.height + 'cm' }}</p>
              <p v-if="product.width">{{ 'Width: ' + product.width + 'cm' }}</p>
              <p v-if="product.depth">{{ 'Depth: ' + product.depth + 'cm' }}</p>
            </div>
          </ui-accordion>
          <ui-accordion>
            <template #title>
              <p>Delivery</p>
            </template>
            <p class="mt-2">We will deliver in 7 days</p>
          </ui-accordion>
        </div>
      </div>
    </section>
    <section class="py-3">
      <h2>Curated Selections</h2>
    </section>
    <section class="pt-5" v-if="product" id="reviews">
      <h2 class="mb-3 font-medium text-xl">Reviews</h2>
      <div class="flex flex-col gap-[2.5rem]">
        <div class="flex flex-col gap-[1rem]">
          <div class="flex gap-[1.25rem]">
            <p class="font-medium text-2xl">{{ product.avg_rating }}</p>
            <ui-rating-with-reviews
              :average-rating="product.avg_rating"
              :is-show-link="false"
              :review-count="10"
            />
          </div>
          <p>Based on {{ product.reviews.count }} review</p>
        </div>
        <ui-reviews :reviews="product.reviews.items" />
        <ui-button v-if="product.reviews.count > 5" type="primary" class="w-full"
          >Write a review</ui-button
        >
      </div>
    </section>
  </article>
</template>

<style scoped></style>

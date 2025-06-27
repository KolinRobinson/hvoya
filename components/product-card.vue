<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    mainImage: string
    currency: string
    price: number
  }>(),
  {
    title: 'Product title',
    mainImage: '/images/submenu_image.png',
    price: 1000,
    currency: '$',
  }
)
</script>

<template>
  <article class="flex flex-col gap-[0.75rem]">
    <!-- Schema.org Product -->
    <SchemaOrgProduct
      :name="props.title"
      :image="props.mainImage"
      :offers="{
        price: props.price,
        priceCurrency: props.currency === '$' ? 'USD' : 'UAH',
        availability: 'https://schema.org/InStock',
      }"
    />

    <nuxt-img :src="props.mainImage" class="w-full acpect-2/4" />

    <div class="flex flex-col gap-[0.5rem] text-base">
      <p class="font-medium text-black">{{ props.title }}</p>
      <p class="text-neutral">
        <span>{{ props.currency }}</span
        ><span>{{ props.price }}</span>
      </p>
    </div>
  </article>
</template>

<style scoped></style>

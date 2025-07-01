<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import { useProductStore } from '~/stores/product'

const productStore = useProductStore()

const route = useRoute()
const router = useRouter()

const splideRef = ref<any>()
const currentSlide = ref(0)
const totalSlides = ref(0)
const isEnd = ref(false)
const goPrev = () => splideRef.value?.splide?.go('<')
const goNext = () => splideRef.value?.splide?.go('>')

onMounted(() => {
  const splide = splideRef.value?.splide
  if (!splide) return

  splide.on('mounted move updated', () => {
    currentSlide.value = splide.index
    totalSlides.value = splide.length
    isEnd.value = splide.index >= splide.length - splide.options.perPage
  })
})

const options = {
  perPage: 4,
  perMove: 1,
  scrollPerPage: false,
  gap: '1.5rem',
  arrows: false,
  pagination: false,
  breakpoints: {
    640: {
      perPage: 2,
    },
    1024: {
      perPage: 3,
    },
  },
}

function goToProduct(productID: string) {
  console.log(productID)
}
</script>

<template>
  <section class="flex flex-col mt-5 px-[1.25rem] gap-[2rem] sm:mt-9 lg:px-[3.75rem] xl:mt-15">
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-medium sm:text-3xl">New arrivals</h2>

      <div class="hidden justify-end gap-[2.5rem] items-center sm:flex">
        <button
          @click="goPrev"
          :disabled="currentSlide === 0"
          class="btn-prev text-black disabled:text-neutral-700"
        >
          <nuxt-icon name="common/left-arrow"></nuxt-icon>
        </button>
        <button
          @click="goNext"
          :disabled="isEnd"
          class="btn-next text-black disabled:text-neutral-700"
        >
          <nuxt-icon name="common/right-arrow"></nuxt-icon>
        </button>
      </div>
    </div>
    <Splide ref="splideRef" :options="options" class="product-carousel">
      <SplideSlide v-for="item in productStore.newArrivalProducts" :key="item.slug">
        <ProductCard
          :title="item.name"
          :mainImage="item.mainImageUrl"
          :currency="item.currency"
          :price="item.price"
          @click.native="goToProduct(item.slug)"
        />
      </SplideSlide>
    </Splide>

    <div class="flex justify-end gap-[2.5rem] items-center sm:hidden">
      <button
        @click="goPrev"
        :disabled="currentSlide === 0"
        class="btn-prev text-black disabled:text-neutral-700"
      >
        <nuxt-icon name="common/left-arrow"></nuxt-icon>
      </button>
      <button
        @click="goNext"
        :disabled="isEnd"
        class="btn-next text-black disabled:text-neutral-700"
      >
        <nuxt-icon name="common/right-arrow"></nuxt-icon>
      </button>
    </div>
  </section>
</template>

<style scoped></style>

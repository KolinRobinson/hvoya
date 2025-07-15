<script setup lang="ts">
import type { SingleProductColor } from '~/types'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

const props = withDefaults(
  defineProps<{
    images?: Array<SingleProductColor>
    actualColor?: string
  }>(),
  {
    images: () => [],
    actualColor: 'default',
  }
)

const mainRef = ref()
const thumbRef = ref()

const mainOptions = {
  type: 'fade',
  arrows: false,
  heightRatio: 1.1,
  cover: true,
  focus: 'center',
  pagination: false,
  breakpoints: {
    767: {
      pagination: true,
    },
  },
}

const thumbOptions = {
  fixedWidth: 88,
  fixedHeight: 111,
  height: '100%',
  isNavigation: true,
  gap: 10,
  direction: 'ttb',
  pagination: false,
  cover: true,
  arrows: false,
}

watchEffect(async () => {
  if (props.images?.length && mainRef.value?.sync && thumbRef.value?.splide) {
    await nextTick()
    mainRef.value.sync(thumbRef.value.splide)
  }
})
console.log(props.images)
</script>

<template>
  <div class="w-full flex md:w-2/3">
    <Splide :options="thumbOptions" ref="thumbRef" class="thumbnail-slider hidden md:block w-11">
      <SplideSlide v-for="(img, i) in images" :key="i">
        <nuxt-img :src="img.image_url" class="w-20 h-20 object-cover cursor-pointer" />
      </SplideSlide>
    </Splide>

    <Splide
      :options="mainOptions"
      id="main-carousel"
      ref="mainRef"
      class="w-full h-fit md:ml-3 md:!sticky md:top-8"
    >
      <SplideSlide v-for="(img, i) in images" :key="i" class="">
        <nuxt-img :src="img.image_url" class="w-full h-auto object-cover aspect-9/10" />
      </SplideSlide>
    </Splide>
  </div>
</template>

<style scoped>
.splide::v-deep .splide__pagination__page {
  width: 12px;
  height: 12px;
  border: 1px solid black;
  background: none;
  opacity: 1;
}
.splide::v-deep .splide__pagination__page.is-active {
  transform: none;
  background: black;
}

.thumbnail-slider::v-deep .splide__slide.is-active {
  border: 2px solid #68584f !important;
}
</style>

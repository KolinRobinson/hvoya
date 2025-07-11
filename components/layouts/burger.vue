<script setup lang="ts">
import { onMounted, watch, ref } from 'vue'
import { gsap } from 'gsap'

// ✅ пропса isOpen з дефолтним значенням false
const props = withDefaults(defineProps<{ isOpen: boolean }>(), {
  isOpen: false,
})

// 🔗 посилання на SVG
const burgerIcon = ref<SVGSVGElement | null>(null)

// 🎬 GSAP timeline
const tl = gsap.timeline({ paused: true })

onMounted(() => {
  const line1 = burgerIcon.value?.querySelector('#line1')
  const line2 = burgerIcon.value?.querySelector('#line2')
  const line3 = burgerIcon.value?.querySelector('#line3')

  if (!line1 || !line2 || !line3) return

  // ✅ Явна ініціалізація стану для плавного reverse
  gsap.set(line1, { rotation: 0, x: 0, y: 0, scaleX: 1 })
  gsap.set(line2, { scaleX: 1, opacity: 1 })
  gsap.set(line3, { rotation: 0, x: 0, y: 0, scaleX: 1 })

  tl.to(
    line2,
    {
      scaleX: 0,
      opacity: 0,
      transformOrigin: 'left center',
      duration: 0.25,
      ease: 'power2.inOut',
    },
    0
  )

  tl.to(
    [line1, line3],
    {
      scaleX: 1.125,
      x: -1,
      transformOrigin: 'left center',
      duration: 0.5,
      ease: 'power2.out',
    },
    0.1
  )

  tl.to(
    line1,
    {
      rotation: 45,
      x: -12,
      y: -18,
      scaleX: 1.125,
      transformOrigin: 'left center',
      duration: 0.5,
      ease: 'power2.easeInOutQuad',
    },
    0.5
  )

  tl.to(
    line3,
    {
      rotation: -45,
      y: 13.5,
      scaleX: 1.125,
      transformOrigin: 'left center',
      duration: 0.5,
      ease: 'power2.easeInOutQuad',
    },
    0.5
  )
})

// 🎯 Режим відкриття/закриття по пропсі
watch(
  () => props.isOpen,
  open => {
    if (open) tl.play()
    else tl.reverse()
  },
  { immediate: true }
)
</script>

<template>
  <svg
    id="burgerIcon"
    width="20"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="isOpen ? 'is-open' : ''"
    ref="burgerIcon"
  >
    <rect id="line1" y="14.5" width="16" height="1.5" rx="0.75" fill="black" />
    <rect id="line2" y="7.25" width="16" height="1.5" rx="0.75" fill="black" />
    <rect id="line3" width="16" height="1.5" rx="0.75" fill="black" />
  </svg>
</template>

<style scoped>
svg {
  width: fit-content;
  height: auto;
}
svg::v-deep rect {
  transform-box: fill-box;
  transform-origin: left center !important;
}
</style>

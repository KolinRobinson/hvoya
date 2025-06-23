<script setup lang="ts">
import { gsap } from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

gsap.registerPlugin(MorphSVGPlugin)

const props = withDefaults(
  defineProps<{
    checked?: boolean
    text?: string
  }>(),
  {
    checked: false,
    text: 'Option',
  }
)

const emit = defineEmits<{
  (e: 'update:checked', value: boolean): void
}>()

const boxPath = ref<SVGPathElement | null>(null)
const checkPath = ref<SVGPathElement | null>(null)

// Контури
const defaultBoxD = 'M3 21V3H21L19.5 4.5H4.5V19.5H19.5V4.5L21 3V21H3Z'
const activeBoxD = 'M3 21V3H21.1L19.6 4.5H4.5V19.5H19.5V10.925L21 9.425V21H3Z'
const checkSteps = [
  'M11.525 16.8L11.525 16.8',
  'M11.525 16.8L8.75 13.2',
  'M11.525 16.8L5.975 11.25L7.025 10.25L12.575 15.8Z',
  'M11.525 16.7999L5.975 11.2499L7.025 10.1999L11.525 14.6999L21.075 5.1499L22.125 6.1999L11.525 16.7999Z',
]

onMounted(() => {
  if (checkPath.value) {
    const currentD = props.checked ? checkSteps[checkSteps.length - 1] : checkSteps[0]
    checkPath.value.setAttribute('d', currentD)
  }

  if (boxPath.value) {
    boxPath.value.setAttribute('d', props.checked ? activeBoxD : defaultBoxD)
  }
})

// Таймлайни
const boxTimeline = gsap.timeline({ defaults: { duration: 0.2, ease: 'power2.out' } })
const checkTl = gsap.timeline({ paused: true })

watch(
  () => props.checked,
  checked => {
    boxTimeline.clear()
    checkTl.clear().pause(0)

    if (checked) {
      // Кроки чекед
      checkSteps.forEach((d, i) => {
        checkTl.to(
          checkPath.value,
          {
            morphSVG: { shape: d, shapeIndex: 0 },
            duration: 0.15,
            ease: 'power2.out',
          },
          i * 0.2
        )
      })

      boxTimeline.to(boxPath.value, {
        morphSVG: activeBoxD,
        duration: 0.2,
        ease: 'power2.out',
        onComplete: () => {
          checkTl.restart()
        },
      })
    } else {
      const reversedSteps = [...checkSteps].reverse()

      reversedSteps.forEach((d, i) => {
        checkTl.to(
          checkPath.value,
          {
            morphSVG: { shape: d, shapeIndex: 0 },
            duration: 0.15,
            ease: 'power2.inOut',
          },
          i * 0.2
        )
      })

      checkTl.add(() => {
        boxTimeline.to(boxPath.value, {
          morphSVG: defaultBoxD,
          duration: 0.2,
          ease: 'power2.out',
        })
      })

      checkTl.restart()
    }
  }
)

function toggleActive(): void {
  emit('update:checked', !props.checked)
}
</script>

<template>
  <label
    class="flex gap-1 items-center gap-[1.5rem] w-fit hover:text-gray-90 transition-colors ease-in cursor-pointer"
  >
    <input type="checkbox" :checked="props.checked" class="sr-only" @change="toggleActive" />

    <svg viewBox="0 0 24 24" class="w-3 h-3 fill: currentColor;" xmlns="http://www.w3.org/2000/svg">
      <path
        ref="boxPath"
        d="M3 21V3H21L19.5 4.5H4.5V19.5H19.5V4.5L21 3V21H3Z"
        fill="currentColor"
      />
      <path ref="checkPath" d="M11.525 16.8L11.525 16.8" fill="currentColor" />
    </svg>

    <span>{{ props.text }}</span>
  </label>
</template>

<style scoped></style>

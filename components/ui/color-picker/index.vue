<script setup lang="ts">
import type { SingleProductColor } from '~/types'
import SingleColor from '~/components/ui/color-picker/single-color.vue'

const props = defineProps<{
  colors: SingleProductColor[]
  activeColor?: string
}>()

const emit = defineEmits<{
  (e: 'update:activeColor', value: string): void
}>()

const modelProxy = computed({
  get: () => props.activeColor,
  set: (val: string) => emit('update:activeColor', val),
})
</script>

<template>
  <div class="flex items-center gap-[1.25rem]">
    <client-only>
      <SingleColor
        v-for="color in props.colors"
        :key="color.id"
        :color-name="color.color_name"
        v-model="modelProxy"
      />
    </client-only>
  </div>
</template>

<style scoped></style>

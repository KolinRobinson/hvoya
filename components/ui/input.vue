<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

import { useInputLogic } from '~/composible/useInputLogic'

const props = defineProps<{
  inputValue: string
}>()
const emit = defineEmits(['update:inputValue'])

const { value, onChange, attrs } = useInputLogic(props, emit)
</script>

<template>
  <label class="w-fit flex">
    <slot name="before" />
    <input
      class="border-[1px] min-h-4 px-2 py-[14px] border-gray-60 text-gray focus:border-gray focus:text-black outline-0 valid:text-black valid:border-black"
      v-model="value"
      v-bind="attrs"
      @input="onChange"
    />
    <slot name="after" />
  </label>
</template>

<style scoped></style>

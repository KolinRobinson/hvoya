<script setup lang="ts">
const props = defineProps<{
  count: number
}>()

const emit = defineEmits(['update:count'])

function decrement() {
  if (props.count > 1) emit('update:count', props.count - 1)
}

function increment() {
  if (props.count < 10) emit('update:count', props.count + 1)
}
</script>

<template>
  <div class="flex items-center gap-[1rem] p-[0.75rem] border border-black">
    <nuxt-icon fill="none" name="common/minus" @click="decrement" />
    <span class="w-2 text-sm text-center">{{ props.count }}</span>
    <nuxt-icon fill="none" name="common/plus2" @click="increment" />
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
const props = defineProps<{
  modelValue?: string
  colorName: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function handleChange() {
  emit('update:modelValue', props.colorName)
}

const modelValueProxy = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
})

function capitalizeFirstLetter(val: string): string {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1)
}
</script>

<template>
  <label class="flex items-center gap-[1rem]" role="radio">
    <input type="radio" name="colorPicker" :value="colorName" v-model="modelValueProxy" />
    <span class="text-sm">{{ capitalizeFirstLetter(colorName) }}</span>
  </label>
</template>

<style scoped>
input[type='radio'] {
  appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid #ccc8c8;
  border-radius: 50%;
  background-color: white;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

input[type='radio']:checked {
  border-color: #000;
  background-color: #fff;
}

input[type='radio']:checked::after {
  content: '';
  position: absolute;
  top: calc(50% - 6px);
  left: calc(50% - 6px);
  width: 12px;
  height: 12px;
  background: #000;
  border-radius: 50%;
}
</style>

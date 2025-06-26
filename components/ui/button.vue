<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: 'primary' | 'icon' | 'textIcon' | 'small' | 'outlined' | 'secondary'
    iconName?: string
  }>(),
  {
    type: 'primary',
    iconName: 'common/plus',
  }
)

const classesForButton = computed(() => {
  switch (props.type) {
    case 'primary':
      return 'bg-taupe text-white text-base font-medium px-[1.25rem] py-[0.75rem] hover:bg-taupe-90 active:bg-black focus:bg-taupe-60 disabled:bg-white-30 disabled:text-taupe-30 max-sm:text-base max-sm:px-[1rem] max-sm:py-[0.75rem]'
    case 'icon':
      return 'border-2 border-transparent bg-opacity-0 px-[0.75rem] py-[0.75rem] text-black hover:text-gray active:text-neutral focus:text-black focus:border-2 focus:outline-0 focus:border-taupe-60 disabled:bg-neutral-150 disabled:text-taupe-30'
    case 'textIcon':
      return 'border-[1px] border-transparent bg-opacity-0 px-[0.75rem] py-[0.5rem] text-black text-lg hover:text-gray active:text-neutral focus:text-taupe-60 focus:border focus:outline-0 focus:border-taupe-60 disabled:text-taupe-30'
    case 'small':
      return 'bg-taupe text-white text-base font-medium px-[1rem] py-[0.75rem] hover:bg-taupe-90 active:bg-black focus:bg-taupe-60 disabled:bg-white-30 disabled:text-taupe-30'
    case 'outlined':
      return 'bg-transparent border border-taupe-100 text-black text-base font-medium px-[1.25rem] py-[0.75rem] hover:bg-taupe-90 hover:border-black hover:text-white active:bg-black active:border-black active:text-white focus:border-taupe-60 disabled:bg-neutral-150 disabled:border-neutral-300 disabled:text-taupe-30'
    case 'secondary':
      return 'border border-white bg-neutral-600 text-taupe-200 text-base font-medium px-[1rem] py-[0.75rem] hover:bg-neutral-500 active:bg-neutral-400 focus:bg-neutral-400 focus:border-taupe-60 disabled:bg-neutral-150 disabled:text-taupe-30'
  }
})
</script>

<template>
  <button
    class="flex items-center justify-center gap-[0.5rem] w-fit transition-all ease-in duration-300"
    :class="classesForButton"
  >
    <slot v-if="props.type != 'icon'" />
    <slot v-if="props.type === 'icon' || props.type === 'textIcon'" name="icon">
      <nuxt-icon class="w-2 h-2 text-base" :name="props.iconName"></nuxt-icon>
    </slot>
  </button>
</template>

<style scoped></style>

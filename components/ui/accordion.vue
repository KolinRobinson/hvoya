<script setup lang="ts">
const isDropOpened = ref<boolean>(false)

function beforeEnter(el: HTMLElement) {
  el.style.height = '0'
  el.style.opacity = '0'
}

function enter(el: HTMLElement) {
  el.style.transition = 'height 0.5s ease, opacity 0.5s ease'
  const fullHeight = el.scrollHeight + 'px'
  requestAnimationFrame(() => {
    el.style.height = fullHeight
    el.style.opacity = '1'
  })
}

function leave(el: HTMLElement) {
  el.style.transition = 'height 0.5s ease, opacity 0.5s ease'
  requestAnimationFrame(() => {
    el.style.height = '0'
    el.style.opacity = '0'
  })
}
</script>

<template>
  <div class="flex flex-col border-b border-black p-2 overflow-hidden">
    <div class="flex items-center justify-between" @click="isDropOpened = !isDropOpened">
      <slot name="title"></slot>
      <nuxt-icon
        name="common/bottom-arrow"
        class="transition-all ease-in-out duration-300 -rotate-90"
        :class="{ 'rotate-0': isDropOpened }"
      />
    </div>
    <transition name="drop-down" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div v-if="isDropOpened" class="text-sm">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<style scoped></style>

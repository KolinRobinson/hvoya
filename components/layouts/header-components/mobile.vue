<script setup lang="ts">
const route = useRoute()
import { useCategoryStore } from '~/stores/category'

const categoryArray = useCategoryStore()
const isMenuOpen = ref<boolean>(false)
const isShopsOpen = ref<boolean>(false)

function shopsOpen(e: MouseEvent): void {
  if (!(e.target as HTMLElement).closest('.subcategory')) {
    isShopsOpen.value = !isShopsOpen.value
  }
}

function beforeEnter(el: HTMLElement) {
  el.style.height = '0'
}

function enter(el: HTMLElement) {
  el.style.transition = 'height 0.4s ease'
  el.style.height = el.scrollHeight + 'px'
}

function leave(el: HTMLElement) {
  el.style.height = el.scrollHeight + 'px'
  el.style.transition = 'height 0.4s ease'
  requestAnimationFrame(() => {
    el.style.height = '0'
  })
}

watch(
  () => route.fullPath,
  newPath => {
    if (newPath) isMenuOpen.value = false
    if (newPath) isShopsOpen.value = false
  }
)
</script>

<template>
  <header
    class="w-full fixed h-6 px-2 py-2 bg-neutral-200 z-10 flex items-center justify-between border-b-black border-b lg:px-[3.75rem]"
    :class="{ 'border-b-0': isMenuOpen }"
  >
    <nuxt-link to="/">
      <layouts-logo></layouts-logo>
    </nuxt-link>

    <nav class="flex items-center justify-between gap-[1rem]">
      <nuxt-link to="/cart">Cart</nuxt-link>
      <button @click="isMenuOpen = !isMenuOpen" class="w-[1.25rem] flex justify-end items-center">
        <layouts-burger :is-open="isMenuOpen" />
      </button>
    </nav>
    <transition name="transform-y">
      <nav
        v-if="isMenuOpen"
        class="absolute top-full h-[calc(100vh-1rem)] -z-10 left-0 right-0 py-4 bg-neutral-200 flex justify-between"
      >
        <ul class="w-full text-base font-medium">
          <li
            @click.prevent.stop="shopsOpen"
            class="border-b-black px-2 w-full border-b overflow-hidden"
            :class="{ 'pb-2': isShopsOpen }"
          >
            <div class="flex justify-between py-2 items-center">
              <p>Shop</p>
              <nuxt-icon
                name="common/bottom-arrow"
                class="transition-all ease-in-out duration-300 -rotate-90"
                :class="{ 'rotate-0': isShopsOpen }"
              />
            </div>
            <TransitionGroup
              tag="div"
              name="list-fade"
              @before-enter="beforeEnter"
              @enter="enter"
              @leave="leave"
            >
              <ul
                v-if="isShopsOpen"
                v-for="category in categoryArray.apiCategories"
                ref="animatedList"
                :key="category.id"
              >
                <li class="subcategory py-[0.5rem] flex flex-col" @click.once.prevent>
                  <nuxt-link
                    class="hover-underline-animation left"
                    :to="{ name: 'catalog-category', params: { category: category.slug } }"
                    >{{ category.name }}
                  </nuxt-link>
                </li>
                <li
                  class="ml-1 py-[0.25rem]"
                  v-for="subcategory in categoryArray.getSubcategoryBySlug(category.slug)"
                  :key="subcategory.id"
                >
                  <nuxt-link
                    class="hover-underline-animation left"
                    :to="{
                      name: 'catalog-category',
                      params: { category: category.slug },
                      query: { filter: subcategory.id },
                    }"
                    >{{ subcategory.name }}
                  </nuxt-link>
                </li>
              </ul>
            </TransitionGroup>
          </li>
          <li class="border-b-black py-2 px-2 w-full border-b overflow-hidden">
            <nuxt-link class="block" to="/about">About</nuxt-link>
          </li>
          <li class="border-b-black py-2 px-2 w-full border-b overflow-hidden">
            <nuxt-link class="block" to="/contact">Contact</nuxt-link>
          </li>
          <li class="border-b-black py-2 px-2 w-full border-b overflow-hidden">
            <nuxt-link class="block" to="/auth">Account</nuxt-link>
          </li>
          <li class="border-b-black py-2 px-2 w-full border-b overflow-hidden">Search</li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.transform-y-enter-active,
.transform-y-leave-active {
  transition: transform 0.5s ease-in-out;
  transform: translateY(0);
}

.transform-y-enter-from,
.transform-y-leave-to {
  transform: translateY(-100%);
}
</style>

<script setup lang="ts">
import { gsap } from 'gsap'
const route = useRoute()
const isSubmenuOpened = ref<boolean>(false)
const submenuImage = ref<string>('/images/submenu_image.png')

import { useCategoryStore } from '~/stores/category'

const categoryArray = useCategoryStore()

function openSubmenu(): void {
  isSubmenuOpened.value = true
}

function closeSubmenu(): void {
  isSubmenuOpened.value = false
}

function changeSubcategoryImage(url: string): void {
  const imgEl = document.querySelector('.submenu-img')

  gsap.to(imgEl, {
    opacity: 0,
    scale: 0.95,
    duration: 0.2,
    onComplete: () => {
      submenuImage.value = url
      gsap.fromTo(
        imgEl,
        {
          opacity: 0,
          scale: 1.05,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
        }
      )
    },
  })
}

function returnSubcategoryImage(): void {
  const imgEl = document.querySelector('.submenu-img')

  gsap.to(imgEl, {
    opacity: 0,
    scale: 0.95,
    duration: 0.2,
    onComplete: () => {
      submenuImage.value = '/images/submenu_image.png'
      gsap.fromTo(
        imgEl,
        {
          opacity: 0,
          scale: 1.05,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
        }
      )
    },
  })
}

watch(
  () => route.fullPath,
  newPath => {
    if (newPath) isSubmenuOpened.value = false
  }
)
</script>

<template>
  <header
    class="w-full fixed h-8 px-[3.75rem] py-2 bg-neutral-200 z-10 flex items-center justify-between border-b-black border-b lg:px-[3.75rem]"
  >
    <nav class="flex" aria-label="Pages navigation">
      <ul class="flex items-center justify-between text-black text-base font-medium text-center">
        <li class="px-[0.75rem] py-[0.5rem] relative" @mouseenter="openSubmenu">
          <nuxt-link class="min-w-10 block" to="/catalog">Shop</nuxt-link>
        </li>
        <li class="px-[0.75rem] py-[0.5rem]" @mouseenter="closeSubmenu">
          <nuxt-link class="min-w-10 block" to="/about">About</nuxt-link>
        </li>
        <li class="px-[0.75rem] py-[0.5rem]" @mouseenter="closeSubmenu">
          <nuxt-link class="min-w-10 block" to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
    <nuxt-link to="/">
      <layouts-logo @mouseenter="closeSubmenu"></layouts-logo>
    </nuxt-link>
    <nav class="flex" @mouseenter="closeSubmenu" aria-label="Functional navigation">
      <ul class="flex items-center justify-between text-black text-base font-medium text-center">
        <li class="px-[0.75rem] py-[0.5rem]">
          <button class="min-w-10 block bg-transparent px-0 py-0">Search</button>
        </li>
        <li class="px-[0.75rem] py-[0.5rem]">
          <nuxt-link class="min-w-10 block" to="/auth">Log in</nuxt-link>
        </li>
        <li class="px-[0.75rem] py-[0.5rem]">
          <nuxt-link class="min-w-10 block" to="/cart">Cart</nuxt-link>
        </li>
      </ul>
    </nav>

    <transition name="fade">
      <nav
        @mouseleave="closeSubmenu"
        v-if="isSubmenuOpened"
        class="absolute top-[calc(100%+1px)] left-0 right-0 px-[3.75rem] py-4 bg-neutral-200 flex justify-between"
      >
        <div class="flex items-start justify-start gap-[4rem]">
          <ul class="text-base text-black">
            <li class="mb-2 py-[0.75rem]">
              <nuxt-link
                class="hover-underline-animation left"
                :to="{ name: 'catalog', query: { filter: 'new' } }"
              >
                New
              </nuxt-link>
            </li>
            <li class="py-[0.75rem]">
              <nuxt-link class="hover-underline-animation left" to="/catalog">Shop all</nuxt-link>
            </li>
          </ul>
          <ul
            class="text-base text-black"
            v-for="category in categoryArray.apiCategories"
            :key="category.id"
          >
            <li class="mb-2 py-[0.75rem]">
              <nuxt-link
                @mouseenter="changeSubcategoryImage(category.image_url)"
                @mouseleave="returnSubcategoryImage()"
                class="hover-underline-animation left"
                :to="{ name: 'catalog-id', params: { id: category.slug } }"
                >{{ category.name }}
              </nuxt-link>
            </li>
            <li
              class="py-[0.75rem]"
              v-for="subcategory in categoryArray.getSubcategoryBySlug(category.slug)"
              :key="subcategory.id"
            >
              <nuxt-link
                @mouseenter="changeSubcategoryImage(subcategory.image_url)"
                @mouseleave="returnSubcategoryImage()"
                class="hover-underline-animation left"
                :to="{
                  name: 'catalog-id',
                  params: { id: category.slug },
                  query: { filter: subcategory.id },
                }"
                >{{ subcategory.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="flex items-center justify-center w-1/3 h-">
          <nuxt-img
            :src="submenuImage"
            class="w-full h-auto aspect-5/3 object-contain submenu-img"
            alt="Submenu decorate image"
          ></nuxt-img>
        </div>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

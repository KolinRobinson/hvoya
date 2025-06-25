<script setup lang="ts"></script>

<template>
  <header
    class="w-full fixed h-8 px-[3.75rem] py-2 bg-white z-10 flex items-center justify-between"
  >
    <nav class="flex" aria-label="Pages navigation">
      <ul class="flex items-center justify-between text-black text-base font-medium text-center">
        <li class="px-[0.75rem] py-[0.5rem]">
          <nuxt-link class="min-w-10 block" to="/catalog">Shop</nuxt-link>
        </li>
        <li class="px-[0.75rem] py-[0.5rem]">
          <nuxt-link class="min-w-10 block" to="/about">About</nuxt-link>
        </li>
        <li class="px-[0.75rem] py-[0.5rem]">
          <nuxt-link class="min-w-10 block" to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
    <layouts-logo></layouts-logo>
    <nav class="flex w-1/3" aria-label="Functional navigation">
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
  </header>
</template>

<style scoped></style>

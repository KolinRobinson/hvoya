<script setup lang="ts"></script>

<template>
  <section class="flex flex-col my-5 px-[1.25rem] sm:mt-9 xl:mt-15 xl:mb-10 lg:px-[3.75rem]">
    <h2
      class="text-2xl font-medium mb-[1.25rem] sm:w-2/3 md:w-1/2 lg:text-3xl lg:mb-[3.75rem] xl:w-3/5 xl:text-4xl"
    >
      UNIQUE SUSTAINABLE HANDCRAFTED FURNITURE
    </h2>
    <div class="flex flex-col mb-5 gap-[1.25rem] sm:flex-row sm:gap-[1.5rem] md:mb-6 lg:mb-10">
      <h3 class="text-xl font-medium sm:w-1/2 md:text-3xl">Concept</h3>
      <div class="flex flex-col gap-[1.5rem] sm:w-1/2 text-base">
        <p>
          In the heart of our craft lives a commitment to authenticity. Each piece is meticulously
          handcrafted from natural materials — durable hardwood species, ceramic and concrete, stone
          and organic textiles — sourced responsibly and chosen for their character, texture and
          longevity
        </p>
        <nuxt-link class="underline">More about us</nuxt-link>
      </div>
    </div>
    <div class="flex flex-col gap-[2rem] sm:flex-row sm:gap-[1.5rem]">
      <nuxt-img
        src="/images/concept-1.png"
        class="aspect-1 w-full h-full object-cover sm:aspect-4/3 sm:w-1/2"
      ></nuxt-img>
      <nuxt-img src="/images/concept-2.png" class="aspect-1 sm:w-1/2"></nuxt-img>
    </div>
  </section>
</template>

<style scoped></style>

<script setup lang="ts"></script>

<template>
  <section class="py-3 px-[1.25rem] flex flex-col md:py-5 lg:pb-[8.75rem] lg:px-[3.75rem]">
    <div class="flex flex-col mb-5 w-full md:flex-row md:gap-[1.5rem] lg:mb-15">
      <h1 class="text-xl font-medium mb-3 md:m-0 md:w-2/5 md:text-2xl lg:w-1/2 lg:text-3xl">
        About us
      </h1>
      <div class="flex flex-col md:w-3/5 lg:w-1/2">
        <h2 class="text-xl font-medium mb-3">
          Hvoya is a Ukrainian design studio crafting unique, honest, and sustainable furniture —
          made entirely in Ukraine from natural materials.
        </h2>
        <p class="text-base">
          At the core of our process is a deep respect for materials. We work exclusively with
          natural and responsibly sourced elements — solid oak, ash, raw stone, handwoven wool,
          organic linen, and earthy ceramics. These materials are left exposed, celebrated in their
          raw beauty, and selected for how they age, how they wear, and how they ground a space.
        </p>
      </div>
    </div>
    <nuxt-img
      src="/images/about-img-1.jpg"
      alt="Sofa decorate image"
      class="w-full h-auto aspect-3/4 md:aspect-4/3 lg:aspect-5/2 object-center object-cover mb-6 lg:mb-[8.75rem]"
    />
    <div class="flex flex-col mb-[2.75rem] w-full lg:w-2/3 lg:mb-15">
      <h2 class="text-xl font-medium mb-5 lg:text-2xl">
        WOOD: A MATERIAL OF QUIET DIGNITY — WARM, ENDURING, HONEST. OAK: A TREE OF CHARACTER AND
        TIMELESS RESILIENCE
      </h2>
      <div class="flex flex-col md:flex-row md:gap-[1.5rem]">
        <p class="text-base mb-3 md:m-0 md:w-1/2">
          Wood speaks with quiet strength. At HVOYA, we craft furniture that honors the raw beauty
          of natural oak — aged, enduring, and full of character. Our materials are responsibly
          sourced, often reclaimed from historical buildings across Ukraine and Europe. We preserve
          the textures of time: weathered grain, warm tobacco tones, and soft marks that tell their
          own silent stories. Each piece is hand-finished, designed to feel both grounded and
          timeless in any space.
        </p>
        <p class="text-base md:w-1/2">
          Rooted in heritage, shaped by innovation. Our design philosophy blends minimalism with
          depth — simplicity with soul. Every object carries a digital signature via NFC technology,
          revealing its origin and journey. Made in Ukraine with care and purpose, our collections
          reflect a commitment to sustainability, transparency, and enduring craftsmanship.<span
            ><br /></span
          >Each piece is a quiet dialogue between past and present: timeless silhouettes shaped by
          contemporary sensibilities.
        </p>
      </div>
    </div>
    <div
      class="grid grid-cols-1 grid-rows-2 gap-[1.5rem] md:grid-rows-1 md:grid-cols-2 lg:grid-cols-12"
    >
      <nuxt-img
        src="/images/about-img-2.jpg"
        alt="Sofa decorate image"
        class="w-full h-auto aspect-3/4 object-center object-cover xs:aspect-1 lg:col-span-5 lg:h-full"
      />
      <nuxt-img
        src="/images/about-img-3.jpg"
        alt="Sofa decorate image"
        class="w-full h-auto aspect-3/4 object-center object-cover xs:aspect-1 lg:aspect-4/3 lg:col-span-7"
      />
    </div>
  </section>
</template>

<style scoped></style>

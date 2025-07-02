<script setup lang="ts"></script>

<template>
  <section class="py-3 px-[1.25rem] flex flex-col">
    <div class="flex flex-col mb-5 w-full">
      <h1 class="text-xl font-medium mb-3">About us</h1>
      <div class="flex flex-col">
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
      class="w-full h-auto aspect-3/4 object-center object-cover mb-6"
    />
    <div class="flex flex-col mb-[2.75rem] w-full">
      <h2 class="text-xl font-medium mb-5">
        WOOD: A MATERIAL OF QUIET DIGNITY — WARM, ENDURING, HONEST. OAK: A TREE OF CHARACTER AND
        TIMELESS RESILIENCE
      </h2>
      <div class="flex flex-col">
        <p class="text-base mb-3">
          Wood speaks with quiet strength. At HVOYA, we craft furniture that honors the raw beauty
          of natural oak — aged, enduring, and full of character. Our materials are responsibly
          sourced, often reclaimed from historical buildings across Ukraine and Europe. We preserve
          the textures of time: weathered grain, warm tobacco tones, and soft marks that tell their
          own silent stories. Each piece is hand-finished, designed to feel both grounded and
          timeless in any space.
        </p>
        <p class="text-base">
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
    <div class="flex flex-col gap-[1.5rem] w-full">
      <nuxt-img
        src="/images/about-img-2.jpg"
        alt="Sofa decorate image"
        class="w-full h-auto aspect-3/4 object-center object-cover"
      />
      <nuxt-img
        src="/images/about-img-3.jpg"
        alt="Sofa decorate image"
        class="w-full h-auto aspect-3/4 object-center object-cover"
      />
    </div>
  </section>
</template>

<style scoped></style>

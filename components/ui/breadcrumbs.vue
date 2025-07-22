<script setup lang="ts">
import { useBreadcrumbs } from '~/composible/useBreadcrumbs'
const breadcrumbs = useBreadcrumbs()
</script>

<template>
  <nav aria-label="Breadcrumb">
    <ul class="flex items-center gap-2 text-xs sm:text-sm text-beta-gray-150">
      <li v-for="(crumb, index) in breadcrumbs" :key="crumb.to" class="flex items-center gap-1">
        <NuxtLink
          :to="crumb.to"
          :aria-current="index === breadcrumbs.length - 1 ? 'page' : undefined"
          :class="[
            index === breadcrumbs.length - 1 ? 'pointer-events-none text-black' : 'text-gray',
            'hover-underline-animation left',
          ]"
        >
          {{ crumb.label }}
        </NuxtLink>
        <nuxt-icon
          v-if="index < breadcrumbs.length - 1"
          name="common/arrow"
          class="mx-1 text-black"
        />
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>

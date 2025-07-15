<script setup lang="ts">
const route = useRoute()

const breadcrumbs = computed(() => {
  const meta = route.meta?.breadcrumbs

  const homeCrumb = { label: 'Home', to: '/' }

  if (Array.isArray(meta)) {
    return [homeCrumb, ...meta]
  }

  if (typeof meta === 'string') {
    return [homeCrumb, { label: meta, to: route.fullPath }]
  }

  return [homeCrumb, { label: route.name?.toString() ?? 'Page', to: route.fullPath }]
})
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

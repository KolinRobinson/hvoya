<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const formatSegment = (input: string): string =>
  input.replace(/-/g, ' ').replace(/\b\w/g, str => str.toUpperCase())

const currentBreadcrumb = computed(() => route.meta?.breadcrumbs ?? route.name)

const crumbs = computed(() => {
  let fullPath = ''
  const segments = route.fullPath.substring(1).split('/')

  const dynamicCrumbs = segments
    .map(segment => {
      if (!segment) return null
      fullPath += `/${segment}`
      const resolved = router.resolve(fullPath)
      return resolved.name ? resolved : null
    })
    .filter((rout): rout is ReturnType<typeof router.resolve> => !!rout)

  const homeRoute = router.resolve('/')
  return [homeRoute, ...dynamicCrumbs]
})
</script>

<template>
  <nav aria-label="Breadcrumb">
    <ul class="flex items-center gap-2 text-sm text-beta-gray-150">
      <li
        v-for="(crumb, index) in crumbs"
        :key="crumb.name ?? index"
        class="flex items-center gap-1"
      >
        <NuxtLink
          :to="crumb.fullPath"
          :aria-current="index === crumbs.length - 1 ? 'page' : undefined"
          :class="[
            index === crumbs.length - 1 ? 'pointer-events-none text-black' : 'text-gray',
            'hover-underline-animation left text-sm',
          ]"
        >
          {{
            crumb.meta?.breadcrumbs ||
            currentBreadcrumb ||
            formatSegment(crumb.params?.slug || crumb.name || '')
          }}
        </NuxtLink>
        <nuxt-icon v-if="index < crumbs.length - 1" name="common/arrow" class="mx-1 text-black" />
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>

<script setup lang="ts">
import Desktop from '~/components/layouts/header-components/desktop.vue'
import Mobile from '~/components/layouts/header-components/mobile.vue'

import { useMediaQuery } from '@vueuse/core'

const isMobile = useMediaQuery('(max-width: 767px)')
</script>

<template>
  <Mobile v-if="isMobile" />
  <Desktop v-else />
</template>

<style scoped></style>

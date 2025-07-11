<script setup lang="ts"></script>

<template>
  <div class="flex flex-col w-full min-h-[100vh] bg-neutral-200">
    <LayoutsHeader />
    <main class="pt-6 md:pt-8">
      <slot></slot>
    </main>
    <LayoutsFooter />
  </div>
</template>

<style scoped lang="scss"></style>

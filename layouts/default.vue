<script setup lang="ts"></script>

<template>
  <div class="flex flex-col w-full bg-white min-h-[200vh]">
    <LayoutsHeader />
    <main class="pt-10">
      <slot></slot>
    </main>
    <LayoutsFooter />
  </div>
</template>

<style scoped lang="scss"></style>

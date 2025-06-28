<script setup lang="ts">
import { useCategoryStore } from '~/stores/category'

const categories = useCategoryStore()
const emailValue = ref<string>('')
</script>

<template>
  <footer
    class="py-[1.5rem] px-2 flex flex-col gap-[2.5rem] border-t border-black lg:py-10 lg:px-[3.75rem]"
  >
    <nuxt-link to="/" class="text-black w-11">
      <nuxt-icon name="common/logo" class="w-full" size="11rem" />
    </nuxt-link>
    <div class="flex flex-col gap-[2.5rem] lg:flex-row lg:gap-[7rem]">
      <div class="flex flex-wrap justify-between gap-[2.5rem] mb-5 lg:w-1/2">
        <div class="flex flex-col gap-[1.25rem] w-1/2 sm:w-fit">
          <h4 class="text-sm font-medium">Catalogue</h4>
          <ul class="text-sm flex flex-col gap-[0.75rem]">
            <li>
              <nuxt-link to="/catalog">All products</nuxt-link>
            </li>
            <li v-for="category in categories.homeCategoriesList" :key="category.id">
              {{ category.name }}
            </li>
          </ul>
        </div>
        <div class="flex flex-col fix-fill gap-[1.25rem] w-11 sm:w-fit">
          <h4 class="text-sm font-medium">Socials</h4>
          <ul class="text-sm flex flex-col gap-[0.75rem]">
            <li>
              <nuxt-link to="/" class="flex w-2">
                <nuxt-icon name="common/inst" fill="none" class="fill-none w-full" />
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="flex w-2">
                <nuxt-icon name="common/fb" fill="none" class="fill-none w-full" />
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="flex flex-col fix-fill gap-[1.25rem] sm:w-fit">
          <h4 class="text-sm font-medium">Customer Care</h4>
          <ul class="text-sm flex flex-col gap-[0.75rem]">
            <li>
              <nuxt-link to="/" class="flex"> FAQ </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="flex"> Contact </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="flex"> Ordering & Shipping </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="flex"> Care & Maintenance </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="flex"> Privacy Policy </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col gap-[1.25rem] lg:flex-1">
        <h4 class="text-2xl font-medium">Stay connected</h4>
        <p>Get 10% off your first order by subscribing to our newsletter</p>
        <form class="flex">
          <ui-input
            :input-value="emailValue"
            placeholder="Email"
            required
            type="email"
            label-class="w-full"
          />
          <ui-button type="small" class="text-white">Subscribe</ui-button>
        </form>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.nuxt-icon::v-deep svg {
  width: 100%;
  height: auto;
  fill: none !important;
}

.fix-fill .nuxt-icon::v-deep svg * {
  fill: none !important;
}
</style>

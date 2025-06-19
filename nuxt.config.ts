// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
    'dayjs-nuxt'
  ],
  tailwindcss: {
    cssPath: [`~/assets/css/tailwind.css`, { injectPosition: "first" }],
    config: {},
    viewer: true,
    exposeConfig: false,
  },
  runtimeConfig: {
    apiSecret: process.env.NUXT_BLOG_API_KEY,
  }
})

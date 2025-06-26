// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'dayjs-nuxt',
    '@nuxt/fonts',
    'nuxt-schema-org',
    'nuxt-icons',
  ],
  app: {
    head: {
      title: 'Hvoya - Furniture store',
      htmlAttrs: {
        lang: 'en',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || '/proxy',
      apiTargetBase: 'https://teamchallenge-shop.onrender.com',
    },
  },
  nitro: {
    preset: 'vercel',
  },
  // @ts-ignore
  svgSprite: {
    input: './assets/icons/',
  },
  image: {
    provider: 'ipx',
    inject: true
  },
  components: [
    {
      path: '~/components',
      pathPrefix: true,
    },
  ],
  tailwindcss: {
    cssPath: [`~/assets/css/tailwind.css`, { injectPosition: 'first' }],
    config: {},
    viewer: true,
    exposeConfig: false,
    configPath: './tailwind.config.ts',
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
    'dayjs-nuxt',
    '@nuxt/fonts',
    'nuxt-schema-org',
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
      apiBase: process.env.API_BASE || 'https://teamchallenge-shop.onrender.com',
    },
  },
  nitro: {
    devProxy: {
      '/api': {
        target: 'https://teamchallenge-shop.onrender.com',
        changeOrigin: true,
        prependPath: false,
        // @ts-expect-error
        pathRewrite: { '^/api': '' },
      },
    },
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
  image: {
    dir: 'assets/images',
  },
})

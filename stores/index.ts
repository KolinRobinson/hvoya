// тестовий стор

export const useWebsiteStore = defineStore('website', {
  state: () => ({
    swaggerData: null as Record<string, any> | null,
  }),

  actions: {
    async fetchSwagger() {
      const { $api } = useNuxtApp()

      try {
        const data = await $api('/swagger/')
        this.swaggerData = JSON.parse(JSON.stringify(data))
      } catch (error) {
        console.warn('[fetchSwagger error]', error)
        this.swaggerData = null
      }
    },
  },
})

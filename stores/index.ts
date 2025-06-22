export const useWebsiteStore = defineStore('website', {
  state: () => ({
    swaggerData: null as Record<string, any> | null,
    loaded: false,
  }),

  actions: {
    async fetchSwagger({ force = false } = {}) {
      if (this.loaded && !force) return

      const { $api } = useNuxtApp()

      try {
        const data = await $api('/swagger/')
        this.swaggerData = structuredClone(data)
        this.loaded = true
      } catch (error) {
        console.warn('[fetchSwagger error]', error)
        this.swaggerData = null
        this.loaded = false
      }
    },
  },
})

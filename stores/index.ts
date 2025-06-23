export const useWebsiteStore = defineStore('website', {
  state: () => ({
    swaggerData: null as Record<string, any> | null,
    loaded: false,
  }),

  actions: {
    async fetchSwagger({ force = false } = {}) {
      console.log('[fetchSwagger] loaded:', this.loaded)
      if (this.loaded && !force) return this.swaggerData

      const { $api } = useNuxtApp()

      try {
        const data = await $api('/swagger/')
        this.swaggerData = structuredClone(data)
        this.loaded = true
        return this.swaggerData
      } catch (error) {
        console.warn('[fetchSwagger error]', error)
        this.swaggerData = null
        this.loaded = false
        return null
      }
    }
  },
})

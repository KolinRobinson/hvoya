export const useWebsiteStore = defineStore('index', {
  state: () => ({}),
  getters: {},
  actions: {
    async testFetch() {
      const test = await $fetch(`https://teamchallenge-shop.onrender.com/swagger/`)
      console.log(test)
    },
  },
})

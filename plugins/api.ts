export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const $api = <T = any>(endpoint: string, options: any = {}) => {
    return $fetch<T>(`${config.public.apiBase}${endpoint}`, {
      credentials: 'omit',
      ...options,
    })

  }

  return {
    provide: {
      api: $api,
    },
  }
})

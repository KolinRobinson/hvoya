export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  function joinUrl(base: string, endpoint: string): string {
    const baseClean = base.endsWith('/') ? base.slice(0, -1) : base
    const endpointClean = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint
    return `${baseClean}/${endpointClean}`
  }

  const $api = async <T = any>(
    endpoint: string,
    options: Omit<Parameters<typeof $fetch<T>>[1], 'method' | 'url'> = {}
  ): Promise<T> => {
    const url = joinUrl(config.public.apiBase, endpoint)

    console.log('[API PLUGIN] final URL:', url)

    return $fetch<T>(url, {
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

export default defineEventHandler(async (event) => {
    const path = event.context.params?.path
    const query = getQuery(event)
    const config = useRuntimeConfig()

    console.log('[PROXY] Target base:', config.public.apiTargetBase)
    console.log('[PROXY] Path:', path)

    const url = `${config.public.apiTargetBase}/${Array.isArray(path) ? path.join('/') : path}`

    const res = await $fetch(url, {
        method: getMethod(event),
        query,
        // @ts-expect-error
        headers: getHeaders(event),
        body: await readBody(event),
    })

    return res
})

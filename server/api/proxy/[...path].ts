export default defineEventHandler(async (event) => {
    const path = event.context.params?.path
    const query = getQuery(event)
    const config = useRuntimeConfig()

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

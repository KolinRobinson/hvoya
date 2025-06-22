import type { H3Event } from 'h3'
import { getHeaders, getQuery, readBody, getRequestURL, createError } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
    const method = (event.method?.toUpperCase() || 'GET') as 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
    const path = event.context.params?.path
    const config = useRuntimeConfig()

    if (!path) {
        throw createError({ statusCode: 400, statusMessage: 'Missing proxy path' })
    }

    const resolvedPath = Array.isArray(path) ? path.join('/') : path
    const requestUrl = getRequestURL(event)
    const finalPath = requestUrl.pathname.endsWith('/') ? `${resolvedPath}/` : resolvedPath
    const targetUrl = `${config.public.apiTargetBase}/${finalPath}`

    const rawHeaders = getHeaders(event)
    const safeHeaders: Record<string, string> = {}
    for (const [key, value] of Object.entries(rawHeaders)) {
        if (typeof value === 'string') {
            safeHeaders[key] = value
        }
    }

    console.log('[PROXY]', method, '→', targetUrl)

    try {
        return await $fetch(targetUrl, {
            method,
            query: getQuery(event),
            headers: safeHeaders,
            body: ['POST', 'PUT', 'PATCH'].includes(method)
                ? await readBody(event)
                : undefined,
        })
    } catch (error: any) {
        console.warn('[PROXY ERROR]', error?.statusCode || 500, error?.message || 'Unknown error')
        throw createError({
            statusCode: error?.statusCode || 500,
            statusMessage: error?.message || 'Proxy request failed',
        })
    }
})

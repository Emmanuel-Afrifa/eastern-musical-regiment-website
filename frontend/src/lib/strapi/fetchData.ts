const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL

type FetchOptions = {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: unknown;
    params?: Record<string, string>
    cache?: RequestCache;
    next?: {
        revalidate?: number;
        tags?: string[]
    }
}

export async function fetchApi<T>(endpoints: string, options: FetchOptions): Promise<T> {
    const {method = "GET", body, params, cache = "force-cache", next} = options

    const url = new URL(`${STRAPI_URL}/api/${endpoints}`)

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            url.searchParams.append(key, value)
        })
    }

    const res = await fetch(url.toString(), {
        method,
        headers: {
            "Content-Type": "application/json"
        },
        body: body ? JSON.stringify(body) : undefined,
        cache,
        next
    })

    if (!res.ok) {
        const error = await res.text()
        throw new Error(`Strapi Error: ${error}`)
    }

    return res.json()
}
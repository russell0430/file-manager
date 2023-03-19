const qs = {
  stringify: (
    params: Record<string, unknown>,
    { addQueryPrefix = false }: { addQueryPrefix?: boolean }
  ): string => {
    return Object.entries(params).reduce(
      (prev, [key, val]) => {
        return `${prev}&${key}=${val}`
      },
      addQueryPrefix ? "?" : ""
    )
  },
}

type GetOptions = RequestInit & {
  params?: Record<string, unknown>
}

const api = {
  get: <T>(
    url: string,
    options: GetOptions = { headers: {} }
  ): Promise<Response> => {
    let query = ""
    if (options.params) {
      query = qs.stringify(options.params, { addQueryPrefix: true })
    }
    return fetch(`${url}${query}`, {
      credentials: "include",
      headers: options.headers,
    })
  },
  post: (
    url: string,
    options: RequestInit = { headers: {} }
  ): Promise<Response> => {
    const headers = options && options.headers ? { ...options.headers } : {}

    const formattedOptions: RequestInit = {
      ...options,
      method: "post",
      credentials: "include",
      headers: {
        ...headers,
      },
    }
    return fetch(`${url}`, formattedOptions)
  },
}

export default api

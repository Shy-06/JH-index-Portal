import { defineProvider } from '@nuxt/image/runtime'

export default defineProvider<{ baseURL?: string }>({
  getImage(src, { baseURL }) {
    if (!baseURL) baseURL = useRuntimeConfig().public.cubeBaseURL
    return { url: baseURL + src.slice(1) }
  },
})

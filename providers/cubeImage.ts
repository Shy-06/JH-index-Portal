import { defineProvider } from '@nuxt/image/runtime'

export default defineProvider<{ baseURL?: string }>({
  getImage(src, { modifiers, baseURL }) {
    return { url: baseURL + src }
  }
})

import { defineProvider } from '@nuxt/image/runtime'

export default defineProvider({
  getImage(src) {
    return {
      url: `https://open-api.cli.im/cli-open-platform-service/v1/labelStyle/create?cliT=B215&cliD=${encodeURIComponent(src)}`,
    }
  },
})

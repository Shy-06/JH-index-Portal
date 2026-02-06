import { defineProvider } from '@nuxt/image/runtime'

export default defineProvider({
  getImage(src) {
    return {
      url: `https://open.weixin.qq.com/qr/code?username=${src.slice(1)}`,
    }
  },
})

import { defineProvider } from '@nuxt/image/runtime'

export default defineProvider<{ baseURL?: string }>({
  getImage(src, { modifiers, baseURL }) {
    if (src.startsWith('/external/')) {
      const externalImgMap: Record<string, string> = {
        '/external/wechatqr/jxhzx': 'https://open.weixin.qq.com/qr/code?username=gh_30765353fa78',
        '/external/wechatqr/jhwl': 'https://open.weixin.qq.com/qr/code?username=zjutjh'
      }
      return { url: externalImgMap[src] || src.substring('/external/'.length) }
    }
    return { url: baseURL + src }
  }
})

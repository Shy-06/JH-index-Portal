import { defineProvider } from '@nuxt/image/runtime'

export default defineProvider<{ baseURL?: string }>({
  getImage(src, { modifiers, baseURL }) {
    if (src.startsWith('/external/')) {
      if (src.startsWith('/external/wechatqr/')) {
        const wechatQrCodeMap: Record<string, string> = {
          'jxhzx': 'gh_30765353fa78',
          'jhwl': 'zjutjh'
        }
        return {
          url: 'https://open.weixin.qq.com/qr/code?username=' + wechatQrCodeMap[src.substring('/external/wechatqr/'.length)]
        }
      }
    }
    return { url: baseURL + src }
  }
})

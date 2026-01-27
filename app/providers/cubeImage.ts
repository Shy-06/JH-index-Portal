import { defineProvider } from '@nuxt/image/runtime'

const WECHAT_QR_CODE_MAP: Record<string, string> = {
  jxhzx: 'gh_30765353fa78',
  jhwl: 'zjutjh'
}

export default defineProvider<{ baseURL?: string }>({
  getImage(src, { modifiers, baseURL }) {
    if (src.startsWith('/external/')) {
      if (src.startsWith('/external/wechatqr/')) {
        return {
          url: 'https://open.weixin.qq.com/qr/code?username=' + WECHAT_QR_CODE_MAP[src.substring('/external/wechatqr/'.length)]
        }
      }
    }
    return { url: baseURL + src }
  }
})

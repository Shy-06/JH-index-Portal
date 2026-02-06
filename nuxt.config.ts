import { defineNuxtConfig } from 'nuxt/config'

const cubeBaseURL = 'https://img.phlin.cn/api/file?bucket=homepage&object_key='

export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxt/image', '@nuxtjs/seo', '@nuxt/eslint'],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, viewport-fit=cover',
        },
        {
          name: 'theme-color',
          content: '#d20001',
          media: '(prefers-color-scheme: light)',
        },
        {
          name: 'theme-color',
          content: '#1a1a1a',
          media: '(prefers-color-scheme: dark)',
        },
        { name: 'mobile-web-app-capable', content: 'yes' },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
        { rel: 'shortcut icon', href: '/favicon.png' },
        { rel: 'bookmark', href: '/favicon.png' },
        { rel: 'dns-prefetch', href: `//${new URL(cubeBaseURL).hostname}` },
        { rel: 'dns-prefetch', href: '//open.weixin.qq.com' },
        { rel: 'dns-prefetch', href: '//open-api.cli.im' },
      ],
    },
  },
  css: ['assets/css/main.scss'],

  site: {
    url: 'https://myzjut.org',
    name: '浙江工业大学精弘网络',
    defaultLocale: 'zh-CN',
  },

  runtimeConfig: {
    public: {
      cubeBaseURL,
      lastUpdateYear: 2026,
      contact: {
        email: 'jhwl@zjut.edu.cn',
        github: 'https://github.com/zjutjh',
        wechat: {
          jxhzx: 'gh_30765353fa78',
          jhwl: 'zjutjh',
        },
      },
    },
  },
  routeRules: {
    '/': { prerender: true },
  },
  compatibilityDate: '2026-01-01',

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `$cubeBaseURL: "${cubeBaseURL}";`,
        },
      },
    },
  },

  image: {
    domains: [
      new URL(cubeBaseURL).hostname,
      'open.weixin.qq.com',
      'open-api.cli.im',
    ],
    provider: 'cubeImage',
    providers: {
      cubeImage: {
        name: 'cubeImage',
        provider: '~/providers/cubeImage',
        options: {
          baseURL: cubeBaseURL,
        },
      },
      wechatOpen: {
        name: 'wechatOpen',
        provider: '~/providers/wechatOpen',
      },
      cliQR: {
        name: 'cliQR',
        provider: '~/providers/cliQR',
      },
    },
  },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: '浙江工业大学精弘网络',
      logo: '/favicon.png',
      sameAs: [
        'https://github.com/zjutjh',
        'https://space.bilibili.com/485566103',
      ],
    },
  },
})

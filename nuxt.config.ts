import { defineNuxtConfig } from 'nuxt/config';

const cubeBaseURL = 'https://img.phlin.cn/api/file?bucket=homepage&object_key=';

export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/image', '@nuxtjs/seo', '@nuxt/eslint'],
  css: ['assets/css/main.scss'],

  site: {
    url: 'https://myzjut.org',
    name: '浙江工业大学精弘网络',
    defaultLocale: 'zh-CN'
  },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: '浙江工业大学精弘网络',
      logo: '/favicon.png',
      sameAs: ['https://github.com/zjutjh', 'https://space.bilibili.com/485566103']
    }
  },

  runtimeConfig: {
    public: {
      cubeBaseURL,
      lastUpdateYear: 2026,
      contact: {
        email: "jhwl@zjut.edu.cn",
        github: "https://github.com/zjutjh"
      }
    }
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  routeRules: {
    '/': { prerender: true }
  },
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: "theme-color", content: "#d20001" },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: "apple-touch-icon", href: "/favicon.png" },
        { rel: "shortcut icon", href: "/favicon.png" },
        { rel: "bookmark", href: "/favicon.png" },
        { rel: 'dns-prefetch', href: `//${new URL(cubeBaseURL).hostname}` },
        { rel: 'dns-prefetch', href: '//open.weixin.qq.com' }
      ]
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `$cubeBaseURL: "${cubeBaseURL}";`
        }
      }
    }
  },

  image: {
    domains: [new URL(cubeBaseURL).hostname, 'open.weixin.qq.com'],
    provider: 'cubeImage',
    providers: {
      cubeImage: {
        name: 'cubeImage',
        provider: '~/providers/cubeImage',
        options: {
          baseURL: cubeBaseURL
        }
      }
    }
  }
});

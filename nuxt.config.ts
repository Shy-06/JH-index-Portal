import { defineNuxtConfig } from 'nuxt/config';

const cubeBaseURL = 'https://img.phlin.cn/api/file?bucket=homepage&object_key=';

export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/image'],
  css: ['assets/css/main.scss'],

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

  app: {
    head: {
      title: '浙江工业大学精弘网络',
      htmlAttrs: {
        lang: 'zh-CN'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        //, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0
        { name: "theme-color", content: "#d20001" },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
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

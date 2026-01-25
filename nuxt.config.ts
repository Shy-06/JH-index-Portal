import { defineNuxtConfig } from 'nuxt/config';

const cubeBaseURL = 'https://img.phlin.cn/api/file?bucket=homepage&object_key=';

export default defineNuxtConfig({
  compatibilityDate: '2025-10-25',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/image'],
  css: ['~/assets/css/main.scss'],

  runtimeConfig: {
    public: {
      cubeBaseURL,
      lastUpdateYear: 2026,
      contact:{
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
      title: '精弘首页',
      htmlAttrs: {
        lang: 'zh-CN'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
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
        provider: '~/providers/cubeImage.ts',
        options: {
          baseURL: cubeBaseURL
        }
      }
    }
  }
});

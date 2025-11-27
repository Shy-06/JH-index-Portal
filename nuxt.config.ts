import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2025-10-25',

  devtools: { enabled: true },

  modules: ['@pinia/nuxt', '@nuxt/image'],

  css: ['~/assets/css/main.scss'],

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
          additionalData: '$cubeBaseURL: "https://cube.phlin.cn/api/file?bucket=homepage&object_key=";'
        }
      }
    }
  },

  runtimeConfig: {
    public: {
      cubeBaseURL: 'https://cube.phlin.cn/api/file?bucket=homepage&object_key='
    }
  },

  image: {
    domains: ['cube.phlin.cn']
  }
} as any);

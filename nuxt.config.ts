// https://nuxt.com/docs/api/configuration/nuxt-config
//不用 import即可使用
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL
      || (process.env.NODE_ENV === 'production' ? '/resume/' : '/')
  },
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon', '@pinia/nuxt','@nuxt/ui'],
  components: true,//自動引入 components 資料夾內的元件
  css: ['~/assets/css/main.css'],
})
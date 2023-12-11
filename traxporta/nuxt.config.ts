// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: 'Traxporta | Frontend Challenge'
    }
  },
  alias: {
    '@': '~/'
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/scss/main.scss']
})

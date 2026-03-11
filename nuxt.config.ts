// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['/assets/css/main.css'],
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts'],
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
    },
  }
})
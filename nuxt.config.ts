// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    routeRules: {
      '/api/**': {
        proxy: process.env.BASE_API_URL
          ? `${process.env.BASE_API_URL}/**`
          : 'http://localhost:8080/api/**'
      },
    }
  },
})

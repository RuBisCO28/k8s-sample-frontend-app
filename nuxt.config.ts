// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    routeRules: {
      '/api/**': {
        proxy: {
          to: 'http://sample-backend-app-service:8080/api/**'
        },
      },
    }
  },
})

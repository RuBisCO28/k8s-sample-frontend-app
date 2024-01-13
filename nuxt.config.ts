// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'http://sample-backend-app-service:8080',
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, ''),
        }
    },
  },
}
})

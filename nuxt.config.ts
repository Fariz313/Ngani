// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  css: ["bootstrap/dist/css/bootstrap.min.css","@fortawesome/fontawesome-free/css/all.css","~/assets/style.css","~/assets/sizing.css"],
  modules: [
    '@vite-pwa/nuxt'
  ],
  pwa: {
    manifest: {
      lang: 'en',
      name: 'My Nuxt 3 App',
      short_name: 'Nuxt3PWA',
      description: 'My awesome Nuxt 3 Progressive Web App',
    },
  }

})

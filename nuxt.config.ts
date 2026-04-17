// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  srcDir: '.',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/eslint'],
  image: {
    domains: ['localhost', 'example.com'],
  },
  css: ['~/app/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:3001',
    },
  },
  routeRules: {
    '/': { ssr: true },
    '/list': { ssr: true },
    // Detalle de casa: ISR (revalida cada 60s)
    '/houses/**': { isr: { expiration: 60 } },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'es',
      },
      title: 'Casas rurales',
      meta: [{ name: 'description', content: 'Portal de alquiler vacacional de casas rurales.' }],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&family=Righteous&display=swap',
        },
      ],
    },
  },
});

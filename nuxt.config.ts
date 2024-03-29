// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Grido Helados',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr     : false,
  devtools: { enabled: true },
  app     : {
    head: {
      charset: 'utf-8',
      title  : '特訓2/PAS-POL',
      meta   : [
        { name: 'theme-color', content: '#000000' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { property: 'og:image', content: '/ogp.png' },
        { property: 'og:type', content: 'article' },
      ],
    },
  },
  css: [
    '@acab/reset.css',
    '~/assets/scss/base.scss',
  ],
})


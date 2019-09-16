const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Lamek Oy - Mikael Lavi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i|Bree+Serif'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/style/app.styl'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/vuetify'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-i18n',
      {
        // Options
        vueI18nLoader: true,
        locales: [
          { code: 'en', name: 'English', flag: '/en.png' },
          { code: 'fi', name: 'Suomi', flag: '/fi.png' }
        ],
        defaultLocale: 'fi',
        strategy: 'prefix_except_default',
        vueI18n: {
          fallbackLocale: 'fi'
        }
      },
      '@nuxtjs/pwa',
      {
        workbox: false,
        onesignal: false,
        icon: {
          iconSrc: 'static/favicon-256.png'
        }
      }
    ]
  ],

  /*
  ** Build configuration
  */
  // buildDir: 'dist',
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

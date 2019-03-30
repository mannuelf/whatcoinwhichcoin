const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'google-site-verification', content: 'nKI88c4xbyXEo5ub25G2-4JqjDiggUKqIZzMF5E4aJk'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Rajdhani:300,600,700|Roboto+Mono:100,300|VT323' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' },

    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#1B98E0' },

  /*
  ** Global CSS
  */
  css: ['~/assets/css/tailwind.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-analytics.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.whatcoinwhichcoin.com/',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false, // Enable me when using nuxt generate
    exclude: [
      '/secret',
      '/admin/**'
    ],
    routes: [
      '/',
      {
        url: '/',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2017-06-30T13:30:00.000Z'
      },
      'about-apis',
      {
        url: 'about-apis'
      }
    ]
  },
  /*
  ** Build configuration
  */
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

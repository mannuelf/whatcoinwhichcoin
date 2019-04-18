const RollbarSourceMapPlugin = require('rollbar-sourcemap-webpack-plugin')
const pkg = require('./package')

module.exports = {
  mode: 'universal',
  router: {
    middleware: 'i18n'
  },
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'google-site-verification',
        content: 'nKI88c4xbyXEo5ub25G2-4JqjDiggUKqIZzMF5E4aJk'
      },
      { name: 'msvalidate.01', content: 'D37242BCFEACCD5D06A16A1748BF7DA1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Rajdhani:300,600,700|Roboto+Mono:100,300|VT323'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
      }
    ]
  },
  loading: { color: '#1B98E0' },
  css: [],
  plugins: [
    {
      src: '~/plugins/vue-rollbar.js',
      ssr: true
    },
    {
      src: '~/plugins/vue-analytics.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-i18n.js',
      ssr: true
    }
  ],
  generate: {
    routes: ['/', '/pt', '/luno', '/pt/luno']
  },
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.whatcoinwhichcoin.com/',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    exclude: ['/secret', '/admin/**'],
    routes: [
      '/',
      {
        url: '/',
        changefreq: 'daily',
        priority: 1
      },
      '/about-apis',
      {
        url: 'about-apis',
        changefreq: 'daily'
      },
      '/pt',
      {
        url: '/pt',
        changefreq: 'daily'
      }
    ]
  },
  configureWebpack: {
    plugins: [
      new RollbarSourceMapPlugin({
        accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
        version: 'version-1',
        publicPath: 'https://www.whatcoinwhichcoin.com'
      })
    ]
  },
  build: {
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

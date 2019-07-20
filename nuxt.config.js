// const RollbarSourceMapPlugin = require('rollbar-sourcemap-webpack-plugin')
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
      { name: 'msvalidate.01', content: 'D37242BCFEACCD5D06A16A1748BF7DA1' },
      { name: 'yandex-verification', content: '026fe23883783f5c' },
      { name: 'msapplication-TileColor', content: '#0090df' },
      {
        name: 'msapplication-TileImage',
        content: '/layoutsicons/ms-icon-144x144.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/icons/apple-icon-57x57.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/icons/apple-icon-60x60.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/icons/apple-icon-72x72.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/icons/apple-icon-76x76.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/icons/apple-icon-114x114.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/icons/apple-icon-120x120.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/icons/apple-icon-144x144.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/icons/apple-icon-152x152.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-icon-180x180.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/icons/android-icon-192x192.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/icons/favicon-96x96.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Rajdhani:300,600,700|Roboto+Mono:100,300|VT323'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
      }
    ]
  },
  loading: { loading: true, color: '#1B98E0' },
  styleResources: {
    scss: ['./assets/sass/*.sass']
  },
  css: ['~/assets/sass/app.sass'],
  plugins: [
    {
      src: '~/plugins/vue-analytics.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-i18n.js',
      ssr: true
    },
    // {
      // src: '~/plugins/sw.js',
      // ssr: false
    // }
  ],
  generate: {
    routes: ['/', '/pt', '/luno', '/pt/luno', '/bitstamp', '/pt/bitstamp']
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/style-resources'
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
      },
      '/pt/luno',
      {
        url: '/pt/luno',
        changefreq: 'daily'
      },
      '/luno',
      {
        url: '/luno',
        changefreq: 'daily'
      },
      '/pt/bitstamp',
      {
        url: '/pt/bitstamp',
        changefreq: 'daily'
      },
      '/bitstamp',
      {
        url: '/bitstamp',
        changefreq: 'daily'
      }
    ]
  },
  configureWebpack: {
    devtool: 'source-map',
    plugins: []
  },
  build: {
    cssSourceMap: true,
    build: ['vue-i18n'],
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        // Run ESLint on save
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  workbox: {
    prefix: 'wcwc',
    suffix: 'v0.1',
    cachingExtensions: '@/plugins/workbox-range-request.js',
    runtimeCaching: [
      {
        urlPattern: ['/'],
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: {
          cacheName: 'site-cache',
          cacheableResponse: { statuses: [0, 200] }
        }
      },
      {
        urlPattern: 'https://fonts.googleapis.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: 'https://fonts.gstatic.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      }
    ]
  },
  manifest: {
    name: 'WHAT Coin WHICH Coin',
    short_name: 'WCWC',
    start_url: '/',
    scope: '/',
    display: 'fullscreen',
    orientation: 'portrait-primary',
    background_color: '#0090df',
    theme_color: '#0090df',
    description: 'Crypto currency price dashboard',
    dir: 'ltr',
    icons: [
      {
        src: '/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png'
      },
      {
        src: '/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png'
      },
      {
        src: '/icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png'
      },
      {
        src: '/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png'
      },
      {
        src: '/icons/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png'
      },
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icons/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png'
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
}


export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
  ],
  plugins: ['@/plugins/composition-api'], // Plugins to load before mounting the App
  buildModules: [
    'nuxt-typed-vuex',
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',// Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/tailwindcss',// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
  ],
  modules: [
    '@nuxtjs/axios',// Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',// Doc: https://github.com/nuxt-community/dotenv-module
  ],
  axios: {
    // See https://axios.nuxtjs.org/options
  },
  build: {
    transpile: [
      /typed-vuex/,
    ],
    extend (config, ctx) {
    }
  }
}

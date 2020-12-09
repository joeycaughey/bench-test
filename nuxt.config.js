import webpack from 'webpack'


export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - bench-test',
    title: 'bench-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  components: true,
  css: [
  ],
  plugins: [
    { src: '~/plugins/nuxt-client-init.js', ssr: false },
    { src: '~plugins/filters.js' },
  ],
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {

  },
  build: {
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new webpack.ProvidePlugin({
        '_': 'lodash',
        'moment': 'moment'
      })
    ]
  }
}

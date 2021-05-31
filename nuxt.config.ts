/*
 * @Author: cen
 * @Date: 2021-05-26 09:55:37
 * @LastEditTime: 2021-05-26 17:31:42
 * @LastEditors: cenchengwei@foreverht.com
 * @Description:
 * @FilePath: /szient-hybrid-h5/nuxt.config.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'szient-hybrid-h5',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no',
      },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: '/js/flexible.min.js' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['vant/lib/index.css', '~/assets/fonts/iconfont.css', '~/assets/css/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/vant.ts',
    },
    {
      src: '~/plugins/lib-flexible.ts',
      mode: 'client',
    },
    { src: '~/plugins/i18n.ts' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-pxtorem': {
          replace: true,
          rootValue: 37.5,
          propList: ['*'],
        },
      },
      autoprefixer: {
        browsers: ['Android >= 4.0', 'iOS >= 8'],
      },
    },
    styleResources: {
      scss: './assets/css/variables.scss',
    },
  },
}

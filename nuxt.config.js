module.exports = {
  plugins: ['~plugins/vue-lazyload', '~plugins/app'],
  env: {
    contentaJSONAPIBaseUrl: 'https://dev-contentacms.pantheonsite.io'
  },
  /*
  ** Build configuration
  */
  build: {
    // include thoses packages only once to make code lighter
    vendor: ['axios', 'waterwheel', 'jsonapi-parse'],
    extend (config) {
      // disable uglify, does not support ES6 -_-
      config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'UglifyJsPlugin')
    }
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    meta: [
      {name: 'viewport', content : 'width=device-width, user-scalable=no'}
    ],
    link: [
      /* @custom */
      { rel: 'stylesheet', type: 'text/css', href: '/css/bulma.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/app.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: [
    //  '@nuxtjs/pwa'
  ]
}

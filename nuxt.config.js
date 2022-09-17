const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '全国各地の宿泊施設を検索しましょう！',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'hotel-favicon.png' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/vuejs-paginate', ssr:false},
    {src: '~/plugins/vuejs-datepicker', ssr: false },
    {src: '~/plugins/moment.js', ssr: false },
    // {src: '~/plugins/firebase.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  env: {
    // baseUrl: 'https://app.rakuten.co.jp/services/api/Travel/SimpleHotelSearch/20170426'
    baseUrl: 'https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426'
  },
  // router: {
  //   middleware: "authenticated"
  // },
  target: 'static'
}

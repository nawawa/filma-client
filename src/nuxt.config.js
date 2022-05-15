import colors from 'vuetify/es5/util/colors'

export default {
  
  axios: {
    prefix: 'http://filma-api-web-1:80', // baseURLの代わり
    proxy: true,
    credentials: true,
  },

  proxy: {
    '/laravel': {
      target: 'http://0.0.0.0:4001',
      pathRewrite: { '^/laravel': '/' }
    },
    '/api/': 'http://0.0.0.0:8080',
  },

  auth: {
    redirect: {
      login: '/login', // ログインが必要な場合、ユーザーはこのパスにリダイレクトされます。
      logout: '/', // ログアウト後、現在の経路が保護されている場合、このパスにリダイレクトされます。
      callback: '/login', // ユーザーはログイン後、IDプロバイダによってこのパスにリダイレクトされます。
      home: '/login_user' // ログイン後、このパスにリダイレクトされます。
    },
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://0.0.0.0:8080',
        cookie: {
          // (オプション) 設定されている場合、ログインチェックのためにこのクッキーの存在を確認します。
          name: 'XSRF-TOKEN',
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          // (オプション) 設定された場合、ログイン前にこのエンドポイントに get リクエストを送信します。
          csrf: {
            url: '/sanctum/csrf-cookie'
          }
        }
      }
    }
  },

  privateRuntimeConfig: {
    axios: {
      prefix: process.env.API_URL,
    }
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.NODE_ENV !== 'production' ? 'http://0.0.0.0:8080' : '',
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Filma',
    title: 'Filma',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  router: {
    middleware: ['auth']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

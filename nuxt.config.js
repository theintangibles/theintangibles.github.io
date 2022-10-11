export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    port: 4000
  },
  router: {
    base: '/theintangibles.github.io/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'The Intangibles',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#070606' },
      { name: 'robots', content: 'noindex' },
      { name: 'twitter:title', content: 'The Intangibles' },
      { name: 'twitter:description', content: 'Twitter Card Here' },
      { name: 'twitter:card', content: 'summary_large_image' },
      // { name: 'twitter:image', content: 'https://www.userevidence.com/img/external/Library.png' },
      { name: 'twitter:image:alt', content: 'The Intangibles' },
      { property: 'og:title', content: 'The Intangibles' },
      { property: 'og:description', content: 'OG Card Here' },
      // { property: 'og:image', content: 'https://www.userevidence.com/img/external/Library.png' },
      { property: 'og:url', content: 'https://www.TheIntangibles.com' },
      { property: 'og:site_name', content: 'The Intangibles' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles.sass'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

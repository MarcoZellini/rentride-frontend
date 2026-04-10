// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxtjs/i18n'],

  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover'
    }
  },

  components: [
    {
      path: '~/components',
      pathPrefix: true,
      ignore: ['**/commons/**']
    },
    {
      path: '~/components/commons',
      pathPrefix: false
    }
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  i18n: {
    locales: [
      { code: 'it', name: 'Italiano', file: 'it.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'it',
    strategy: 'prefix', // o 'prefix_except_default' se vuoi escludere il default locale
    pages: {
      // Nome del file nella cartella pages : percorsi localizzati
      'veicoli': {
        it: '/veicoli',
        en: '/vehicles'
      },
      'tour': {
        it: '/tour',
        en: '/tours'
      },
      'corsi': {
        it: '/corsi',
        en: '/courses'
      },
      'chi-siamo': {
        it: '/chi-siamo',
        en: '/about-us'
      },
      'contatti': {
        it: '/contatti',
        en: '/contact'
      }
    }
  }
})

// src/main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './main.css'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// Auto Animate
import autoAnimate from '@formkit/auto-animate'

// i18n
import i18n from './i18n'

// --------------------
// Vuetify instance
// --------------------
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#7F1D1D',       // Deep red
          secondary: '#4C0519',     // Darker red
          background: '#F3F4F6',    // Soft light background
        },
      },
      dark: {
        colors: {
          primary: '#B91C1C',       // Slightly muted red for dark mode
          secondary: '#991B1B',     // Dark red secondary
          background: '#111827',    // Soft black background
        },
      },
    },
  },
})

// --------------------
// Create Vue app
// --------------------
const app = createApp(App)
const pinia = createPinia()

// --------------------
// Global directive
// --------------------
app.directive('auto-animate', {
  mounted(el) {
    autoAnimate(el)
  },
})

// --------------------
// Register plugins
// --------------------
app.use(vuetify)   // Vuetify must be used before router/i18n
app.use(pinia)
app.use(router)
app.use(i18n)

// --------------------
// Mount app
// --------------------
app.mount('#app')

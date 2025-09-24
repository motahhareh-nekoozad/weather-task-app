// src/main.ts
import { createApp } from 'vue'
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

const vuetify = createVuetify({
  components,
  directives,
    theme: {
    defaultTheme: 'light', 
    themes: {
      light: {
        colors: {
          primary: '#7F1D1D',  
          secondary: '#4C0519',
          background: '#F3F4F6',
        
        }
      },
      dark: {
        colors: {
          primary: '#B91C1C',
          secondary: '#991B1B',
          background: '#111827',
        }
      }
    }
  }
})

const app = createApp(App)

// Global directive
app.directive('auto-animate', {
  mounted(el) {
    autoAnimate(el)
  },
})

// Order matters: Vuetify first
app.use(vuetify)
app.use(router)
app.use(i18n)
app.mount('#app')

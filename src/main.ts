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

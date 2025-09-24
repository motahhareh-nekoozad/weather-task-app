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

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.directive('auto-animate', {
  mounted(el) {
    autoAnimate(el)
  }
})

app
  .use(router)
  .use(vuetify)
  .mount('#app')

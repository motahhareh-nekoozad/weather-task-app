import { mount } from 'cypress/vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import i18n from '../../src/i18n'

// Helper: mount component with Vuetify + i18n
export function mountWithVuetify(component: any, options = {}) {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: { colors: { primary: '#7F1D1D', secondary: '#4C0519', background: '#F3F4F6' } },
        dark: { colors: { primary: '#B91C1C', secondary: '#991B1B', background: '#111827' } },
      },
    },
  })

  return mount(component, {
    global: {
      plugins: [vuetify, i18n], // Vuetify + i18n هر دو اینجا اضافه شدند
    },
    ...options,
  })
}

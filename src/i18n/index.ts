import { createI18n } from 'vue-i18n'
import en from './en.json'
import fa from './fa.json'

const messages = {
  en,
  fa
}

const i18n = createI18n({
  legacy: false,      
  locale: 'en',       
  fallbackLocale: 'en',
  messages
})

export default i18n

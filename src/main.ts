import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import messages from './i18n';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import './style.css'


const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages,
});

const vuetify = createVuetify();

const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(vuetify);
app.mount('#app');

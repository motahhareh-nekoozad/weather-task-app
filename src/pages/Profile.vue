<template>
  <v-container class="pa-4" style="max-width: 400px;">
    <v-text-field v-model="name" :label="t('name')" outlined></v-text-field>

    <v-select
      v-model="themeChoice"
      :items="['light','dark']"
      :label="t('theme')"
      outlined
      class="mt-4"
    ></v-select>

    <v-select
      v-model="language"
      :items="['en','fa']"
      :label="t('language')"
      outlined
      class="mt-4"
    ></v-select>

    <v-btn color="secondary" class="mt-6" @click="saveSettings">{{ t('save') }}</v-btn>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import { useTheme } from 'vuetify'
import { useI18n } from 'vue-i18n'

const name = ref('')
const themeChoice = ref('light')
const language = ref('en')

const theme = useTheme()
const { t, locale } = useI18n()

onMounted(() => {
  name.value = localStorage.getItem('name') || ''
  themeChoice.value = localStorage.getItem('theme') || 'light'
  language.value = localStorage.getItem('lang') || 'en'

  applyTheme(themeChoice.value)
  applyLanguage(language.value)
})

watch(themeChoice, (newTheme) => applyTheme(newTheme))
watch(language, (newLang) => applyLanguage(newLang))

const saveSettings = () => {
  localStorage.setItem('name', name.value)
  localStorage.setItem('theme', themeChoice.value)
  localStorage.setItem('lang', language.value)
  alert(t('settingsSaved') || 'Settings saved!')
}

const applyTheme = (tValue: string) => {
  theme.global.name.value = tValue
}

const applyLanguage = (lang: string) => {
  locale.value = lang
  document.documentElement.lang = lang
}
</script>

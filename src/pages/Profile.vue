<template>
  <v-container class="pa-4" style="max-width: 400px;">
    <v-text-field
      v-model="name"
      label="Name"
      outlined
    ></v-text-field>

    <v-select
      v-model="theme"
      :items="['light', 'dark']"
      label="Theme"
      outlined
      class="mt-4"
    ></v-select>

    <v-select
      v-model="language"
      :items="['en','fa']"
      label="Language"
      outlined
      class="mt-4"
    ></v-select>

    <v-btn color="primary" class="mt-6" @click="saveSettings">Save</v-btn>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const name = ref(localStorage.getItem('name') || '')
const theme = ref(localStorage.getItem('theme') || 'light')
const language = ref(localStorage.getItem('lang') || 'en')

const saveSettings = () => {
  localStorage.setItem('name', name.value)
  localStorage.setItem('theme', theme.value)
  localStorage.setItem('lang', language.value)
  alert('Settings saved!')
}
</script>

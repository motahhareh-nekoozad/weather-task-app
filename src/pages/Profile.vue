<template>
  <div>
    <v-container>
      <v-text-field v-model="name" label="Name" @change="saveSettings"></v-text-field>
      <v-select
        v-model="theme"
        :items="['light', 'dark']"
        label="Theme"
        @change="saveSettings"
      ></v-select>
      <v-select
        v-model="language"
        :items="['en','fa']"
        label="Language"
        @change="saveSettings"
      ></v-select>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';

const name = ref(localStorage.getItem('name') || '');
const theme = ref(localStorage.getItem('theme') || 'light');
const language = ref(localStorage.getItem('lang') || 'en');

const saveSettings = () => {
  localStorage.setItem('name', name.value);
  localStorage.setItem('theme', theme.value);
  localStorage.setItem('lang', language.value);
  location.reload();
};
</script>

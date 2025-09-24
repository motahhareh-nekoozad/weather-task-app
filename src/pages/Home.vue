<template>
  <v-row>
    <v-col cols="12">
      <v-container class="text-center">
        <h2 class="font-bold text-4xl mb-12">{{ time }}</h2>

        <h1 class="font-semibold text-lg">{{ greetingMessage }}</h1>
      </v-container>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Get user name
const name = ref(localStorage.getItem('name') || '');
if (!name.value) name.value = prompt(`${t('enter-your-name')}`) || 'Guest';
localStorage.setItem('name', name.value);

// Reactive variables
const time = ref(new Date().toLocaleTimeString());
const greetingMessage = ref('');

// Update greeting based on current hour
const updateGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) greetingMessage.value = `${t('goodMorning')}, ${name.value}`;
  else if (hour < 18) greetingMessage.value = `${t('goodAfternoon')}, ${name.value}`;
  else if (hour < 22) greetingMessage.value = `${t('goodEvening')}, ${name.value}`;
  else greetingMessage.value = `${t('goodNight')}, ${name.value}`;
};

// Update time and greeting every second
onMounted(() => {
  updateGreeting();
  setInterval(() => {
    time.value = new Date().toLocaleTimeString();
    updateGreeting();
  }, 1000);
});
</script>

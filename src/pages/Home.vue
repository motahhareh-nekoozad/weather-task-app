<template>
  <DefaultLayout>
    <div class="text-center ">
      <h1>{{ greetingMessage }}</h1>
      <h2>{{ time }}</h2>
    </div>
  </DefaultLayout>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';

const name = ref(localStorage.getItem('name') || '');
if (!name.value) name.value = prompt('Enter your name') || 'Guest';

localStorage.setItem('name', name.value);

const time = ref(new Date().toLocaleTimeString());

const greetingMessage = ref('');

const updateGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) greetingMessage.value = `Good Morning, ${name.value}`;
  else if (hour < 18) greetingMessage.value = `Good Afternoon, ${name.value}`;
  else greetingMessage.value = `Good Evening, ${name.value}`;
};

onMounted(() => {
  updateGreeting();
  setInterval(() => {
    time.value = new Date().toLocaleTimeString();
    updateGreeting();
  }, 1000);
});
</script>

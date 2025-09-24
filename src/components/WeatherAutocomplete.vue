<template>
  <v-autocomplete v-model="city" :items="cities.map(c => c.city)" label="Enter city"></v-autocomplete>

  <div class="flex flex-col text-center border rounded-md h-screen justify-center" v-if="weather">
    <p>Temperature: {{ weather.temperature }}°C</p>
    <p>Wind Speed: {{ weather.windspeed }} km/h</p>
    <p>Wind Direction: {{ weather.winddirection }}°</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import citiesData from '../cities.json';

const cities = ref<any[]>([]);
const city = ref('');
const weather = ref<any>(null);


onMounted(() => {
  cities.value = citiesData;
});

// Watch city to fetch weather whenever it changes
watch(city, async (newCity) => {
  if (!newCity) return;

  const selected = cities.value.find(c => c.city === newCity);
  if (!selected) return;

  const lat = parseFloat(selected.lat);
  const lon = parseFloat(selected.lng);

  
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
  );
  const data = await res.json();
  weather.value = data.current_weather;
});
</script>

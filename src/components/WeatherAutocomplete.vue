<template>
  <v-autocomplete
    v-model="city"
    :items="cities"
    label="Enter city"
    @change="fetchWeather"
  ></v-autocomplete>
  <div v-if="weather">
    <p>Temperature: {{ weather.temperature }}°C</p>
    <p>Wind Speed: {{ weather.windspeed }} km/h</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const cities = ['Tehran', 'Mashhad', 'Isfahan', 'Tabriz'];
const city = ref('');
const weather = ref<any>(null);

const fetchWeather = async () => {
  if (!city.value) return;
  const coords: any = {
    Tehran: { lat: 38.08, lon: 46.29 },
    Mashhad: { lat: 36.3, lon: 59.6 },
    Isfahan: { lat: 32.65, lon: 51.68 },
    Tabriz: { lat: 38.08, lon: 46.29 },
  };
  const c = coords[city.value];
  const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${c.lat}&longitude=${c.lon}&current_weather=true`);
  const data = await res.json();
  weather.value = data.current_weather;
};
</script>

<template>
  <!-- City Selector -->
  <v-autocomplete v-model="city" :items="cities.map(c => c.city)" :placeholder="t('selectCity')" variant="outlined"
    hide-details density="comfortable" clearable />

  <!-- Weather Info -->
  <div class="flex flex-col text-center border rounded-md mt-6 p-6" v-if="weather && selectedCity">
    <h2 class="text-lg font-bold mb-2">{{ selectedCity.city }}</h2>
    <p> {{ weather.temperature }}°C</p>
    <p> {{ weather.windspeed }} km/h</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import citiesData from '../cities.json'

const { t } = useI18n()

const cities = ref<any[]>([])
const city = ref('')
const weather = ref<any>(null)
const selectedCity = ref<any>(null)

onMounted(() => {
  cities.value = citiesData
})

watch(city, async (newCity) => {
  if (!newCity) return

  selectedCity.value = cities.value.find(c => c.city === newCity)
  if (!selectedCity.value) return

  const lat = parseFloat(selectedCity.value.lat)
  const lon = parseFloat(selectedCity.value.lng)

  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
  )
  const data = await res.json()
  weather.value = data.current_weather
})
</script>

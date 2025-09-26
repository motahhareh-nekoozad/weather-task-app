<template>
  <!-- City Selector -->
  <v-autocomplete
    v-model="city"
    :items="cities.map(c => c.city)"
    :placeholder="t('selectCity')"
    variant="outlined"
    hide-details
    density="comfortable"
    clearable
  />

  <!-- Weather Info -->
  <div class="flex flex-col items-center justify-center text-center border rounded-md mt-6 p-6 min-h-[120px]">
    <!-- Loading Spinner -->
    <div v-if="weatherStore.loading" class="flex justify-center items-center h-full">
      <v-progress-circular indeterminate color="primary" size="48" />
    </div>

    <!-- No City Selected -->
    <div v-else-if="!weatherStore.selectedCity">
      {{ t('noCitySelected') }}
    </div>

    <!-- Weather Data -->
    <div v-else>
      <h2 class="text-lg font-bold mb-2">{{ weatherStore.selectedCity.city }}</h2>
      <p>{{ weatherStore.currentWeather?.temperature }}°C</p>
      <p>{{ weatherStore.currentWeather?.windspeed }} km/h</p>
    </div>
  </div>
</template>



<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import citiesData from '../cities.json'
import { useWeatherStore } from '../store/weather'

const { t } = useI18n()
const weatherStore = useWeatherStore()

const city = ref('')

// Load cities on mount
onMounted(() => {
  weatherStore.setCities(citiesData)
})

// Watch for city selection and update store
watch(city, (newCity) => {
  if (newCity) {
    weatherStore.selectCity(newCity)
  } else {
    // Clear selected city and weather when input is cleared
    weatherStore.selectedCity = null
    weatherStore.currentWeather = null
  }
})

// For autocomplete items
const cities = ref(citiesData)
</script>

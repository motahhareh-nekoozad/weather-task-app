// store/weather.ts
import { defineStore } from 'pinia'

interface City {
  city: string
  lat: string
  lng: string
}

interface Weather {
  temperature: number
  windspeed: number
  [key: string]: any
}

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    cities: [] as City[],
    selectedCity: null as City | null,
    currentWeather: null as Weather | null,
    loading: false
  }),
  actions: {
    setCities(cities: City[]) {
      this.cities = cities
    },
    selectCity(cityName: string) {
      const city = this.cities.find(c => c.city === cityName)
      if (!city) return

      this.selectedCity = city
      this.fetchWeather(parseFloat(city.lat), parseFloat(city.lng))
    },
    async fetchWeather(lat: number, lon: number) {
      this.loading = true
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        )
        const data = await res.json()
        this.currentWeather = data.current_weather
      } catch (e) {
        console.error('Error fetching weather:', e)
      } finally {
        this.loading = false
      }
    },
  },
})

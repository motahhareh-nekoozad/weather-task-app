<template>
  <aside class="w-56 p-4 h-full" :class="bgClass">
    <ul>
      <li v-for="item in menuItems" :key="item.title" class="mb-4">
        <router-link
          :to="item.route"
          :class="linkClass"
          :active-class="activeLinkClass"
          class="flex items-center gap-2"
        >
          <v-icon size="20">{{ item.icon }}</v-icon>
          <span>{{ item.title }}</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

// Menu items with icons
const menuItems = [
  { title: 'Dashboard', route: '/', icon: 'mdi-view-dashboard' },
  { title: 'Todos', route: '/todo', icon: 'mdi-format-list-checkbox' },
  { title: 'Weather', route: '/weather', icon: 'mdi-weather-partly-cloudy' },
  { title: 'Profile', route: '/profile', icon: 'mdi-account-circle' },
]

// Background color based on theme
const bgClass = computed(() =>
  theme.global.current.value.dark ? 'bg-gray-800' : 'bg-gray-200'
)

// Text color and hover based on theme
const linkClass = computed(() => {
  if (theme.global.current.value.dark) {
    return 'block font-semibold text-gray-200 hover:text-[#991B1B]'
  } else {
    return 'block font-semibold text-gray-800 hover:text-[#4C0519]'
  }
})

// Active link color based on theme
const activeLinkClass = computed(() =>
  theme.global.current.value.dark ? 'text-[#991B1B]' : 'text-[#4C0519]'
)
</script>

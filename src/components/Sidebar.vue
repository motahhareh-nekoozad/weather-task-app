<template>
  <aside class="w-56 p-4" :class="bgClass">
    <ul>
      <li
        v-for="item in menuItems"
        :key="item.title"
        class="mb-4"
      >
        <router-link
          :to="item.route"
          :class="linkClass"
          :active-class="activeLinkClass"
        >
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

// Menu items
const menuItems = [
  { title: 'Dashboard', route: '/' },
  { title: 'Todos', route: '/todo' },
  { title: 'Weather', route: '/weather' },
  { title: 'Profile', route: '/profile' },
]

// Background color based on theme
const bgClass = computed(() =>
  theme.global.current.value.dark ? 'bg-gray-800' : 'bg-gray-200'
)

// Text color and hover based on theme
const linkClass = computed(() => {
  if (theme.global.current.value.dark) {
    return 'block font-semibold text-gray-200 hover:text-indigo-400'
  } else {
    return 'block font-semibold text-gray-800 hover:text-indigo-600'
  }
})

// Active link color based on theme
const activeLinkClass = computed(() =>
  theme.global.current.value.dark ? 'text-indigo-400' : 'text-indigo-600'
)
</script>

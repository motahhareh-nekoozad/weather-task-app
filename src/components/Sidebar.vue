<template>
  <aside class="w-56 bg-gray-200 p-4">
    <ul>
      <li v-for="item in menuItems" :key="item.title" class="mb-4">
        <router-link
          :to="item.route"
          class="block font-semibold text-gray-700 hover:text-indigo-600"
          active-class="text-indigo-600"
        >
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
const menuItems = [
  { title: 'Dashboard', route: '/' },
  { title: 'Todos', route: '/todo' },
  { title: 'Weather', route: '/weather' },
  { title: 'Profile', route: '/profile' },
]
</script>

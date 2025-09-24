<template>
  <v-navigation-drawer
    app
    permanent
    width="220"
  >
    <v-list density="compact">
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        :to="item.route"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
const menuItems = [
  { title: 'Home', route: '/', icon: 'mdi-home' },
  { title: 'To-do List', route: '/todo', icon: 'mdi-format-list-bulleted' },
  { title: 'Weather', route: '/weather', icon: 'mdi-weather-partly-cloudy' },
  { title: 'Profile', route: '/profile', icon: 'mdi-account' },
];
</script>

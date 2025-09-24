<template>
  <v-app>
    <DefaultLayout>
      <router-view />
    </DefaultLayout>
  </v-app>
</template>

<script lang="ts" setup>
import DefaultLayout from './layouts/DefaultLayout.vue'
</script>

<template>
  <header class="h-16 bg-primary text-white flex items-center px-6">
    <button
      class="md:hidden mr-4 focus:outline-none"
      @click="$emit('toggle-drawer')"
    >
      <v-icon>mdi-menu</v-icon>
    </button>

    <h1 class="text-xl font-bold">{{ t('appName') }}</h1>
  </header>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

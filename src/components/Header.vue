<template>
  <header class="h-16 bg-primary text-white flex items-center px-6">
    <h1 class="text-xl font-bold">{{ t('appName') }}</h1>
  </header>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

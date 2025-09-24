<template>
  <!-- Apply Vuetify theme class to the root -->
  <div :class="themeClass" class="flex flex-col min-h-screen">

    <!-- Header -->
    <Header />

    <!-- Main content + Sidebar -->
    <div class="flex flex-1">
      <Sidebar class="flex-shrink-0" />

      <!-- Slot content -->
      <main class="flex-1 p-4">
        <v-container class="pa-4">
          <slot />
        </v-container>
      </main>

    </div>

    <!-- Footer sticky to bottom -->
    <Footer class="mt-auto" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

// Computed Vuetify theme class for dark/light
const themeClass = computed(() =>
  theme.global.current.value.dark ? 'v-theme--dark' : 'v-theme--light'
)
</script>

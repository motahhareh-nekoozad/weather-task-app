<template>
  <div :class="themeClass" class="flex flex-col min-h-screen">
    <!-- Header -->
    <Header @toggle-drawer="drawerOpen = !drawerOpen" />

    <!-- Main content + Sidebar -->
    <div class="flex flex-1">
      <!-- SideBar for Desktop-->
      <Sidebar class="hidden md:block flex-shrink-0" />

      <!-- Slot content -->
      <main class="flex-1 p-4">
        <v-container class="pa-4">
          <slot />
        </v-container>
      </main>
    </div>

    <!-- Footer sticky -->
    <Footer class="mt-auto" />

    <v-navigation-drawer v-model="drawerOpen" temporary location="left" class="p-0"
      :style="{ backgroundColor: 'transparent' }">
      <Sidebar class="h-full w-full" />
    </v-navigation-drawer>

  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const drawerOpen = ref(false)

// Computed Vuetify theme class
const themeClass = computed(() =>
  theme.global.current.value.dark ? 'v-theme--dark' : 'v-theme--light'
)
</script>

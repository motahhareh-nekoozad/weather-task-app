<template>
  <v-app>
    <v-app-bar app>
      <Header />
    </v-app-bar>

    <Sidebar />

    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>

    <v-footer app>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
</script>

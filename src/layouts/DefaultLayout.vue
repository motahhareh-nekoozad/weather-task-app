<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <Header />

    <div class="flex flex-1">
      <!-- Sidebar -->
      <Sidebar />

      <!-- Main Content -->
      <main class="flex-1 p-4 bg-gray-100">
        <slot />
      </main>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script lang="ts" setup>
</script>

<script setup lang="ts">
import Header from './components/AppHeader.vue'
import Footer from './components/AppFooter.vue'
</script>

<template>
  <UApp class="min-h-svh bg-dark">
    <Header />

    <UMain class="min-w-0 bg-dark">
      <NuxtPage />
    </UMain>

    <Footer />
  </UApp>
</template>

<style scoped></style>

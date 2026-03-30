<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

interface NavigationMenuItem {
  label: string
  to: string
  active: boolean
}

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    active: route.path === '/'
  },
  {
    label: 'Veicoli',
    to: '/vehicles',
    active: route.path.startsWith('/vehicles')
  },
  {
    label: 'Tour',
    to: '/tours',
    active: route.path.startsWith('/tours')
  },
  {
    label: 'Corsi',
    to: '/courses',
    active: route.path.startsWith('/courses')
  }
])
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink
        to="/"
        class="flex items-center gap-2"
      >
        <img
          src="/logo.png"
          alt="Rent Ride Pesaro Logo"
          class="w-auto h-12 shrink-0"
        >
        <div class="text-xl font-bold">Rent&Ride</div>
      </NuxtLink>
    </template>

    <UNavigationMenu
      class="uppercase text-2xl"
      :items="items"
    />

    <template #right>
      <button>TEMPLATE</button>
    </template>
  </UHeader>
</template>

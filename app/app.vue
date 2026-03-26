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
  <UApp>
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

      <template #right>
        <UNavigationMenu :items="items" />
      </template>
    </UHeader>

    <UMain />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Built with ❤️ from Marco Zellini • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UTooltip text="Instagram">
          <UButton
            to="https://www.instagram.com/rent_ride_pesaro/"
            target="_blank"
            icon="i-simple-icons-instagram"
            aria-label="Instagram"
            color="neutral"
            variant="ghost"
          />
        </UTooltip>
        <UTooltip text="Facebook">
          <UButton
            to="https://www.facebook.com/p/RentRide-100083296144373/"
            target="_blank"
            icon="i-simple-icons-facebook"
            aria-label="Facebook"
            color="neutral"
            variant="ghost"
          />
        </UTooltip>
      </template>
    </UFooter>
  </UApp>
</template>

<style scoped></style>

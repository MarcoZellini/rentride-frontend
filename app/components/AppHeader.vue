<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

interface NavigationMenuItem {
  label: string
  to: string
  active: boolean
}

const route = useRoute()
const { locale, t } = useI18n()
const localePath = useLocalePath()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: t('nav.home'),
    to: localePath('/'),
    active: route.path === '/'
  },
  {
    label: t('nav.vehicles'),
    to: localePath('/vehicles'),
    active: route.path.startsWith('/vehicles')
  },
  {
    label: t('nav.tours'),
    to: localePath('/tours'),
    active: route.path.startsWith('/tours')
  },
  {
    label: t('nav.courses'),
    to: localePath('/courses'),
    active: route.path.startsWith('/courses')
  },
  {
    label: t('nav.about'),
    to: localePath('/about'),
    active: route.path.startsWith('/about')
  },
  {
    label: t('nav.contact'),
    to: localePath('/contatti'),
    active: route.path.startsWith('/contatti')
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
      <NuxtLink
        v-if="locale !== 'it'"
        :to="$switchLocalePath('it')"
        class="inline-flex min-h-[44px] items-center"
      >IT</NuxtLink>
      <NuxtLink
        v-else
        :to="$switchLocalePath('en')"
        class="inline-flex min-h-[44px] items-center"
      >EN</NuxtLink>

      <NuxtLink
        :to="localePath('/contatti')"
        class="btn-primary inline-flex min-h-[44px] items-center"
      >
        {{ t('nav.bookNow') }}
      </NuxtLink>
    </template>
  </UHeader>
</template>

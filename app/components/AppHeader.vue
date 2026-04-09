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
    to: '/',
    active: !!route.name?.toString().startsWith('index')
  },
  {
    label: t('nav.about'),
    to: 'chi-siamo',
    active: !!route.name?.toString().startsWith('chi-siamo')
  },
  {
    label: t('nav.vehicles'),
    to: 'veicoli',
    active: !!route.name?.toString().startsWith('veicoli')
  },
  {
    label: t('nav.tours'),
    to: 'tour',
    active: !!route.name?.toString().startsWith('tour')
  },
  {
    label: t('nav.courses'),
    to: 'corsi',
    active: !!route.name?.toString().startsWith('corsi')
  },
  {
    label: t('nav.contact'),
    to: 'contatti',
    active: !!route.name?.toString().startsWith('contatti')
  }
])
</script>

<template>
  <UHeader
    class="border-b border-white/10 bg-dark text-white transition-all duration-300"
    :ui="{
      content: 'bg-dark text-white border-white/10',
      body: 'bg-dark'
    }"
  >
    <template #left>
      <NuxtLink
        to="/"
        class="flex items-center gap-2 text-white"
      >
        <img
          src="/logo.png"
          alt="Rent&Ride Pesaro logo"
          class="h-12 w-auto shrink-0"
        >
        <div class="font-display text-xl font-bold text-white">
          Rent&Ride
        </div>
      </NuxtLink>
    </template>

    <UNavigationMenu
      class="font-display text-sm font-bold uppercase tracking-wide md:text-base"
      :items="items"
    />

    <template #right>
      <NuxtLink
        v-if="locale !== 'it'"
        :to="$switchLocalePath('it')"
        class="inline-flex min-h-11 items-center font-medium text-gray-300 transition-colors hover:text-primary"
      >IT</NuxtLink>
      <NuxtLink
        v-else
        :to="$switchLocalePath('en')"
        class="inline-flex min-h-11 items-center font-medium text-gray-300 transition-colors hover:text-primary"
      >EN</NuxtLink>

      <NuxtLink
        :to="localePath('/contatti')"
        class="btn-primary inline-flex min-h-11 items-center ms-3"
      >
        {{ t('nav.bookNow') }}
      </NuxtLink>
    </template>
  </UHeader>
</template>

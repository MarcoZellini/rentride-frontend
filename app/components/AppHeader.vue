<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()
const { locale, t } = useI18n()
const paths = useLocalizedRoutes()

const items = computed<NavigationMenuItem[]>(() => {
  const p = paths.value
  return [
    {
      label: t('nav.home'),
      to: p.home,
      active: !!route.name?.toString().startsWith('index')
    },
    {
      label: t('nav.about'),
      to: p.chiSiamo,
      active: !!route.name?.toString().startsWith('chi-siamo')
    },
    {
      label: t('nav.vehicles'),
      to: p.veicoli,
      active: !!route.name?.toString().startsWith('veicoli')
    },
    {
      label: t('nav.tours'),
      to: p.tour,
      active: !!route.name?.toString().startsWith('tour')
    },
    {
      label: t('nav.courses'),
      to: p.corsi,
      active: !!route.name?.toString().startsWith('corsi')
    },
    {
      label: t('nav.contact'),
      to: p.contatti,
      active: !!route.name?.toString().startsWith('contatti')
    }
  ]
})
</script>

<template>
  <UHeader
    class="border-b border-white/10 bg-dark text-white transition-all duration-300"
    :ui="{
      content: 'bg-dark text-white border-white/10',
      body: 'bg-dark',
      right: 'flex flex-wrap items-center justify-end gap-x-2 gap-y-1 lg:flex-1',
      header: 'border-b border-white/10 bg-dark'
    }"
  >
    <template #left>
      <NuxtLink
        :to="paths.home"
        class="flex items-center gap-2 text-white"
      >
        <img
          src="/logo.png"
          alt="Rent&Ride Pesaro logo"
          class="h-10 w-auto shrink-0 sm:h-11 lg:h-12"
        >
        <div class="font-display text-lg font-bold text-white sm:text-xl">
          Rent&Ride
        </div>
      </NuxtLink>
    </template>

    <UNavigationMenu
      class="font-display text-sm font-bold uppercase tracking-wide lg:text-base"
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
        :to="paths.contatti"
        class="btn-primary inline-flex min-h-11 max-w-full shrink items-center px-3 text-center sm:px-4"
      >
        {{ t('nav.bookNow') }}
      </NuxtLink>
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5 font-display text-sm font-bold uppercase tracking-wide"
      />
    </template>
  </UHeader>
</template>

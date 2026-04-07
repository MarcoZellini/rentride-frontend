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
    to: '/', // 'index' punta a pages/index.vue
    active: !!route.name?.toString().startsWith('index')
  },
  {
    label: t('nav.vehicles'),
    to: 'veicoli', // Usa il nome del file, i18n farà il resto
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
    label: t('nav.about'),
    to: 'chi-siamo',
    active: !!route.name?.toString().startsWith('chi-siamo')
  },
  {
    label: t('nav.contact'),
    to: 'contatti',
    active: !!route.name?.toString().startsWith('contatti')
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

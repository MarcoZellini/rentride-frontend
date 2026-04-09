<template>
  <UFooter class="bg-dark text-white">
    <template #top>
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div class="flex flex-col gap-4">
            <div>
              <NuxtLink
                :to="paths.home"
                class="focus-ring inline-flex items-center rounded-sm font-display text-sm font-bold uppercase tracking-widest text-white"
              >
                Rent&Ride
              </NuxtLink>
              <p class="mt-4 max-w-sm text-sm leading-relaxed text-gray-300">
                {{ t('footer.tagline') }}<br>
                {{ t('footer.description') }}
              </p>
            </div>

            <div class="flex items-center gap-2 -ml-2">
              <UButton
                :to="site.instagramUrl"
                target="_blank"
                icon="i-simple-icons-instagram"
                color="neutral"
                variant="ghost"
                class="text-gray-300 hover:text-white"
                aria-label="Instagram"
              />
              <UButton
                :to="site.facebookUrl"
                target="_blank"
                icon="i-simple-icons-facebook"
                color="neutral"
                variant="ghost"
                class="text-gray-300 hover:text-white"
                aria-label="Facebook"
              />
            </div>
          </div>

          <div class="flex md:justify-center">
            <div class="inline-block text-left">
              <h3 class="font-display text-sm font-bold uppercase tracking-widest text-white mb-4">
                {{ t('nav.hilighted') || 'Menu' }}
              </h3>
              <div class="flex flex-col">
                <NuxtLink
                  v-for="item in footerLinks"
                  :key="item.name"
                  :to="localePath({ name: item.name })"
                  class="block text-sm text-gray-300 transition-colors hover:text-primary"
                >
                  {{ t(item.label) }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #bottom>
      <div class="flex w-full flex-col items-center justify-between gap-6 border-t border-white/10 py-3 text-sm text-gray-300 md:flex-row">
        <div>
          Built with ❤️ by Marco Zellini • © {{ new Date().getFullYear() }}
        </div>

        <div>
          {{ site.name }} • P.IVA {{ site.piva }}
        </div>

        <div>
          <NuxtLink
            :to="localePath('/privacy')"
            class="whitespace-nowrap text-gray-300 transition-colors hover:text-primary"
          >
            {{ t('common.privacyPolicy') }}
          </NuxtLink>
        </div>
      </div>
    </template>
  </UFooter>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const paths = useLocalizedRoutes()

const site = {
  name: 'Rent&Ride Pesaro',
  phone: useRuntimeConfig().public.sitePhone,
  email: useRuntimeConfig().public.siteEmail,
  address: useRuntimeConfig().public.siteAddress,
  instagramUrl: 'https://www.instagram.com/rent_ride_pesaro/',
  facebookUrl: 'https://www.facebook.com/p/RentRide-100083296144373/',
  piva: useRuntimeConfig().public.sitePiva || '0123456789'
}

const footerLinks = [
  { name: 'index', label: 'nav.home' },
  { name: 'chi-siamo', label: 'nav.about' },
  { name: 'veicoli', label: 'nav.vehicles' },
  { name: 'tour', label: 'nav.tours' },
  { name: 'corsi', label: 'nav.courses' },
  { name: 'contatti', label: 'nav.contact' }
] as const
</script>

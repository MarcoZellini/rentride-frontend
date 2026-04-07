<template>
  <UFooter>
    <template #top>
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div class="flex flex-col gap-4">
            <div>
              <NuxtLink
                :to="localePath('/')"
                class="focus-ring inline-flex items-center rounded-sm font-display text-sm font-bold uppercase tracking-widest text-white"
              >
                Rent&Ride
              </NuxtLink>
              <p class="mt-4 max-w-sm text-sm text-gray-400 leading-relaxed">
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
                aria-label="Instagram"
              />
              <UButton
                :to="site.facebookUrl"
                target="_blank"
                icon="i-simple-icons-facebook"
                color="neutral"
                variant="ghost"
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
                  :key="item.to"
                  :to="localePath(item.to)"
                  class="text-sm text-gray-400 transition-colors hover:text-primary block"
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
      <div class="flex flex-col md:flex-row justify-between items-center gap-6 w-full text-sm text-gray-500 py-3 border-t border-gray-800/50">
        <div>
          Built with ❤️ by Marco Zellini • © {{ new Date().getFullYear() }}
        </div>

        <div>
          {{ site.name }} • P.IVA {{ site.piva }}
        </div>

        <div>
          <NuxtLink
            :to="localePath('/privacy')"
            class="hover:text-primary transition-colors whitespace-nowrap"
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
  { to: 'index', label: 'nav.home' }, // punta a pages/index.vue
  { to: 'veicoli', label: 'nav.vehicles' }, // punta a pages/veicoli.vue -> /veicoli o /en/vehicles
  { to: 'tour', label: 'nav.tours' },
  { to: 'corsi', label: 'nav.courses' },
  { to: 'chi-siamo', label: 'nav.about' },
  { to: 'contatti', label: 'nav.contact' }
]
</script>

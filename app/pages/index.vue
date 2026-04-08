<script setup lang="ts">
import Icon from '@nuxt/ui/components/Icon'

const { t } = useI18n()
const localePath = useLocalePath()

const trustMetrics = { // Questi dati dovrebbero idealmente venire da un'API, ma per ora li hardcodiamo
  vehiclesCount: 120,
  toursCount: 35,
  googleRating: 4.8
}
const previewVehicles = [
  { id: 1, name: 'Vespa Primavera', image: '/vehicles/vespa-primavera.jpg' },
  { id: 2, name: 'Lambretta LI', image: '/vehicles/lambretta-li.jpg' },
  { id: 3, name: 'Piaggio Liberty', image: '/vehicles/piaggio-liberty.jpg' }
]
const previewTours = [
  { id: 1, name: 'Tour Città', image: '/tours/tour-citta.jpg' },
  { id: 2, name: 'Tour Collina', image: '/tours/tour-collina.jpg' },
  { id: 3, name: 'Tour Mare', image: '/tours/tour-mare.jpg' }
]
</script>

<template>
  <div>
    <section
      ref="heroRef"
      class="relative flex min-h-[svh] flex-col justify-end bg-dark pb-12 pt-24 md:justify-center md:pb-24 md:pt-32"
      aria-label="Hero"
    >
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      />
      <div
        class="absolute inset-0 bg-dark/70"
        aria-hidden="true"
      />
      <div class="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <h1
          ref="heroTitleRef"
          class="font-display text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl"
        >
          {{ t('hero.title') }}
        </h1>
        <p
          ref="heroSubtitleRef"
          class="mt-4 max-w-xl text-lg text-gray-200 md:text-xl"
        >
          {{ t('hero.subtitle') }}
        </p>
        <div
          ref="heroCtaRef"
          class="mt-8 flex flex-wrap gap-4"
        >
          <NuxtLink
            :to="localePath('/veicoli')"
            class="btn-primary inline-flex min-h-11 items-center px-6 py-3"
          >
            {{ t('hero.ctaVehicles') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/tour')"
            class="btn-secondary inline-flex min-h-11 items-center px-6 py-3"
          >
            {{ t('hero.ctaTours') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <section
      v-if="trustMetrics"
      class="border-b border-gray-200 bg-white py-10"
      aria-label="Numeri"
    >
      <div class="flex justify-between items-center flex-wrap mx-100 px-4 md:px-6">
        <div class="flex flex-col items-center text-center text-gray-700 gap-3">
          <UIcon
            name="lucide-car"
            class="h-8 w-8 text-primary"
          />
          <div class="font-display text-2xl font-bold text-primary">
            {{ trustMetrics.vehiclesCount }}
          </div>
          <div class="ml-1">
            {{ t('home.trustVehiclesLabel') }}
          </div>
        </div>

        <div class="flex flex-col items-center text-center text-gray-700 gap-3">
          <UIcon
            name="lucide-map"
            class="h-8 w-8 text-primary"
          />
          <div class="font-display text-2xl font-bold text-primary">
            {{ trustMetrics.toursCount }}
          </div>
          <div class="ml-1">
            {{ t('home.trustToursLabel') }}
          </div>
        </div>

        <div
          v-if="trustMetrics.googleRating != null"
          class="flex flex-col items-center text-center text-gray-700 gap-3"
        >
          <UIcon
            name="lucide-star"
            class="h-8 w-8 text-primary"
          />
          <div class="font-display text-2xl font-bold text-primary">
            {{ trustMetrics.googleRating }}
          </div>
          <div class="ml-1">
            {{ t('home.trustRating') }}
          </div>
        </div>
      </div>
    </section>

    <section
      id="i-nostri-mezzi"
      class="scroll-mt-20 mx-auto max-w-7xl px-4 pt-20 pb-16 md:px-6"
    >
      <h2 class="font-display text-3xl font-bold text-dark">
        {{ t('vehicles.title') }}
      </h2>
      <div
        ref="vehiclesGridRef"
        class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <VehicleCard
          v-for="v in previewVehicles"
          :key="v.id"
          :vehicle="v"
        />
      </div>
      <div class="mt-8">
        <NuxtLink
          :to="localePath('/veicoli')"
          class="focus-ring inline-flex min-h-11 items-center font-medium text-primary hover:underline"
        >
          {{ t('home.seeAllVehicles') }} →
        </NuxtLink>
      </div>
    </section>

    <section class="bg-surface py-16">
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <h2 class="font-display text-3xl font-bold text-dark">
          {{ t('home.toursSectionTitle') }}
        </h2>
        <div
          ref="toursGridRef"
          class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <TourCard
            v-for="t in previewTours"
            :key="t.id"
            :tour="t"
          />
        </div>
        <div class="mt-8">
          <NuxtLink
            :to="localePath('/tour')"
            class="focus-ring inline-flex min-h-11 items-center font-medium text-primary hover:underline"
          >
            {{ t('home.seeAllTours') }} →
          </NuxtLink>
        </div>
      </div>
    </section>

    <ReviewsSection class="mx-auto max-w-7xl px-4 py-16 md:px-6" />

    <section class="bg-dark px-4 py-16 md:px-6">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="font-display text-3xl font-bold text-white">
          {{ t('home.ctaReady') }}
        </h2>
        <p class="mt-3 text-gray-300">
          {{ t('home.ctaReadySub') }}
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <NuxtLink
            :to="localePath('/contatti')"
            class="btn-primary inline-flex min-h-11 items-center px-6 py-3"
          >
            {{ t('nav.contact') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

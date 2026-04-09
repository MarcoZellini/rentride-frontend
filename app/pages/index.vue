<script setup lang="ts">
const { t } = useI18n()
const paths = useLocalizedRoutes()

const trustMetrics = {
  vehiclesCount: 120,
  toursCount: 35,
  googleRating: 4.8
}
const previewVehicles = [
  { id: 1, name: 'Ducati Multistrada V4', image: '/vehicles/v4.webp' },
  { id: 2, name: 'Ducati Monster 800 S2R ', image: '/vehicles/s2r.jpg' },
  { id: 3, name: 'DR AUTOMOBILES DR 5', image: '/vehicles/dr5.webp' }
]
const previewTours = [
  { id: 1, name: 'Tour Città', image: '/tours/tour-citta.jpg' },
  { id: 2, name: 'Tour Collina', image: '/tours/tour-collina.jpg' },
  { id: 3, name: 'Tour Mare', image: '/tours/tour-mare.jpg' }
]
</script>

<template>
  <div class="bg-dark">
    <section
      id="home"
      class="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-dark pb-12 pt-24 md:justify-center md:pb-24 md:pt-32"
      aria-label="Hero"
    >
      <div
        class="absolute inset-0"
        aria-hidden="true"
      >
        <img
          src="/hero.jpeg"
          alt=""
          width="1920"
          height="1080"
          class="h-full w-full object-cover object-[52%_center] sm:object-[55%_center] lg:object-[58%_center]"
          fetchpriority="high"
          loading="eager"
          decoding="async"
        >
      </div>
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/93 via-[#0a0a0a]/50 to-transparent"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent md:hidden"
        aria-hidden="true"
      />
      <div class="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6">
        <h1
          class="font-display text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl"
        >
          {{ t('hero.title') }}
        </h1>
        <p class="mt-4 max-w-xl text-lg text-gray-200 md:text-xl">
          {{ t('hero.subtitle') }}
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <NuxtLink
            :to="paths.veicoli"
            class="btn-primary inline-flex min-h-[44px] items-center px-6 py-3"
          >
            {{ t('hero.ctaVehicles') }}
          </NuxtLink>
          <NuxtLink
            :to="paths.tour"
            class="font-display inline-flex min-h-[44px] items-center rounded-brand border-2 border-white bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-white/10"
          >
            {{ t('hero.ctaTours') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <section
      v-if="trustMetrics"
      class="border-t border-white/10 bg-[#161616] py-8 md:py-10"
      aria-label="Numeri"
    >
      <div class="mx-auto flex max-w-7xl flex-wrap justify-center gap-10 px-4 md:gap-16 md:px-6">
        <p class="text-center text-sm text-gray-400 md:text-base">
          <span class="font-display block text-3xl font-bold text-primary md:text-4xl">{{ trustMetrics.vehiclesCount }}</span>
          <span class="mt-1 block font-medium tracking-wide text-gray-300">{{ t('home.trustVehiclesLabel') }}</span>
        </p>
        <p class="text-center text-sm text-gray-400 md:text-base">
          <span class="font-display block text-3xl font-bold text-primary md:text-4xl">{{ trustMetrics.toursCount }}</span>
          <span class="mt-1 block font-medium tracking-wide text-gray-300">{{ t('home.trustToursLabel') }}</span>
        </p>
        <p
          v-if="trustMetrics.googleRating != null"
          class="text-center text-sm text-gray-400 md:text-base"
        >
          <span class="font-display block text-3xl font-bold text-primary md:text-4xl">{{ trustMetrics.googleRating }}</span>
          <span class="mt-1 block font-medium tracking-wide text-gray-300">{{ t('home.trustRating') }}</span>
        </p>
      </div>
    </section>

    <section
      id="chi-siamo"
      class="scroll-mt-24 border-t border-border bg-surface py-16 md:py-20"
      aria-labelledby="heading-chi-siamo"
    >
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <p class="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Rent&Ride
        </p>
        <h2
          id="heading-chi-siamo"
          class="mt-2 font-display text-3xl font-bold text-dark md:text-4xl"
        >
          {{ t('about.title') }}
        </h2>
        <p class="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {{ t('about.subtitle') }}
        </p>
        <NuxtLink
          :to="paths.chiSiamo"
          class="focus-ring mt-8 inline-flex min-h-[44px] items-center font-display text-sm font-bold uppercase tracking-wide text-primary hover:underline"
        >
          {{ t('home.sectionAboutCta') }} →
        </NuxtLink>
      </div>
    </section>

    <section
      id="veicoli"
      class="scroll-mt-24 border-t border-white/10 bg-dark py-16 md:py-24"
      aria-labelledby="heading-veicoli"
    >
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <div
          class="h-1 w-14 rounded-brand bg-primary"
          aria-hidden="true"
        />
        <h2
          id="heading-veicoli"
          class="mt-4 font-display text-3xl font-bold text-white md:text-4xl"
        >
          {{ t('vehicles.title') }}
        </h2>
        <p class="mt-3 max-w-2xl text-gray-400">
          {{ t('vehicles.subtitle') }}
        </p>
        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="v in previewVehicles"
            :key="v.id"
            :to="paths.veicoli"
            class="focus-ring group block overflow-hidden rounded-brand border border-white/10 bg-[#1a1a1a] shadow-[0_1px_2px_rgba(0,0,0,0.35)] transition-all duration-200 hover:border-primary/50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
          >
            <div class="aspect-[4/3] overflow-hidden bg-neutral-950">
              <img
                :src="v.image"
                :alt="v.name"
                width="800"
                height="600"
                class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              >
            </div>
            <div class="border-t border-white/10 bg-[#141414] px-4 py-4">
              <p class="font-display text-base font-bold leading-snug text-white md:text-lg">
                {{ v.name }}
              </p>
              <span class="mt-2 block font-display text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                {{ t('vehicles.discover') }}
              </span>
            </div>
          </NuxtLink>
        </div>
        <div class="mt-10">
          <NuxtLink
            :to="paths.veicoli"
            class="focus-ring inline-flex min-h-[44px] items-center font-medium text-primary hover:text-white"
          >
            {{ t('home.seeAllVehicles') }} →
          </NuxtLink>
        </div>
      </div>
    </section>

    <section
      id="tour"
      class="scroll-mt-24 border-t border-border bg-surface py-16 md:py-24"
      aria-labelledby="heading-tour"
    >
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <div
          class="h-1 w-14 rounded-brand bg-primary"
          aria-hidden="true"
        />
        <h2
          id="heading-tour"
          class="mt-4 font-display text-3xl font-bold text-dark md:text-4xl"
        >
          {{ t('home.toursSectionTitle') }}
        </h2>
        <p class="mt-3 max-w-2xl text-muted">
          {{ t('tours.subtitle') }}
        </p>
        <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="item in previewTours"
            :key="item.id"
            :to="paths.tour"
            class="focus-ring group block overflow-hidden rounded-brand border border-border bg-white text-[#111111] shadow-sm transition-all duration-200 hover:border-primary/45 hover:shadow-md"
          >
            <div class="aspect-[4/3] overflow-hidden bg-white">
              <img
                :src="item.image"
                :alt="item.name"
                width="800"
                height="600"
                class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              >
            </div>
            <div class="border-t border-border bg-surface px-4 py-4">
              <p class="font-display text-lg font-bold leading-snug text-[#111111]">
                {{ item.name }}
              </p>
              <span class="mt-2 block font-display text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                {{ t('tours.discover') }}
              </span>
            </div>
          </NuxtLink>
        </div>
        <div class="mt-10">
          <NuxtLink
            :to="paths.tour"
            class="focus-ring inline-flex min-h-[44px] items-center font-medium text-primary hover:underline"
          >
            {{ t('home.seeAllTours') }} →
          </NuxtLink>
        </div>
      </div>
    </section>

    <section
      id="corsi"
      class="scroll-mt-24 border-t border-white/10 bg-[#161616] py-16 md:py-20"
      aria-labelledby="heading-corsi"
    >
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <div
          class="h-1 w-14 rounded-brand bg-primary"
          aria-hidden="true"
        />
        <h2
          id="heading-corsi"
          class="mt-4 font-display text-3xl font-bold text-white md:text-4xl"
        >
          {{ t('courses.title') }}
        </h2>
        <p class="mt-4 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
          {{ t('courses.subtitle') }}
        </p>
        <NuxtLink
            :to="paths.corsi"
          class="focus-ring mt-8 inline-flex min-h-[44px] items-center font-display text-sm font-bold uppercase tracking-wide text-primary hover:text-white"
        >
          {{ t('home.sectionCoursesCta') }} →
        </NuxtLink>
      </div>
    </section>

    <section
      class="scroll-mt-24 border-t border-border bg-surface py-16 md:py-20"
      aria-labelledby="heading-reviews"
    >
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <div
          class="h-1 w-14 rounded-brand bg-primary"
          aria-hidden="true"
        />
        <h2
          id="heading-reviews"
          class="mt-4 font-display text-3xl font-bold text-dark md:text-4xl"
        >
          {{ t('reviews.title') }}
        </h2>
        <p class="mt-3 max-w-2xl text-muted">
          {{ t('reviews.subtitle') }}
        </p>
        <p class="mt-8 rounded-brand border border-border bg-white/80 p-6 text-sm text-muted md:text-base">
          {{ t('home.reviewsPlaceholder') }}
        </p>
      </div>
    </section>

    <section
      id="contatti"
      class="scroll-mt-24 border-t border-primary/20 bg-dark px-4 py-16 md:px-6 md:py-20"
      aria-labelledby="heading-contatti"
    >
      <div class="mx-auto max-w-3xl text-center">
        <h2
          id="heading-contatti"
          class="font-display text-3xl font-bold text-white md:text-4xl"
        >
          {{ t('contact.title') }}
        </h2>
        <p class="mt-3 text-gray-200">
          {{ t('contact.subtitle') }}
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <NuxtLink
            :to="paths.contatti"
            class="btn-primary inline-flex min-h-[44px] items-center px-6 py-3"
          >
            {{ t('nav.contact') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

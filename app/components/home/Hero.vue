<script setup lang="ts">
const { t } = useI18n()
const paths = useLocalizedRoutes()
</script>

<template>
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
</template>

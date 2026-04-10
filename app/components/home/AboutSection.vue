<script setup lang="ts">
const { t } = useI18n()
const paths = useLocalizedRoutes()
</script>

<template>
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
</template>

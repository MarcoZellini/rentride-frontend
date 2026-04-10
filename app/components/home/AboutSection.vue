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
      <SectionHeading
        heading-id="heading-chi-siamo"
        :show-accent="false"
        description-spacing="relaxed"
      >
        <template #eyebrow>
          <p class="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Rent&Ride
          </p>
        </template>
        <template #title>
          {{ t('about.title') }}
        </template>
        <template #description>
          {{ t('about.subtitle') }}
        </template>
      </SectionHeading>
      <NuxtLink
        :to="paths.chiSiamo"
        class="focus-ring mt-8 inline-flex min-h-[44px] items-center font-display text-sm font-bold uppercase tracking-wide text-primary hover:underline"
      >
        {{ t('home.sectionAboutCta') }} →
      </NuxtLink>
    </div>
  </section>
</template>

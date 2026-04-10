<script setup lang="ts">
const { t } = useI18n()
const paths = useLocalizedRoutes()
</script>

<template>
  <section
    id="corsi"
    class="scroll-mt-24 border-t border-white/10 bg-[#161616] py-16 md:py-20"
    aria-labelledby="heading-corsi"
  >
    <div class="mx-auto max-w-7xl px-4 md:px-6">
      <SectionHeading
        heading-id="heading-corsi"
        tone="dark"
        description-spacing="relaxed"
      >
        <template #title>
          {{ t('courses.title') }}
        </template>
        <template #description>
          {{ t('courses.subtitle') }}
        </template>
      </SectionHeading>
      <NuxtLink
        :to="paths.corsi"
        class="focus-ring mt-8 inline-flex min-h-[44px] items-center font-display text-sm font-bold uppercase tracking-wide text-primary hover:text-white"
      >
        {{ t('home.sectionCoursesCta') }} →
      </NuxtLink>
    </div>
  </section>
</template>

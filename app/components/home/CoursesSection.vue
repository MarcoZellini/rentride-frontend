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
</template>

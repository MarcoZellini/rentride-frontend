<script setup lang="ts">
const { t } = useI18n()
const paths = useLocalizedRoutes()
</script>

<template>
  <section
    id="contatti"
    class="scroll-mt-24 border-t border-primary/20 bg-dark px-4 py-16 md:px-6 md:py-20"
    aria-labelledby="heading-contatti"
  >
    <div class="mx-auto max-w-3xl text-center">
      <h2
        id="heading-contatti"
        class="font-display text-3xl font-bold text-balance break-words text-white md:text-4xl"
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
</template>

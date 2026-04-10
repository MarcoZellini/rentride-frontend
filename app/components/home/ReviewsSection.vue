<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
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
</template>

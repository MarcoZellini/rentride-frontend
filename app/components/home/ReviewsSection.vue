<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section
    class="scroll-mt-24 border-t border-border bg-surface py-16 md:py-20"
    aria-labelledby="heading-reviews"
  >
    <div class="mx-auto max-w-7xl px-4 md:px-6">
      <SectionHeading heading-id="heading-reviews">
        <template #title>
          {{ t('reviews.title') }}
        </template>
        <template #description>
          {{ t('reviews.subtitle') }}
        </template>
      </SectionHeading>
      <p class="mt-8 rounded-brand border border-border bg-white/80 p-6 text-sm text-muted md:text-base">
        {{ t('home.reviewsPlaceholder') }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
    <h1 class="font-display text-3xl font-bold text-[#111111] md:text-4xl">
      {{ t('courses.title') }}
    </h1>
    <p class="mt-4 max-w-2xl text-[#4b5563]">
      {{ t('courses.subtitle') }}
    </p>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <PageIntro>
    <template #title>
      {{ t('about.title') }}
    </template>
    <template #description>
      {{ t('about.subtitle') }}
    </template>
  </PageIntro>
</template>

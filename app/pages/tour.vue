<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <PageIntro>
    <template #title>
      {{ t('tours.title') }}
    </template>
    <template #description>
      {{ t('tours.subtitle') }}
    </template>
  </PageIntro>
</template>

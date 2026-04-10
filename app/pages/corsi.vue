<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <PageIntro>
    <template #title>
      {{ t('courses.title') }}
    </template>
    <template #description>
      {{ t('courses.subtitle') }}
    </template>
  </PageIntro>
</template>

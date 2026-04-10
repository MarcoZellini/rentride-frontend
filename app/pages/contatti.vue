<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <PageIntro>
    <template #title>
      {{ t('contact.title') }}
    </template>
    <template #description>
      {{ t('contact.subtitle') }}
    </template>
  </PageIntro>
</template>

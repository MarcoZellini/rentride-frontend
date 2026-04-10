<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <PageIntro>
    <template #title>
      {{ t('vehicles.title') }}
    </template>
    <template #description>
      {{ t('vehicles.subtitle') }}
    </template>
  </PageIntro>
</template>

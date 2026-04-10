<script setup lang="ts">
export type HomePreviewTour = {
  id: number
  name: string
  image: string
}

defineProps<{
  items: HomePreviewTour[]
}>()

const { t } = useI18n()
const paths = useLocalizedRoutes()
</script>

<template>
  <section
    id="tour"
    class="scroll-mt-24 border-t border-border bg-surface py-16 md:py-24"
    aria-labelledby="heading-tour"
  >
    <div class="mx-auto max-w-7xl px-4 md:px-6">
      <SectionHeading heading-id="heading-tour">
        <template #title>
          {{ t('home.toursSectionTitle') }}
        </template>
        <template #description>
          {{ t('tours.subtitle') }}
        </template>
      </SectionHeading>
      <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <MediaLinkCard
          v-for="item in items"
          :key="item.id"
          :to="paths.tour"
          :image="item.image"
          :title="item.name"
          :caption="t('tours.discover')"
        />
      </div>
      <div class="mt-10">
        <NuxtLink
          :to="paths.tour"
          class="focus-ring inline-flex min-h-[44px] items-center font-medium text-primary hover:underline"
        >
          {{ t('home.seeAllTours') }} →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

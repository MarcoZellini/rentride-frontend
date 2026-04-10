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
      <div
        class="h-1 w-14 rounded-brand bg-primary"
        aria-hidden="true"
      />
      <h2
        id="heading-tour"
        class="mt-4 font-display text-3xl font-bold text-dark md:text-4xl"
      >
        {{ t('home.toursSectionTitle') }}
      </h2>
      <p class="mt-3 max-w-2xl text-muted">
        {{ t('tours.subtitle') }}
      </p>
      <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="item in items"
          :key="item.id"
          :to="paths.tour"
          class="focus-ring group block overflow-hidden rounded-brand border border-border bg-white text-[#111111] shadow-sm transition-all duration-200 hover:border-primary/45 hover:shadow-md"
        >
          <div class="aspect-[4/3] overflow-hidden bg-white">
            <img
              :src="item.image"
              :alt="item.name"
              width="800"
              height="600"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            >
          </div>
          <div class="border-t border-border bg-surface px-4 py-4">
            <p class="font-display text-lg font-bold leading-snug text-[#111111]">
              {{ item.name }}
            </p>
            <span class="mt-2 block font-display text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
              {{ t('tours.discover') }}
            </span>
          </div>
        </NuxtLink>
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

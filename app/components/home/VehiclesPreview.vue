<script setup lang="ts">
export type HomePreviewVehicle = {
  id: number
  name: string
  image: string
}

defineProps<{
  items: HomePreviewVehicle[]
}>()

const { t } = useI18n()
const paths = useLocalizedRoutes()
</script>

<template>
  <section
    id="veicoli"
    class="scroll-mt-24 border-t border-white/10 bg-dark py-16 md:py-24"
    aria-labelledby="heading-veicoli"
  >
    <div class="mx-auto max-w-7xl px-4 md:px-6">
      <SectionHeading
        heading-id="heading-veicoli"
        tone="dark"
      >
        <template #title>
          {{ t('vehicles.title') }}
        </template>
        <template #description>
          {{ t('vehicles.subtitle') }}
        </template>
      </SectionHeading>
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <MediaLinkCard
          v-for="v in items"
          :key="v.id"
          :to="paths.veicoli"
          :image="v.image"
          :title="v.name"
          :caption="t('vehicles.discover')"
        />
      </div>
      <div class="mt-10">
        <NuxtLink
          :to="paths.veicoli"
          class="focus-ring inline-flex min-h-[44px] items-center font-medium text-primary hover:text-white"
        >
          {{ t('home.seeAllVehicles') }} →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

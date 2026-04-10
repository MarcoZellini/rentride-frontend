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
      <div
        class="h-1 w-14 rounded-brand bg-primary"
        aria-hidden="true"
      />
      <h2
        id="heading-veicoli"
        class="mt-4 font-display text-3xl font-bold text-white md:text-4xl"
      >
        {{ t('vehicles.title') }}
      </h2>
      <p class="mt-3 max-w-2xl text-gray-400">
        {{ t('vehicles.subtitle') }}
      </p>
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="v in items"
          :key="v.id"
          :to="paths.veicoli"
          class="focus-ring group block overflow-hidden rounded-brand border border-white/10 bg-[#1a1a1a] shadow-[0_1px_2px_rgba(0,0,0,0.35)] transition-all duration-200 hover:border-primary/50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
        >
          <div class="aspect-[4/3] overflow-hidden bg-neutral-950">
            <img
              :src="v.image"
              :alt="v.name"
              width="800"
              height="600"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            >
          </div>
          <div class="border-t border-white/10 bg-[#141414] px-4 py-4">
            <p class="font-display text-base font-bold leading-snug text-white md:text-lg">
              {{ v.name }}
            </p>
            <span class="mt-2 block font-display text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
              {{ t('vehicles.discover') }}
            </span>
          </div>
        </NuxtLink>
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

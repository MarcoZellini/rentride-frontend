<script setup lang="ts">
defineProps<{
  vehiclesCount: number
  toursCount: number
  googleRating: number | null
}>()

const { t } = useI18n()
</script>

<template>
  <section
    class="border-t border-white/10 bg-[#161616] py-8 md:py-10"
    aria-label="Numeri"
  >
    <div class="mx-auto flex max-w-7xl flex-wrap justify-center gap-10 px-4 md:gap-16 md:px-6">
      <p class="text-center text-sm text-gray-400 md:text-base">
        <span class="font-display block text-3xl font-bold text-primary md:text-4xl">{{ vehiclesCount }}</span>
        <span class="mt-1 block font-medium tracking-wide text-gray-300">{{ t('home.trustVehiclesLabel') }}</span>
      </p>
      <p class="text-center text-sm text-gray-400 md:text-base">
        <span class="font-display block text-3xl font-bold text-primary md:text-4xl">{{ toursCount }}</span>
        <span class="mt-1 block font-medium tracking-wide text-gray-300">{{ t('home.trustToursLabel') }}</span>
      </p>
      <p
        v-if="googleRating != null"
        class="text-center text-sm text-gray-400 md:text-base"
      >
        <span class="font-display block text-3xl font-bold text-primary md:text-4xl">{{ googleRating }}</span>
        <span class="mt-1 block font-medium tracking-wide text-gray-300">{{ t('home.trustRating') }}</span>
      </p>
    </div>
  </section>
</template>

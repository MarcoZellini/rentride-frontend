<script setup lang="ts">
defineProps<{
  to: string
  image: string
  title: string
  caption?: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="focus-ring group block overflow-hidden rounded-brand border border-white/10 bg-[#1a1a1a] shadow-[0_1px_2px_rgba(0,0,0,0.35)] transition-all duration-200 hover:border-primary/50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
  >
    <div class="aspect-[4/3] overflow-hidden bg-neutral-950">
      <img
        :src="image"
        :alt="title"
        width="800"
        height="600"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        loading="lazy"
      >
    </div>
    <div class="border-t border-white/10 bg-[#141414] px-4 py-4">
      <p class="font-display text-base font-bold leading-snug text-white md:text-lg">
        {{ title }}
      </p>
      <span
        v-if="caption"
        class="mt-2 block font-display text-[11px] font-bold uppercase tracking-[0.18em] text-primary"
      >
        {{ caption }}
      </span>
    </div>
  </NuxtLink>
</template>

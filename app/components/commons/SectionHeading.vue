<script setup lang="ts">
import { computed, useSlots } from 'vue'

const props = withDefaults(
  defineProps<{
    headingId?: string
    tone?: 'dark' | 'light'
    showAccent?: boolean
    descriptionSpacing?: 'default' | 'relaxed'
  }>(),
  {
    tone: 'light',
    showAccent: true,
    descriptionSpacing: 'default'
  }
)

const slots = useSlots()

const titleMarginClass = computed(() => {
  if (props.showAccent) {
    return 'mt-4'
  }
  if (slots.eyebrow) {
    return 'mt-2'
  }
  return 'mt-4'
})

const titleToneClass = computed(() =>
  props.tone === 'dark' ? 'text-white' : 'text-dark'
)

const descriptionClass = computed(() => {
  const base = 'max-w-2xl'
  if (props.tone === 'dark') {
    if (props.descriptionSpacing === 'relaxed') {
      return `${base} mt-4 text-base leading-relaxed text-gray-400 md:text-lg`
    }
    return `${base} mt-3 text-gray-400`
  }
  if (props.descriptionSpacing === 'relaxed') {
    return `${base} mt-4 text-base leading-relaxed text-muted md:text-lg`
  }
  return `${base} mt-3 text-muted`
})
</script>

<template>
  <div>
    <div
      v-if="showAccent"
      class="h-1 w-14 rounded-brand bg-primary"
      aria-hidden="true"
    />
    <div v-if="$slots.eyebrow">
      <slot name="eyebrow" />
    </div>
    <h2
      v-if="$slots.title"
      :id="headingId"
      :class="[
        titleMarginClass,
        'font-display text-3xl font-bold md:text-4xl',
        titleToneClass
      ]"
    >
      <slot name="title" />
    </h2>
    <div
      v-if="$slots.description"
      :class="descriptionClass"
    >
      <slot name="description" />
    </div>
  </div>
</template>

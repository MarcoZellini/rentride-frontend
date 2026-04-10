<template>
  <div class="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
    <h1 class="font-display text-3xl font-bold text-balance break-words text-[#111111] md:text-4xl">
      <slot name="title" />
    </h1>
    <p
      v-if="$slots.description"
      class="mt-4 max-w-2xl text-pretty text-[#4b5563]"
    >
      <slot name="description" />
    </p>
  </div>
</template>

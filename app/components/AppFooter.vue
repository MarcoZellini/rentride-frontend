<template>
  <UFooter>
    <template #left>
      <p class="text-sm text-muted">
        Built with ❤️ from Marco Zellini • © {{ new Date().getFullYear() }}
      </p>
    </template>

    <template #right>
      <UTooltip text="Instagram">
        <UButton
          to="https://www.instagram.com/rent_ride_pesaro/"
          target="_blank"
          icon="i-simple-icons-instagram"
          aria-label="Instagram"
          color="neutral"
          variant="ghost"
        />
      </UTooltip>
      <UTooltip text="Facebook">
        <UButton
          to="https://www.facebook.com/p/RentRide-100083296144373/"
          target="_blank"
          icon="i-simple-icons-facebook"
          aria-label="Facebook"
          color="neutral"
          variant="ghost"
        />
      </UTooltip>
    </template>
  </UFooter>
</template>

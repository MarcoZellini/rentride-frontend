<script setup lang="ts">
const trustMetrics = {
  vehiclesCount: 120,
  toursCount: 35,
  googleRating: 4.8
}
const previewVehicles = [
  { id: 1, name: 'Ducati Multistrada V4', image: '/vehicles/v4.webp' },
  { id: 2, name: 'Ducati Monster 800 S2R ', image: '/vehicles/s2r.jpg' },
  { id: 3, name: 'DR AUTOMOBILES DR 5', image: '/vehicles/dr5.webp' }
]
const previewTours = [
  { id: 1, name: 'Tour Città', image: '/tours/tour-citta.jpg' },
  { id: 2, name: 'Tour Collina', image: '/tours/tour-collina.jpg' },
  { id: 3, name: 'Tour Mare', image: '/tours/tour-mare.jpg' }
]
</script>

<template>
  <div class="bg-dark">
    <HomeHero />
    <HomeTrustMetrics v-bind="trustMetrics" />
    <HomeAboutSection />
    <HomeVehiclesPreview :items="previewVehicles" />
    <HomeToursPreview :items="previewTours" />
    <HomeCoursesSection />
    <HomeReviewsSection />
    <HomeContactCta />
  </div>
</template>

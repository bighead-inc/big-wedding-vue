<script setup>
defineProps({
  header: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="home-item">
    <h1 class="red text-2xl/10">{{ header }}</h1>
    <p class="description pl-1">{{ description }}</p>
  </div>
</template>

<style scoped></style>

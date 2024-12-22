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
    <h1 class="header">{{ header }}</h1>
    <h3 class="description">{{ description }}</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 1.8rem;
  position: relative;
}

h3 {
  font-size: 1.2rem;
  padding-bottom: 10px;
}

</style>

<script setup>
defineProps({
  time: {
    type: String,
    required: true,
  },
  event: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="schedule-item">
    <h1 class="red">{{ time }}</h1>

    <h3 class="event">{{ event }}</h3>
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
  padding-left: 3px;
  padding-bottom: 10px;
}
</style>

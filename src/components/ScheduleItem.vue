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
    <h1 class="red text-2xl/10">{{ time }}</h1>

    <p class="event pl-1">{{ event }}</p>
  </div>
</template>

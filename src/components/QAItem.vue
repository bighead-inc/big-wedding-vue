<script setup>
defineProps({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="qa-item flex-column">
    <h1 class="red text-2xl/10">{{ question }}</h1>
    <p class="answer pl-1">{{ answer }}</p>
  </div>
</template>

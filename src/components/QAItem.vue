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
  <div class="qa-item">
    <h1 class="red">{{ question }}</h1>
    <h3 class="answer">{{ answer }}</h3>
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
}
</style>

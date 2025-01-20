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
  link: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="home-item">
    <h1 class="red text-2xl/10">{{ header }}</h1>
    <a v-if="link" :href="link" target="_blank" rel="noopener" class="hover:text-slate-900 font-medium hover:underline pl-1">{{ description }}</a>
    <p v-else class="description pl-1">{{ description }}</p>

  </div>
</template>

<style scoped></style>

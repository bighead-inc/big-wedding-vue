<script setup>
import HomeItem from '@/components/HomeItem.vue'

const items = [
  { header: 'Who', description: 'Loren Velasquez & Hector Rios' },
  { header: 'What', description: 'Are getting married!' },
  { header: 'When', description: 'Friday May 2nd, 2025 at 11am' },
  {
    header: 'Where',
    description: 'The Lytle House - 5517 N Broadway Chicago IL 60640',
    link: 'https://maps.app.goo.gl/kpUU1HiLg5Yo8fT7A'
  },
  { header: 'Why', description: "Cuz it's about time!" },
]
</script>

<template>
  <HomeItem
    v-for="item in items"
    :header="item.header"
    :description="item.description"
    :link="item.link"
    :key="item.header"
  />
</template>

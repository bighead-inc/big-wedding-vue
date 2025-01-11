<script setup>
import ScheduleItem from '@/components/ScheduleItem.vue'

const scheduleItems = [
  { time: '11am', event: 'Doors Open' },
  { time: '11:15am', event: 'Ceremony' },
  { time: '11:45am', event: 'Posed pictures/Drinks' },
  { time: '12:15pm', event: 'Food' },
  { time: '1pm', event: 'Live Music' },
  { time: '1:30pm', event: 'Dessert, Toast & Bye' }
]
</script>

<template>
  <div class="schedule">
    <ScheduleItem
      v-for="item in scheduleItems"
      :time="item.time"
      :event="item.event"
      :key="item.time"
    />
  </div>
</template>

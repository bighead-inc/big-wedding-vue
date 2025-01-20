<script setup>
import ScheduleItem from '@/components/ScheduleItem.vue'

const dayScheduleItems = [
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
    <h1 class="red text-2xl/10">Day Schedule:</h1>
    <ScheduleItem
      v-for="item in dayScheduleItems"
      :time="item.time"
      :event="item.event"
      :key="item.time"
    />
    <br>
    <br>
    <h1 class="red text-2xl/10">Night Schedule:</h1>
    <ScheduleItem
      time='6pm'
      event='Drinks'
    />
  </div>
</template>

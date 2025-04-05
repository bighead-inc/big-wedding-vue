<script setup>
import ScheduleItem from '@/components/ScheduleItem.vue'

const dayScheduleItems = [
  { time: '11 am', event: 'Doors Open' },
  { time: '11:15 am', event: 'Ceremony' },
  { time: '11:45 am', event: 'Posed pictures/Drinks' },
  { time: '12:15 pm', event: 'Food' },
  { time: '1 pm', event: 'Live Music' },
  { time: '1:30 pm', event: 'Dessert, Toast & Bye' }
]
</script>

<template>
  <div class="schedule">
    <h1 class="red text-3xl/10">Day Schedule</h1>
    <ScheduleItem
      v-for="item in dayScheduleItems"
      :time="item.time"
      :event="item.event"
      :key="item.time"
    />
    <br>
    <br>
    <h1 class="red text-3xl/10">Night Schedule</h1>
    <ScheduleItem
      time='6 pm'
      event='Drinks & Revelry'
    />
  </div>
</template>

<script setup>
import ScheduleItem from '@/components/ScheduleItem.vue'

const scheduleItems = [
  { time: '11am', event: 'Ceremony' },
  { time: '12pm', event: 'Brunch' },
  { time: '1pm', event: 'Live Music' },
  { time: '2pm', event: 'Bye' },
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

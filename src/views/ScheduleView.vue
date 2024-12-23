<script setup>
import ScheduleItem from '@/components/ScheduleItem.vue'
</script>

<template>
  <div class="schedule">
    <ScheduleItem time="11am" event="Ceremony" />
    <ScheduleItem time="12pm" event="Brunch" />
    <ScheduleItem time="1pm" event="Live Music" />
    <ScheduleItem time="2pm" event="Bye" />
  </div>
</template>

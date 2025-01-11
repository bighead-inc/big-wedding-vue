<script setup>
import QAItem from '@/components/QAItem.vue'
</script>

<template>
  <div class="qa">
    <QAItem
      question="What time should I arrive?"
      answer="11am. Please get there early as we only have the venue for 3 hours."
    />
    <QAItem
      question="Can I bring my baby?"
      answer="No, the venue is adults-only. There are no amenities like high chairs and diaper changers in the restrooms."
    />
    <QAItem
      question="Can I bring someone?"
      answer="No, unless we gave you a plus one. We have a max of 40 people."
    />
    <QAItem
      question="What is the dress code?"
      answer="Somewhere between cocktail attire and semi-formal/dressy casual."
    />
    <QAItem
      question="Is there parking at the venue?"
      answer="The venue is on Broadway which offers metered parking on both sides at $2.25/hr. All other surrounding streets are free, no permit required, no time restrictions, and no confusing signage. West of Broadway typically has easy street parking that is readily available on Fridays."
    />
    <QAItem
      question="Wait, are we really saying bye at 2pm?"
      answer="Maybe! We need to leave the venue by 2pm. But! We are planning a little something in the evening for those who want to keep going! No pressure! More details to come!"
    />
  </div>
</template>

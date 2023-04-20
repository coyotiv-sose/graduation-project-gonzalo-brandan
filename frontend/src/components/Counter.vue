<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<template lang="pug">
div
  h1 {{ name }}
  p Count: {{ counter.count }}
  button(@click='counter.increment') Increment
  button(@click='counter.decrement') Decrement
</template>

<!-- ****************** Composition API *********************** -->

<!--<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>-->

<!-- ****************** Options API *********************** -->

<script>
import { useCounterStore } from '@/stores/counter'

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      counter: useCounterStore()
    }
  }
}
</script>

<template lang="pug">
div
  h1 {{ name }}
  p Count: {{ counter.count }}
  button(@click='counter.increment') Increment
  button(@click='counter.decrement') Decrement
</template>

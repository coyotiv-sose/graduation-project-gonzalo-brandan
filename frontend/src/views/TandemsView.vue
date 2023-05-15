<!-- <script setup>
import axios from 'axios'
import { RouterLink } from 'vue-router'
const { data: tandems } = await axios.get('http://localhost:3000/tandems')
</script> -->

<script>
import axios from 'axios'
import { RouterLink } from 'vue-router'
axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_API_URL

export default {
  name: 'TandemsView',
  data() {
    return {
      tandems: []
    }
  },
  async created() {
    const { data: tandems } = await axios.get(`/tandems`)
    this.tandems = tandems
  }
}
</script>

<template lang="pug">
h2 Tandems
p Welcome to the tandems page!
p Here you can see all the tandems that have been created by users.

ul
  li(v-for="tandem in tandems" :key="tandem._id")
    RouterLink(:to="`/tandems/${tandem._id}`")
      | {{ tandem.user?.name }} and {{ tandem.partner?.name }} on {{ tandem.date }} at {{ tandem.time }}. Language: {{ tandem.language }}
      </template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useAccountStore } from './stores/account'
import { mapActions, mapState } from 'pinia'
//import axios from 'axios'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HelloWorld,
    RouterLink,
    RouterView
  },
  async mounted() {
    await this.fetchUser()
  },
  methods: {
    ...mapActions(useAccountStore, ['fetchUser', 'logout'])
  },
  computed: {
    ...mapState(useAccountStore, ['user'])
  }
}
</script>

<template>
  <NavBar />
  <h1>Lingolink for {{ user?.name }}</h1>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

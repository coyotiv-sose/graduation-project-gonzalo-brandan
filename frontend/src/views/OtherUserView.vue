<script>
import { mapActions } from 'pinia'
import { useUserStore } from '../stores/user'

export default {
  name: 'UsersView',
  data() {
    return {
      user: {}
    }
  },
  async created() {
    this.user = await this.fetchUser(this.$route.params.userId)
  },
  methods: {
    ...mapActions(useUserStore, ['fetchUser', 'handleInitiateTandem']),
    formatDate(date) {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      const formattedDate = new Date(date).toLocaleDateString(undefined, options)
      return formattedDate
    },
    async initiateTandem(partner = this.user._id, language = 'german', date, time) {
      await this.handleInitiateTandem(partner, language, date, time)
    }
  }
}
</script>

<template lang="pug">

div
  h2 Availabilities of {{ user.name  }}
  div
    ul
      li(v-for="availability in user.availabilities" :key="availability._id")
        | {{ formatDate(availability.date) }} {{ availability.time }}
        button.btn.btn-primary(@click="initiateTandem(partner, language, availability.date, availability.time)") Initiate Tandem

</template>

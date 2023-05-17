<script>
import { mapState, mapActions } from 'pinia'
import { useAccountStore } from '../stores/account'
import { useUserStore } from '../stores/user'

export default {
  name: 'MyAvailabilitiesView',
  data() {
    return {
      date: '',
      time: '',
      repeatWeekly: false
    }
  },
  computed: {
    ...mapState(useAccountStore, ['user']),
    availabilities: {
      get() {
        return this.user.availabilities
      },
      set(value) {
        this.user.availabilities = value
        this.$store.account.updateUser(this.user)
      }
    }
  },
  methods: {
    ...mapActions(useUserStore, ['addAvailability']),
    async doAddAvailability() {
      const availability = {
        date: this.date,
        time: this.time,
        repeatWeekly: this.repeatWeekly
      }
      this.availabilities.push(availability)
      await this.addAvailability(this.date, this.time)
    },
    formatDate(date) {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      const formattedDate = new Date(date).toLocaleDateString(undefined, options)
      return formattedDate
    }
  }
}
</script>

<template lang="pug">
div
  h2 My Availabilities
  div
    ul
      li(v-for="availability in availabilities" :key="availability._id")
        | {{ formatDate(availability.date) }} {{ availability.time }}

div
.container
  h2 Add Availability
    form(@submit.prevent="doAddAvailability")
      .mb-3
        label.form-label(for='exampleInputEmail1') Date
        input#inputDate.form-control(type='date' v-model='date' aria-describedby='date-input')
      .mb-3
        label.form-label(for='exampleInputTime1') Time
        input#inputTime.form-control(type='time' v-model='time')
      .mb-3.form-check
        input#exampleCheck1.form-check-input(type='checkbox' v-model='repeatWeekly')
        label.form-check-label(for='repeatWeekly') Repeat weekly
      button.btn.btn-primary(type='submit') Add availability

div Remove Avabilability
div Edit Availability
</template>

<style scoped>
#inputDate,
#inputTime {
  width: 10rem;
}

.mb-3 {
  font-size: 1rem;
}
</style>

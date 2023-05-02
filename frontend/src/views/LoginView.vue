<script>
import axios from 'axios'
import { mapActions } from 'pinia'
import { useAccountStore } from '../stores/account'

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      user: null
    }
  },
  methods: {
    ...mapActions(useAccountStore, ['login']),
    async doLogin() {
      await this.login(this.email, this.password)
      this.$router.push('/')
    }
  }
}
</script>

<template lang="pug">
.container
  h2 Login to Lingolink
  form(@submit.prevent="doLogin")
    div#emailInput
      label.form-label(for="email") Email:
      input.form-control#email(v-model="email" type="text" required)

    div.mb-3
      label.form-label(for="password") Password:
      input.form-control#password(v-model="password" type="password" required)
    div.loginButton
      button.btn.btn-primary(type="submit") Log in

</template>
<style scoped>
#emailInput {
  margin-bottom: 1rem;
}
.loginButton {
  margin: auto;
}
.container {
  max-width: 400px;
  margin-top: 2rem;
}
</style>

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

  // methods: {
  //   async login() {
  //     const request = await axios.post(
  //       'http://localhost:3000/accounts/session',
  //       {
  //         email: this.email,
  //         password: this.password
  //       },
  //       {
  //         withCredentials: true
  //       }
  //     )
  //     console.log(request.data)
  //     this.user = request.data
  //   }
  // }
}
</script>

<template lang="pug">
h2 Login to Lingolink
form(@submit.prevent="doLogin")
  div
    label(for="email") Email:
    input#email(v-model="email" type="text" required)

  div
    label(for="password") Password:
    input#password(v-model="password" type="password" required)

  button(type="submit") Log in
//- p(v-if="user") You re log in as {{ user.name }}
//- form(@submit.prevent="login")
//-   div
//-     label(for="email") Email
//-     input#email(type="email" v-model="email" required)

//-   div
//-     label(for="password") Password
//-     input#password(type="password" v-model="password" required)

//-   button(type="submit") Login

//-   p
//-     | Don't have an account?
//-     router-link(to="/signup") Sign up
</template>

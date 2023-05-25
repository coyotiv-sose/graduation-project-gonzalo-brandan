<script>
import { mapActions } from 'pinia'
import { useUserStore } from '../stores/user'

export default {
  name: 'SignupView',
  data() {
    return {
      name: '',
      email: '',
      targetLanguage: '',
      offeredLanguage: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(useUserStore, ['signup']),
    async doSignup() {
      await this.signup(this.name, this.email, this.targetLanguage, this.offeredLanguage ,this.password)
      this.$router.push('/login')
    }
  }
}
</script>

<template lang="pug">
.container
  h2 Sign up to Lingolink
  form(@submit.prevent="doSignup")
    div#nameInput
      label.form-label(for="name") Name:
      input.form-control#name(v-model="name" type="text" required)

    div#emailInput
      label.form-label(for="email") Email:
      input.form-control#email(v-model="email" type="text" required)

    div#targetLanguageInput
      label.form-label(for="targetLanguage") I want to learn:
      select.form-select#targetLanguage(v-model="targetLanguage" required)
        option(value="" disabled selected) Select language
        option(value="German") German
        option(value="Spanish") Spanish
        option(value="Turkish") Turkish


    div#offeredLanguageInput
      label.form-label(for="offeredLanguage") I speak fluently:
      select.form-select#offeredLanguage(v-model="offeredLanguage" required)
        option(value="" disabled selected) Select language
        option(value="German") German
        option(value="Spanish") Spanish
        option(value="Turkish") Turkish


    div.mb-3
      label.form-label(for="password") Password:
      input.form-control#password(v-model="password" type="password" required)
    div.loginButton.d-flex.justify-content-center
      button.btn.btn-primary(type="submit") Sign up

</template>
<style scoped>
#emailInput,
#nameInput,
#targetLanguageInput,
#offeredLanguageInput {
  margin-bottom: 1rem;
}
.signupButton {
  margin: auto;
}
.container {
  max-width: 400px;
  margin-top: 2rem;
}
</style>

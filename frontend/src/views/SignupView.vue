<template lang="pug">
h2 Sign up for Lingolink

form(@submit.prevent="signup")
  div
    label(for="email") Email
    input#email(type="email" v-model="email" required)

  div
    label(for="password") Password
    input#password(type="password" v-model="password" required)

  button(type="submit") Sign up

  p
    | Already have an account?
    router-link(to="/login") Login
</template>

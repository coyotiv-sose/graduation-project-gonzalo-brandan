<script>
import { mapActions } from 'pinia'
import { useAccountStore } from '../stores/account'

export default {
  name: 'NavBar',
  props: {
    user: Object
  },
  methods: {
    ...mapActions(useAccountStore, ['logout'])
  }
}
</script>
<template lang="pug">
nav.navbar.navbar-expand-lg.bg-body-tertiary
  .container-fluid
    a.navbar-brand(href='/')
      img(src="../assets/brand/logo-lingolink.png" alt="brand")
    button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation')
      span.navbar-toggler-icon
    #navbarSupportedContent.collapse.navbar-collapse
      ul.navbar-nav.me-auto.mb-2.mb-lg-0
        li.nav-item
          router-link.nav-link(to="/tandems") Tandems
        li.nav-item
          router-link.nav-link(to="/users") Users
        li.nav-item(v-if="!user")
          router-link.nav-link.me-5(to="/login") Log in
        //li.nav-item(v-if="!user")
        //  router-link.nav-link(to="/signup") Sign up
        li.nav-item(v-if="!user")
          a.btn.btn-outline-secondary.shadow-sm.-d-block(href="/signup") Try for free
        li.nav-item(v-if="user")
          router-link.nav-link(to="/myavailabilities") My Availabilities
        li.nav-item.dropdown(v-if="user")
          a.nav-link.dropdown-toggle(href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false')
            | {{ user?.name }}
          ul.dropdown-menu
            li
              a.dropdown-item(href='#') My Profile
            li
            li.nav-item
              hr.dropdown-divider
              a.nav-link(@click="logout") Log out



</template>

<style scoped>
li a {
  cursor: pointer;
}

.nav-item.dropdown {
  justify-content: end;
}
</style>

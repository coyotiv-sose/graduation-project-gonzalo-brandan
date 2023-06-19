<script>
import { mapActions } from 'pinia'
import { useUserStore } from '../stores/user'

export default {
  name: 'UsersView',
  data() {
    return {
      users: []
    }
  },
  async created() {
    this.users = await this.fetchUsers()
  },
  methods: {
    ...mapActions(useUserStore, ['fetchUsers']),
    directToProfile(userId) {
      this.$router.push(`/profile/${userId}`)
    }
  }
}
</script>

<template>

<section class="intro">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="text">
            Learn Languages and Meet New People
          </div>
          <div class="buttons">
            <a href="/users" class="btn btn-primary">Meet our users</a>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/hero-img.svg" alt="hero-img" class="w-100">
        </div>
      </div>
    </div>
  </section>
</template>

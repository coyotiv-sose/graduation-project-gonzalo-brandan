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
<section class="setup">
  <div class="container">
    <div class="text-header text-center">
      <h3>Start learning today</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </div>
    <div class="items text-center">
      <div class="row">
        <div class="col-md-4">
          <div class="icons">
            <img src="../assets/icons/icons-1.svg" alt="icons">
          </div>
          <div class="desc">
            <h5>Create account</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit cupiditate corrupti in soluta consequuntur? Error facilis accusantium facere nesciunt qui?</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="icons">
            <img src="../assets/icons/icons-2.svg" alt="icons">
          </div>
          <div class="desc">
            <h5>Find another user</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit cupiditate corrupti in soluta consequuntur? Error facilis accusantium facere nesciunt qui?</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="icons">
            <img src="../assets/icons/icons-3.svg" alt="icons">
          </div>
          <div class="desc">
            <h5>Book your Tandem!</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit cupiditate corrupti in soluta consequuntur? Error facilis accusantium facere nesciunt qui?</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="information">
  <div class="container">
    <div class="row info-1">
      <div class="col-md-6">
        <div class="text-information">
          <h5>What is a Tandem?</h5>
          <p>A Tandem is a collaborative language learning approach where two individuals, each with a different native language, team up to enhance their language skills. They communicate, teach, and learn from each other through conversation, allowing for mutual linguistic development and cultural exchange.</p>
        </div>
      </div>
      <div class="col-md-6">
        <img src="../assets/image-1.svg" alt="img-1" class="w-100">
      </div>
    </div>
    <div class="row info-2">
      <div class="col-md-6">
        <img src="../assets/image-2.svg" alt="img-1" class="w-100">
      </div>
      <div class="col-md-6">
        <div class="text-information">
          <h5>Learn a language for free, at your own time</h5>
          <p>Put your language skills to use by participating in tandems. Practice, learn, and improve by conversing with native speakers in a mutually beneficial language learning experience.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<footer>
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <div class="row row-cols-1 rows-cols-lg-5 g2 g-lg-3">
        <div class="col-md-3">
          <div>
            <small>
              <a href="#" class="text-decoration-none">Home</a>
            </small>
          </div>
        </div>
        <div class="col-md-3">
          <div>
            <small>
              <a href="#" class="text-decoration-none">Feedback</a>
            </small>
          </div>
        </div>
        <div class="col-md-3">
          <div>
            <small>
              <a href="#" class="text-decoration-none">About</a>
            </small>
          </div>
        </div>
      </div>
    </div>
    <div class="copy">
      &copy; 2023 Gonzalo Brandan
    </div>
  </div>
</div>
</footer>
</template>

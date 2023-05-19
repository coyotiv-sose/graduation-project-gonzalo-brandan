import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_API_URL

export const useUserStore = defineStore('User', {
  actions: {
    async signup(name, email, password) {
      await axios.post('/users', {
        email,
        name,
        password
      })
    },
    async fetchUsers() {
      const users = (await axios.get('/users')).data
      return users
    },
    async addAvailability(date, time) {
      await axios.put('/users', {
        date,
        time
      })
    },
    async fetchUser(userId) {
      const user = (await axios.get(`/users/${userId}`)).data
      return user
    },
    async handleInitiateTandem(partner, language, date, time) {
      const tandem = (
        await axios.post('/tandems', {
          partner,
          language,
          date,
          time
        })
      ).data
      return tandem
    }
  }
})

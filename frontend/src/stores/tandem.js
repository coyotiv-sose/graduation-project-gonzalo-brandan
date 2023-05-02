import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_API_URL

export const useTandemStore = defineStore('Tandem', {
  actions: {
    async fetchTandems() {
      const tandems = (await axios.get('/tandems')).data
      return tandems
    }
  }
})

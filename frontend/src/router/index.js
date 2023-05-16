import { createRouter, createWebHistory } from 'vue-router'
//import TandemsView from '../views/TandemsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/tandems',
      name: 'tandems',
      component: () => import('../views/TandemsView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/UsersView.vue')
    },
    {
      path: '/myavailability',
      name: 'myavailability',
      component: () => import('../views/MyAvailabilityView.vue')
    }
  ]
})

export default router

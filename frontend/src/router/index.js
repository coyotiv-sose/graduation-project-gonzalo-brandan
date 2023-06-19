import { createRouter, createWebHistory } from 'vue-router'
//import TandemsView from '../views/TandemsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
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
      path: '/myavailabilities',
      name: 'myavailabilities',
      component: () => import('../views/MyAvailabilitiesView.vue')
    },
    {
      path: '/profile/:userId',
      name: 'user',
      component: () => import('../views/OtherUserView.vue')
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import libaryView from '../views/characterLibary.vue'
import characterDetail from '../views/characters/characterDetail.vue'
import about from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/libary',
    name: 'libary',
    component: libaryView
  },
  {
    path: '/libary/:name',
    name: 'characterDetail',
    component: characterDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

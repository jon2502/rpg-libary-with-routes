import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import libaryView from '../views/characterLibary.vue'
import characterDetail from '../views/characters/characterDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
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

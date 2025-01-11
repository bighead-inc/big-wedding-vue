import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/getting_started/AboutView.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/QAView.vue'),
    },
    {
      path: '/registry',
      name: 'registry',
      component: () => import('../views/RegistryView.vue'),
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('../views/ScheduleView.vue'),
    },
    {
      path: '/us',
      name: 'us',
      component: () => import('../views/UsView.vue'),
    },
  ],
})

export default router

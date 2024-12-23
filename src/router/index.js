import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WeddingRegistryView from '@/views/RegistryView.vue'
import ScheduleView from '@/views/ScheduleView.vue'
import UsView from '@/views/UsView.vue'

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
      path: '/qa',
      name: 'q&a',
      component:  () => import('../views/QAView.vue')
    },
    {
      path: '/registry',
      name: 'registry',
      component: WeddingRegistryView
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: ScheduleView
    },
    {
      path: '/us',
      name: 'us',
      component: UsView
    }
  ],
})

export default router

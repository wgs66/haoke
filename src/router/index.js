import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout'),
    children: [
      { path: '/', component: () => import('@/views/home') },
      { path: 'selectHome', component: () => import('@/views/selectHome') },
      {
        path: 'real-time-info',
        component: () => import('@/views/real-time-info')
      },
      {
        path: 'my',
        component: () => import('@/views/My')
      }
    ]
  },
  { path: '/login', component: () => import('@/views/My/login') }
]

const router = new VueRouter({
  routes
})

export default router

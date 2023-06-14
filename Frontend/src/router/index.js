import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '/',
          name: 'LogIn',
          component: () => import('../views/LogInView.vue')
        },
        {
          path: '/signUp',
          name: 'SignUp',
          component: () => import('../views/SignUpView.vue')
        }
      ]
    },
    {
      path: '/board',
      name: 'Board',
      component: () => import('../views/BoardView.vue'),
      children: [
        {
          path: '/page',
          name: 'Page',
          component: () => import('../views/PageView.vue')
        }
      ]
    }
  ]
})

export default router

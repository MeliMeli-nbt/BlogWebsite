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
  ]
})

export default router

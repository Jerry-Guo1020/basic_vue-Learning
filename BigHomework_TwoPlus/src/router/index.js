import { createRouter, createWebHistory } from 'vue-router'
import UserProfile from '../components/UserProfile.vue'
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('../components/Login.vue')
    },
    {
      path: '/register',
      component: () => import('../components/Register.vue')
    },
    {
      path: '/home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: 'profile',
          component: () => import('../components/UserProfile.vue')
        },
        // 其他子路由配置...
      ]
    }
  ]
})

const routes = [{
  path: '/profile',
  component: UserProfile,
},]
export default router ;
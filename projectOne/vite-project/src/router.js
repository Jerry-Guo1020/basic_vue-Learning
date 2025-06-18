import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import Home from './components/Home.vue';
import AddJob from './components/AddJob.vue'; // 导入新的组件
import JobList from './components/JobList.vue'; // 导入新的组件

const routes = [
  {
    path: '/',
    redirect: '/login' // 默认重定向到登录页
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/home/list', // 进入 /home 时默认显示岗位列表
    children: [ // 添加嵌套路由
      {
        path: 'add', // 子路由路径不需要以 / 开头
        name: 'AddJob',
        component: AddJob
      },
      {
        path: 'list',
        name: 'JobList',
        component: JobList
      }
    ]
  }
  // ... 其他路由
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
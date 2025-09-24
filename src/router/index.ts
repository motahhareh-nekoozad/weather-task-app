import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Todos from '../pages/Todo.vue'
import Weather from '../pages/Weather.vue'
import Profile from '../pages/Profile.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/todo', component: Todos },
  { path: '/weather', component: Weather },
  { path: '/profile', component: Profile },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

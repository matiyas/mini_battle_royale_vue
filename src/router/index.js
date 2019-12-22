import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login'
import Registration from '@/views/Registration'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sign_in',
    name: 'login_path',
    component: Login
  },
  {
    path: '/sign_up',
    name: 'registration_path',
    component: Registration
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

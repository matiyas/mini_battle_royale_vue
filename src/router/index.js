import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login'
import Registration from '@/views/Registration'
import Game from '@/views/Game'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home_path',
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
  },
  {
    path: '/game',
    name: 'game_path',
    component: Game
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

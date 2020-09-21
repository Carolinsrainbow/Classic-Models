import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Notfound from '../views/Notfound.vue'
import Ordenes from '../views/Ordenes.vue'
import Detalle from '../views/Detalle.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/ordenes',
    name: 'Ordenes',
    component: Ordenes
  },

  {
    path: '/detalle',
    name: 'Detalle',
    component: Detalle
  },
  {
    path: '*',
    name: 'Notfound',
    component: Notfound
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
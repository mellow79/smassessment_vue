import Vue from 'vue'
import VueRouter from 'vue-router'
import Edit from '../components/EditProduct'

Vue.use(VueRouter)

const routes = [
  {
    path: '/EditProduct/:id',
    name: 'EditProduct',
    component: Edit
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  fallback: true,
  routes
})

export default router

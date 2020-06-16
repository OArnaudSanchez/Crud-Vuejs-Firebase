import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'inicio',
    component: ()=> import('@/views/Inicio.vue')
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: ()=> import('@/views/Editar.vue')
  },
  {
    path: '/agregar',
    name: 'agregar',
    component: ()=> import('@/views/AgregarContacto.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

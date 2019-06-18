import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Book from '@/pages/Book'
import Enter from '@/pages/Enter'
import Portrait from '@/pages/Portrait'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    }, 
    {
      path: '/index',
      component: Index
    }
  ]
})

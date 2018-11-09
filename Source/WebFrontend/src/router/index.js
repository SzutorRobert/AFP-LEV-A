import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Registration from '@/components/Registration'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: Login,
      meta: {requiresAuth: true},
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {requiresAuth: true},
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {requiresAuth: false},
      beforeEnter: function(to, from, next){
        if(localStorage.accessToken && localStorage.loggedIn){
          next('/dashboard')
        }else{
          next()
        }
      }
    },
    {
      path: '/logout',
      name: 'logout',
      meta: {requiresAuth: false},
      beforeEnter: function(to, from, next){
        localStorage.clear();
        location.reload();
      }
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration,
      meta: {requiresAuth: true}
    },
  ]
})
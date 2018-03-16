import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('@/pages/Main')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/pages/About')
    },
    {
      path: '/registration',
      name: 'Registration',
      component: () => import('@/pages/Registration')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/pages/Home')
    },
    {
      path: '/account',
      name: 'Account',
      component: () => import('@/pages/Account')
    },
    {
      path: '/sweepstakeAdmin',
      name: 'SweepstakeAdmin',
      component: () => import('@/pages/SweepstakeAdmin')
    },
    {
      path: '/sweepstake',
      name: 'Sweepstake',
      component: () => import('@/pages/Sweepstake')
    },
    // Does not know how to handle 404 errors. Might want to build in a catch all page right here.
    {
      path: '/404',
      name: 'MissingPage',
      component: () => import('@/pages/MissingPage')
    },
    {
      path: '/linkedin',
      name: 'LinkedIn',
      component: () => import('@/pages/LinkedIn')
    },
    {
      path: '/apitests',
      name: 'ApiTests',
      component: () => import('@/pages/ApiTests')
    }
  ]
})

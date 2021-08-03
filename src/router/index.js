import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

import UserIndex from '@/components/Index'
import UserCreate from '@/components/CreateUser'
import UserEdit from '@/components/EditUser'
import UserShow from '@/components/ShowUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/Create',
      name: 'User-Create',
      component: UserCreate
    },
    {
      path: '/user/Edit',
      name: 'User-Edit',
      component: UserEdit
    },
    {
      path: '/user',
      name: 'User-Show',
      component: UserShow
    }
  ]
})
import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store/index.js'
import Signin from '@/views/users/Signin'
import Signup from '@/views/users/Signup'
import ChatsList from '@/views/chats/List'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ChatsList
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   store.dispatch('isUserLoggedIn').then(loggedIn => {
//     console.log(loggedIn)
//     console.log(to)
//     console.log(from)
//     // next(to.path)
//     if (!loggedIn && to.name !== 'signin') {
//       debugger
//       next('/signin')
//     }
//   })
// })

export default router

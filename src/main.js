// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

import * as firebase from 'firebase'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDDBCZCj2ch-MrMq_4pJgS_FrjwnnJ-S_M',
      authDomain: 'tuna-chatter.firebaseapp.com',
      databaseURL: 'https://tuna-chatter.firebaseio.com',
      projectId: 'tuna-chatter',
      storageBucket: 'tuna-chatter.appspot.com',
      messagingSenderId: '335065929388'
    })
    this.$store.dispatch('loadMessages')
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        store.dispatch('setUserLoggedIn')
      } else {
        // No user is signed in.
      }
    })
  }
})

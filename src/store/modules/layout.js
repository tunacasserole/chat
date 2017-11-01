import * as types from '../mutation-types'
import * as firebase from 'firebase'
// import router from 'vue-router'

// initial state
const state = {
  navigatorVisible: false,
  chooserVisible: false,
  loadedMessages: [],
  userLoggedIn: true,
  searchPressed: true
}

// getters
const getters = {
  user: state => state.user,
  loadedMessages: state => state.loadedMessages,
  navigatorVisible: state => state.navigatorVisible,
  chooserVisible: state => state.chooserVisible,
  miniVisible: state => state.miniVisible,
  userLoggedIn: state => state.userLoggedIn,
  searchPressed: state => state.searchPressed
}

// actions
const actions = {
  isUserLoggedIn () {
    return this.getters.userLoggedIn
  },
  searchPressed () {
    return this.getters.searchPressed
  },
  setUserLoggedIn ({ commit }, payload) {
    const newUser = {
      // id: payload.uid
    }
    commit('setUser', newUser)
  },
  signOut ({commit}) {
    firebase.auth().signOut()
      .then(
          commit('clearUser'),
          // router.push('signup')
      )
  },
  signUserIn ({commit}, payload) {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          const newUser = {
            id: user.uid
          }
          commit('setUser', newUser)
        }
      )
  },
  signUserUp ({ commit }, payload) {
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(
      user => {
        const newUser = {
          id: user.uid
        }
        commit('setUser', newUser)
      }
    )
      .catch(
        error => {
          console.log(error)
        }
      )
  },
  googleSignUserUp ({ commit }, payload) {
    var provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
//          var token = result.credential.accessToken
      // The signed-in user info.
      var user = result.user
      const newUser = {
        id: user.uid
      }
      commit('setUser', newUser)
      // ...
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code
      console.log(errorCode)
//          var errorMessage = error.message
      // The email of the user's account used.
//          var email = error.email
      // The firebase.auth.AuthCredential type that was used.
//          var credential = error.credential
      // ...
    })
  },
  toggleChooser ({ commit, state }) {
    commit(types.TOGGLE_CHOOSER)
  },
  toggleNavigator ({ commit }) {
    commit(types.TOGGLE_NAVIGATOR)
  },
  closeNavigator ({ commit }) {
    commit(types.CLOSE_NAVIGATOR)
  },
  createMessage ({ commit }, payload) {
    const message = {
      content: payload.content,
      username: payload.username,
      avatar: payload.avatar
    }
    commit('createMessage', message)
    // Reach out to Firebase and store it
    firebase.database().ref('messages').push(payload)
  },
  loadMessages ({commit}) {
    firebase.database().ref('messages').on('value', function (data) {
      // console.log(data)
      commit('setLoading', true)
      const messages = []
      const obj = data.val()
      for (let key in obj) {
        messages.push({
          id: key,
          content: obj[key].content,
          avatar: obj[key].avatar,
          username: obj[key].username
        })
      }
      commit('setLoadedMessages', messages)
      commit('setLoading', false)
    })
  },

  closeChooser ({ commit, state }) {
    commit(types.CLOSE_CHOOSER)
  },
  toggleMini ({ commit, state }) {
    commit(types.TOGGLE_MINI)
  },
  closeMini ({ commit, state }) {
    commit(types.CLOSE_MINI)
  }
}

// mutations
const mutations = {
  setUser (state, payload) {
    state.user = payload
  },
  clearUser (state) {
    state.user = null
    state.userLoggedIn = false
  },
  setLoadedMessages (state, payload) {
    state.loadedMessages = payload
  },
  createMessage (state, payload) {
    state.loadedMessages.push(payload)
  },
  setLoading (state, payload) {
    state.loading = payload
  },
  [types.TOGGLE_NAVIGATOR] (state) {
    // toggle the navigator
    state.navigatorVisible = !state.navigatorVisible
  },
  [types.CLOSE_NAVIGATOR] (state) {
    // toggle the navigator
    state.navigatorVisible = false
  },
  [types.TOGGLE_CHOOSER] (state) {
    // toggle the chooser
    state.chooserVisible = !state.chooserVisible
  },
  [types.CLOSE_CHOOSER] (state) {
    // close the chooser
    state.chooserVisible = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

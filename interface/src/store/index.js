import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default function () {
  const store = new Vuex.Store({
    state: {
      showDrawerLeft: true,
      showDrawerRight: false,
      showSignin: false
    },
    mutations: {
      toggleDrawerRight (state) {
        state.showDrawerRight = !state.showDrawerRight
      },
      toggleDrawerLeft (state) {
        state.showDrawerLeft = !state.showDrawerLeft
      },
      showSignin (state) {
        state.showSignin = true
      },
      hideSignin (state) {
        state.showSignin = false
      }
    },
    actions: {
      toggleDrawerRight (context) {
        context.commit('toggleDrawerRight')
      },
      toggleDrawerLeft (context) {
        context.commit('toggleDrawerLeft')
      },
      showSignin (context) {
        context.commit('showSignin')
      },
      hideSignin (context) {
        context.commit('hideSignin')
      }
    }
  })

  return store
}

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const TOKEN_KEY = 'TOUTIAO_USER'
export default new Vuex.Store({
  state: {
    user: JSON.parse(window.localStorage.getItem(TOKEN_KEY))
  },
  getters: {
  },
  mutations: {
    setUser (state, user) {
      state.user = user
      window.localStorage.setItem(TOKEN_KEY, JSON.stringify(user))
    }
  },
  actions: {
  },
  modules: {
  }
})

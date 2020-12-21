import { GetterTree, MutationTree, ActionTree } from 'vuex'
import axios from 'axios'

const state = () => ({
  loginUser: null,
})

export type RootState = ReturnType<typeof state>

const getters: GetterTree<RootState, RootState> = {
  isAuthenticated(state) {
    return !!state.loginUser
  },
  loginUser(state) {
    return state.loginUser
  },
}

const mutations: MutationTree<RootState> = {
  login(state, user) {
    state.loginUser = user
  },
  logout(state) {
    state.loginUser = null
  },
}

const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit({ commit }, { req }) {
    if (req.user) {
      return commit('login', req.user)
    }
    return commit('logout')
  },
  fetchUser({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get('/api/v1/sessions/me')
        .then((response) => {
          if (response.status === 200) {
            commit('login', response.data)
          } else {
            commit('logout')
          }
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}

import * as types from './mutation_types'

const mutations = {
  [types.SET_USER] (state, user) {
    state.user = user
  },
  [types.SET_MER] (state, mer) {
    state.mer = mer
  },
  [types.SET_TOKEN] (state, token) {
    state.token = token
  },
  [types.SET_WALLET] (state, wallet) {
    state.wallet = wallet
  },
  [types.SET_PRODUCTS] (state, products) {
    state.products = products
  }
}

export default mutations
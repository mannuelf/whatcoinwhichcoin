import Consola from 'consola'
import axios from 'axios'

export const state = () => ({
  list: []
})

export const mutations = {
  SET_COINS(state, coins) {
    state.list = coins
  },
  add(state, value) {
    state.list = value
  }
}

export const actions = {
  set(state, list) {
    state.list = list
  },
  async get({ commit }) {
    await axios.get('https://api.mybitx.com/api/1/tickers').then(response => {
      if (response.status === 200) {
        commit('SET_COINS', response.data)
      }
    })
  }
}

Consola.info('state', state)

import { GetterTree, ActionTree, MutationTree } from 'vuex'
import Axios from 'axios'

const API_URL = "https://api.mybitx.com/api/1/tickers";
const CONFIG: object = {
  method: 'get',
  headers: {
    'Access-Control-Allow-Origin': 'https://api.mybitx.com/',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'X-Custom-Url': 'https://whatcoinwhichcoin.com'
  }
}

export const state = (): object => ({
  list: [] as string[],
  exchange: '' as string,
  error: '' as string
})
console.log(state)
export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  list: state => state.list,
  exchange: state => state.exchange,
  error: state => state.error
}

export const mutations: MutationTree<RootState> = {
  SET_ALL: (state, payload) => {
    state.list = payload
  },
  SET_EXCHANGE: (state, payload) => {
    state.exchange = payload
  },
  ERROR: (state, payload) => {
    state.error = payload
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async GET_ALL({ commit }) {
    try {
      await Axios
        .get(API_URL, CONFIG)
        .then(response => {
          if (response.status === 200) {
            commit('SET_ALL', response.data)
            commit('SET_EXCHANGE', 'luno')
          }
        })
        .catch(err => {
          commit('ERROR', err)
        })
    } catch (err) {
      commit('ERROR', err)
    }
  }
}

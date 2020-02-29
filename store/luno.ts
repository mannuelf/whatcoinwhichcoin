import { GetterTree, ActionTree, MutationTree } from "vuex"
import Axios from 'axios'

export const state = () => ({
  list: [] as string [],
  exchange: '' as string,
  error: '' as string
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  "list": state => state.list,
  "exchange": state => state.exchange,
  "error": state => state.error
}

export const mutations: MutationTree<RootState> = {
  SET_ALL(state, coins) {
    state.list = coins
  },
  ERROR(state, error) {
    state.error = error
  },
  SET_EXCHANGE(state, payload) {
    state.exchange = payload
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async GET_ALL({ commit }) {
    try {
      await Axios
        .get('https://api.mybitx.com/api/1/tickers', {
          method: 'get',
          headers: {
            'Access-Control-Allow-Origin': 'https://api.mybitx.com/',
            'Access-Control-Allow-Headers':
              'Origin, Content-Type, X-Auth-Token',
            'X-Custom-Url': 'https://whatcoinwhichcoin.com'
          }
        })
        .then(response => {
          if (response.status === 200) {
            commit('SET_EXCHANGE', 'luno')
            commit('SET_ALL', response.data)
          }
        })
        .catch(err => {
          commit('ERROR', err)
        })
    } catch (err) {
      console.log(err)
    }
  }
}

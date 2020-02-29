import { GetterTree, ActionTree, MutationTree } from 'vuex'
import Axios from 'axios'

const API_URLS: string[] = [
  'https://www.bitstamp.net/api/v2/ticker/btcusd',
  'https://www.bitstamp.net/api/v2/ticker/bchusd',
  'https://www.bitstamp.net/api/v2/ticker/ethusd',
  'https://www.bitstamp.net/api/v2/ticker/ltcusd',
  'https://www.bitstamp.net/api/v2/ticker/xrpusd'
]

export const state = () => ({
  coin: {
    btc: {} as object,
    bch: {} as object,
    eth: {} as object,
    ltc: {} as object,
    xrp: {} as object,
    error: {} as object,
    loading: true as boolean
  } as object,
  exchange: '' as string
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  'coin': {
    'btc': state => state.btc,
    'bch': state => state.bch,
    'eth': state => state.eth,
    'ltc': state => state.ltc,
    'xrp': state => state.xrp,
    'error': state => state.error,
    'loading': state => state.loading
  },
  'exchange': state => state.exchange
}

export const mutations: MutationTree<RootState> = {
  SET_BCH(state, payload) {
    state.coin.bch = payload
  },
  SET_BTC(state, payload) {
    state.coin.btc = payload
  },
  SET_ETH(state, payload) {
    state.coin.eth = payload
  },
  SET_LTC(state, payload) {
    state.coin.ltc = payload
  },
  SET_XRP(state, payload) {
    state.coin.xrp = payload
  },
  SET_ERROR_MESSAGE(state, payload) {
    state.coin.error = payload
  },
  SET_EXCHANGE(state, payload) {
    state.exchange = payload
  },
  SET_END(state, payload) {
    state.coin.loading = payload
  }
}

export const actions: ActionTree<RootState, RootState> = {
  GET_COINS({ commit }) {
    try {
      API_URLS.map(url => {
        Axios.get(url)
          .then((response) => {
            const respData: object = response.data
            const coinName: string = url.substr(url.length - 6)

            switch (coinName) {
              case 'btcusd':
                commit('SET_BTC', respData)
                commit('SET_END', false)
                break
              case 'bchusd':
                commit('SET_BCH', respData)
                commit('SET_END', false)
                break
              case 'ethusd':
                commit('SET_ETH', respData)
                commit('SET_END', false)
                break
              case 'ltcusd':
                commit('SET_LTC', respData)
                commit('SET_END', false)
                break
              case 'xrpusd':
                commit('SET_XRP', respData)
                commit('SET_END', false)
                break
              default:
                commit('SET_ERROR_MESSAGE', 'no coins')
            }
            commit('SET_EXCHANGE', 'bitstamp')
            commit('SET_END', false)
          }).catch((error) => {
            commit('SET_ERROR_MESSAGE', error)
        })
      })
    } catch (error) {
      commit('SET_ERROR_MESSAGE', error)
    }
  }
}

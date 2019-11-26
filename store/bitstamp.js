import axios from 'axios'

const url = 'https://www.bitstamp.net/api/v2/ticker/'
const currencyPairs = ['btcusd', 'bchusd', 'ethusd', 'ltcusd', 'xrpusd']
const configHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Credentials': '*'
}

export const state = () => ({
  coin: {
    exchange: 'bitstamp',
    bch: '',
    btc: '',
    eth: '',
    ltc: '',
    xrp: '',
    error: '',
    loading: true
  }
})

export const mutations = {
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
  SET_END(state, payload) {
    state.coin.loading = payload
  }
}

export const actions = {
  async GET_BTC({ commit }) {
    let i
    for (i = 0; i < currencyPairs.length; i++) {
      console.log(currencyPairs[i])
      await axios
        .get(url + currencyPairs[i], {
          headers: configHeaders
        })
        .then(response => {
          if (response.status === 200) {
            const data = response.data
            console.log(data)
            commit('SET_BTC', data)
            commit('SET_END', false)
          }
        })
        .catch(error => {
          commit('SET_ERROR_MESSAGE', error)
        })
    }
  }
}

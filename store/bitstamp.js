import axios from 'axios'

const urls = [
  'https://www.bitstamp.net/api/v2/ticker/btcusd',
  'https://www.bitstamp.net/api/v2/ticker/bchusd',
  'https://www.bitstamp.net/api/v2/ticker/ethusd',
  'https://www.bitstamp.net/api/v2/ticker/ltcusd',
  'https://www.bitstamp.net/api/v2/ticker/xrpusd'
]

export const state = () => ({
  coin: {
    exchange: 'bitstamp',
    btc: '',
    bch: '',
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
  async GET_COINS({ commit }) {
    const coinsData = urls.map(async url => {
      const response = await axios.get(url)
      if (response.status === 200) {
        commit('SET_END', false)
        return response
      }
    })

    for (const coinData of coinsData) {
      const datum = await coinData
      commit('SET_BTC', datum.data.ask)
      console.log('for: ', datum.data)
    }
  }
}

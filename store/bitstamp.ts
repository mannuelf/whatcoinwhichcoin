import axios from 'axios'

export const state = () => ({
  coin: {
    btc: {},
    bch: {},
    eth: {},
    ltc: {},
    xrp: {},
    error: {},
    loading: true
  },
  exchange: ''
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
  SET_EXCHANGE(state, payload) {
    state.exchange = payload
  },
  SET_END(state, payload) {
    state.coin.loading = payload
  }
}

export const actions = {
  async GET_COINS({ commit }) {
    const urls = [
      'https://www.bitstamp.net/api/v2/ticker/btcusd',
      'https://www.bitstamp.net/api/v2/ticker/bchusd',
      'https://www.bitstamp.net/api/v2/ticker/ethusd',
      'https://www.bitstamp.net/api/v2/ticker/ltcusd',
      'https://www.bitstamp.net/api/v2/ticker/xrpusd'
    ]
    try {
      await urls.map(async url => {
        const response = await axios.get(url)
        if (response.status === 200) {
          const respData = await response.data
          const coinName = url.substr(url.length - 6)
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
              console.log('No coins')
          }
          commit('SET_EXCHANGE', 'bitstamp')
          commit('SET_END', false)
        }
      })
    } catch (error) {
      commit('SET_ERROR_MESSAGE', error)
    }
  }
}

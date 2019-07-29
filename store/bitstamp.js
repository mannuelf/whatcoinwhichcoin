import axios from 'axios'

const url = 'https://www.bitstamp.net/api/v2/ticker/'
const conversionUrl = 'https://cors-anywhere.herokuapp.com/'

export const state = () => ({
  coins: {
    bch: '',
    btc: '',
    eth: '',
    ltc: '',
    xrp: ''
  },
  error: ''
})

export const mutations = {
  SET_BCH(state, payload) {
    state.coins.bch = payload
  },
  SET_BTC(state, payload) {
    state.coins.btc = payload
  },
  SET_ETH(state, payload) {
    state.coins.eth = payload
  },
  SET_LTC(state, payload) {
    state.coins.ltc = payload
  },
  SET_XRP(state, payload) {
    state.coins.xrp = payload
  },
  ERROR(state, error) {
    state.error = error
  }
}

export const actions = {
  async GET_BTC({ commit }) {
    const currency = 'btcusd'
    console.log('trying api call >>')
    await axios
      .get(conversionUrl + url + currency)
      .then(response => {
        const coin = response.data
        console.log('coin:', coin)
        commit('SET_BTC', coin)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        this.loading = false
      })
  }
}

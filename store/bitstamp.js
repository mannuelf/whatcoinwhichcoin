import axios from 'axios'

export const state = () => ({
  coins: {
    bch: '',
    btc: '',
    eth: '',
    ltc: '',
    xrp: ''
  },
  errorMessage: ''
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
  SET_ERROR_MESSAGE(state, payload) {
    state.errorMessage = payload
  }
}

export const actions = {
  async GET_BTC({ commit }) {
    console.log('store.bitstamp')
    const currency = 'btcusd'
    const url = 'https://www.bitstamp.net/api/v2/ticker/'
    const conversionUrl = 'https://cors-anywhere.herokuapp.com/'
    console.log('trying api call >>')
    await axios
      .get(conversionUrl + url + currency)
      .then(response => {
        const data = response.data
        console.log('coin:', data)
        commit('SET_BTC', data)
      })
      .catch(error => {
        console.log(error)
        commit('SET_ERROR_MESSAGE', error)
      })
      .finally(() => {
        this.loading = false
      })
  }
}

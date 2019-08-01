import axios from 'axios'

const url = 'https://www.bitstamp.net/api/v2/ticker/'

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
    const currencyPair = 'btcusd'
    await axios
      .get(url + currencyPair, {
        headers: configHeaders
      })
      .then(response => {
        if (response.status === 200) {
          const data = response.data
          commit('SET_BTC', data)
          commit('SET_END', false)
        }
      })
      .catch(error => {
        commit('SET_ERROR_MESSAGE', error)
      })
  },
  async GET_BCH({ commit }) {
    const currencyPair = 'bchusd'
    await axios
      .get(url + currencyPair, {
        headers: configHeaders
      })
      .then(response => {
        if (response.status === 200) {
          const data = response.data
          commit('SET_BCH', data)
          commit('SET_END', false)
        }
      })
      .catch(error => {
        commit('SET_ERROR_MESSAGE', error)
      })
  },
  async GET_ETH({ commit }) {
    const currencyPair = 'ethusd'
    await axios
      .get(url + currencyPair, {
        headers: configHeaders
      })
      .then(response => {
        if (response.status === 200) {
          const data = response.data
          commit('SET_ETH', data)
          commit('SET_END', false)
        }
      })
      .catch(error => {
        commit('SET_ERROR_MESSAGE', error)
      })
  },
  async GET_LTC({ commit }) {
    const currencyPair = 'ltcusd'
    await axios
      .get(url + currencyPair, {
        headers: configHeaders
      })
      .then(response => {
        if (response.status === 200) {
          const data = response.data
          commit('SET_LTC', data)
          commit('SET_END', false)
        }
      })
      .catch(error => {
        commit('SET_ERROR_MESSAGE', error)
      })
  },
  async GET_XRP({ commit }) {
    const currencyPair = 'xrpusd'
    await axios
      .get(url + currencyPair, {
        headers: configHeaders
      })
      .then(response => {
        if (response.status === 200) {
          const data = response.data
          commit('SET_XRP', data)
          commit('SET_END', false)
        }
      })
      .catch(error => {
        commit('SET_ERROR_MESSAGE', error)
      })
  }
}

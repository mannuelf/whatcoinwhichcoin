import axios from 'axios'

export const state = () => ({
  list: []
})

export const mutations = {
  SET_ALL(state, coins) {
    state.list = coins
  },
  SET_BTC(state, coins) {
    state.list = coins
  },
  SET_ETH(state, coins) {
    state.eth = coins
  }
}

export const actions = {
  async GET_ALL({ commit }) {
    await axios
      .get('https://api.mybitx.com/api/1/tickers')
      .then(response => {
        if (response.status === 200) {
          commit('SET_ALL', response.data)
        }
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
  },
  async GET_BTC({ commit }) {
    await axios
      .get('https://api.mybitx.com/api/1/tickers?pair=XBTZAR')
      .then(response => {
        if (response.status === 200) {
          commit('SET_BTC', response.data)
        }
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
  },
  async GET_ETH({ commit }) {
    await axios
      .get('https://api.mybitx.com/api/1/tickers?pair=ETHZAR')
      .then(response => {
        if (response.status === 200) {
          commit('SET_ETH', response.data)
        }
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
  }
}

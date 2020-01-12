import axios from 'axios'

export const state = () => ({
  list: [],
  exchange: 'luno',
  error: ''
})

export const mutations = {
  SET_ALL(state, coins) {
    state.list = coins
  },
  ERROR(state, error) {
    state.error = error
  }
}

export const actions = {
  async GET_ALL({ commit }) {
    try {
      await axios
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
            commit('SET_ALL', response.data)
          }
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          commit('ERROR', err)
        })
    } catch (err) {
      console.log(err)
    }
  }
}

import axios from 'axios'

export const state = () => ({
  list: [],
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
            'Access-Control-Allow-Headers':
              'https://whatcoinwhichcoin.com, Origin, Content-Type, X-Auth-Token',
            'x-url': 'https://whatcoinwhichcoin.com'
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

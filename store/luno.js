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
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers':
              'Origin, X-Requested-With, Content-Type, Accept'
          }
        })
        .then(response => {
          console.log('response', response.data)
          console.log(response.data)
          console.log(response.status)
          console.log(response.statusText)
          console.log(response.headers)
          if (response.status === 200) {
            commit('SET_ALL', response.data)
          }
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          commit('ERROR', err)
          console.log(err)
        })
    } catch (err) {
      console.log(err)
    }
  }
}

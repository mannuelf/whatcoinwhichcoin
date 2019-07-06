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
        .get('https://www.bitstamp.net/api/v2/ticker/', {
          method: 'get'
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

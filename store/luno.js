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
    await axios
      .get('https://cors-anywhere.herokuapp.com/https://api.mybitx.com/api/1/tickers')
      .then(response => {
        if (response.status === 200) {
          commit('SET_ALL', response.data)
        }
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        commit('ERROR', err)
        console.log(err)
      })
  }
}

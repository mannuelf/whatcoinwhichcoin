import { getAccessorType } from 'typed-vuex'
import * as submodule from '~/store/submodule'
import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => {
  appHeader: [] as string[]
}

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  appHeader: state => state.appHeader
}

export const mutations: MutationTree<RootState> = {
  ADD_NAME: (state, newName: string) => (state.appHeader = newName)
}

export const actions: ActionTree<RootState, RootState> = {
  fetchName({ commit }) {
    const response = this.$axios.$get('https://randomuser.me/api/')
    console.log(response)
    commit('ADD_NAME', 'testinNAme')
  }
}

// This compiles to nothing and only serves to return the correct type of the accessor
export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    // The key (submodule) needs to match the Nuxt namespace (e.g. ~/store/submodule.ts)
    submodule
  }
})

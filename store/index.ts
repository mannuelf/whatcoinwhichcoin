import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  locales: ['en', 'pt'] as string[],
  locale: 'en'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}

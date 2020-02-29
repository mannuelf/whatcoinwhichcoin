import { GetterTree, MutationTree } from "vuex"

export const state = () => ({
  locales: ['en', 'pt'] as string[],
  locale: 'en' as string
})

export type RootState = ReturnType<typeof  state>

export const getters: GetterTree<RootState, RootState> = {
  "locales": state => state.locales,
  "locale": state => state.locale
}

export const mutations: MutationTree<RootState> = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}

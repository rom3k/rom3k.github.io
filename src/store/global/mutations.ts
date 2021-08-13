import { MutationTree } from 'vuex'
import { State } from '.'

export const mutations: MutationTree<State> = {
  TOGGLE_DARK_MODE: state => {
    state.darkMode = !state.darkMode
    if (state.darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}

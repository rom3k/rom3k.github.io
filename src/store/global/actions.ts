import { ActionTree } from 'vuex'
import { IRootState } from '../index'
import { State as GlobalState } from '.'

export const actions: ActionTree<GlobalState, IRootState> = {
  TOGGLE_DARK_MODE: ({ commit }) => {
    commit('TOGGLE_DARK_MODE')
  }
}

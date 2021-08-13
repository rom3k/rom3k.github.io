import { GetterTree } from 'vuex'
import { State } from '.'
import { IRootState } from '..'

export const getters: GetterTree<State, IRootState> = {
  GET_MODE: state => state.darkMode
}

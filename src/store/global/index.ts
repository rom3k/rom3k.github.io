import { Module } from 'vuex'
import { IRootState } from '../index'
import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'

export interface State {
  darkMode: boolean
}

export const initialState: State = {
  darkMode: false
}

export const global: Module<State, IRootState> = {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
  getters
}

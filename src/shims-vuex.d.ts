/* eslint-disable no-unused-vars */
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { IRootState } from './store/index'

declare module '@vue/runtime-core' {
  interface State extends IRootState {}
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

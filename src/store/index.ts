import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store, ModuleTree, Module } from 'vuex'
import { global as globalModule } from './global'

export interface IRootState {
  root: boolean
}

const modules: ModuleTree<IRootState> = {
  global: globalModule
}

const root: Module<IRootState, IRootState> = {
  modules,
  state: {
    root: true
  }
}

export const store = createStore<IRootState>(root)

export const key: InjectionKey<Store<IRootState>> = Symbol('store')

export function useStore (): Store<IRootState> {
  return baseUseStore(key)
}

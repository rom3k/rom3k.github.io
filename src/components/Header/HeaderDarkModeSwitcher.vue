<template>
    <div class="self-center">
      <label class="mr-2 text-xs dark:text-white">Dark mode</label>
      <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          @click="toggleDarkMode"
          type="checkbox"
          name="toggle"
          id="toggle"
          class="
            toggle-checkbox
            absolute
            block
            w-6
            h-6
            rounded-full
          bg-white
            border-4
            appearance-none
            cursor-pointer
          "
          :class="{
            'right-0': isDarkMode,
            'border-green-400': isDarkMode
          }"
        />
        <label
          for="toggle"
          class="
            toggle-label
            block
            overflow-hidden
            h-6
            rounded-full
            bg-gray-300
            cursor-pointer
          "
          :class="{
            'border-green-400': isDarkMode,
          }"
          :style="{
            'backgroundColor': isDarkMode ? '#68D391' : ''
          }"
        ></label>
      </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/runtime-core'
import { useStore } from '../../store/index'

export default defineComponent({
  name: 'HeaderDarkModeSwitcher',
  setup () {
    const store = useStore()

    return {
      toggleDarkMode: () => {
        store.dispatch('global/TOGGLE_DARK_MODE')
      },
      isDarkMode: computed(() => store.getters['global/GET_MODE'])
    }
  }
})
</script>

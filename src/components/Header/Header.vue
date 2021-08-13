<template>
  <header class="py-3 px-4 transition-colors duration-300 flex justify-between dark:bg-gray-800">
    <header-name name="Michał Romaszkin"></header-name>
    <header-dark-mode-switcher-vue />
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import HeaderName from './HeaderName.vue'
import HeaderDarkModeSwitcherVue from './HeaderDarkModeSwitcher.vue'

export default defineComponent({
  name: 'Header',
  components: {
    HeaderName,
    HeaderDarkModeSwitcherVue
  }
})
</script>

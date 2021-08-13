<template>
  <footer class="py-3 px-4 transition-colors duration-300 flex dark:bg-gray-800 dark:text-white">
    {{ text }}
  </footer>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'Footer',
  setup () {
    return {
      text: 'Created with <3 by myself'
    }
  }
})
</script>

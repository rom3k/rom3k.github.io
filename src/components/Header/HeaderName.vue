<template>
    <div class="font-semibold text-lg w-auto dark:text-white">{{ name }}</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
export default defineComponent({
  name: 'HeaderName',
  props: {
    name: {
      type: String,
      required: true
    }
  }
})
</script>

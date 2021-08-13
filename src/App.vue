<template :class="{  }">
  <MainPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainPage from './layout/MainPage.vue'

export default defineComponent({
  name: 'App',
  components: {
    MainPage
  }
})
</script>

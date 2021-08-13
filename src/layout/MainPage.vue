<template :class="{  }">
  <div>
    <Header name="Michał Romaszkin" />
    <div class="container mx-auto grid grid-cols-2">
      <div>
        <h2 class="text-6xl font-bold">Michał Romaszkin</h2>
      </div>
      <div>
        <p>Lorem ipsum coś tam coś tam</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '../components/Header/Header.vue'
import Footer from '../components/Footer/Footer.vue'

export default defineComponent({
  name: 'MainPage',
  components: {
    Header,
    Footer
  }
})
</script>

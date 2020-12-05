<template>
  <div
    id="index"
    class="d-flex align-items-center justify-content-center text-center"
    :style="{height: `${height}px`}"
  >
    <div>
      <Logo />
      <h1>sparkling-gecko</h1>
      <div>
        <b-button size="lg" variant="success">Sign up</b-button>&nbsp;
        <b-button size="lg" variant="primary" to="sessions/new">Login</b-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'no_header',
  data() {
    return {
      height: 0,
    }
  },
  created() {
    if (process.client) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.height = window.innerHeight
    },
  },
})
</script>

<style lang="scss" scoped>
#index {
  width: 100vw;
  height: 100vh;
}
</style>


<template>
  <div
    id="index"
    class="d-flex align-items-center justify-content-center text-center"
    :style="{ height: `${height}px` }"
  >
    <div>
      <Logo />
      <h1>sparkling-gecko</h1>
      <div v-if="isAuthenticated">
        <p>
          Welcome Back!
        </p>
        <b-button @click="logout" size="lg" variant="success">Logout</b-button>
      </div>
      <div v-else>
        <b-button size="lg" variant="success" to="users/new">Sign up</b-button
        >&nbsp;
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
      isAuthenticated: false,
    }
  },
  mounted() {
    // FIXME: vuex-persistedstateのlocalStorageからの読み出しが遅れる問題
    setTimeout(() => {
      this.isAuthenticated = this.$store.getters.isAuthenticated
    }, 0)
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.height = window.innerHeight
    },
    logout() {
      this.$axios.delete('/api/users').then((res) => {
        this.$store.commit('logout')
        this.$router.push('/sessions/new')
      });
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

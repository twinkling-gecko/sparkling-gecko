<template>
  <div id="sessions-new">
    <div class="text-center">
      <h1>welcome back, dear wild gecko.</h1>
      <Logo />
    </div>
    <div class="container my-2" style="max-width: 720px">
      <b-form @submit="onSubmit" @reset="onReset">
        <b-alert :show="error !== ''" variant="danger">
          {{ error }}
        </b-alert>
        <b-form-group label="email" label-for="email">
          <b-form-input
            id="email"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          />
        </b-form-group>
        <b-form-group label="password" label-for="password">
          <b-form-input
            id="password"
            v-model="form.password"
            type="password"
            required
            placeholder="Enter password"
          />
          <div class="text-right">
            <b-link>Forgot password?</b-link>
          </div>
        </b-form-group>
        <div class="text-center">
          <b-button type="submit" variant="primary" block>Login</b-button>
        </div>
      </b-form>
      <div class="text-center my-2">
        <p>
          New to Sparkling-Gecko?
          <b-link>Create account.</b-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      error: '',
    }
  },
  mounted() {
    setTimeout(() => {
      if (this.$store.getters.isAuthenticated) {
        this.$router.push('/dashboard')
      }
    }, 0)
  },
  methods: {
    onSubmit(event: Event) {
      event.preventDefault()

      this.$axios
        .post('/api/v1/sessions/new', this.form)
        .then(() => {
          this.$store.dispatch('fetchUser').then(() => {
            this.$router.push('/dashboard')
          })
        })
        // FIXME: 失敗したことをユーザーに通知
        .catch((err: Error) => {
          this.error = err.toString()
        })
    },

    onReset(event: Event) {
      event.preventDefault()

      this.form.email = ''
      this.form.password = ''
    },
  },
})
</script>

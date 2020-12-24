<template>
  <div id="sessions-new">
    <div class="text-center">
      <h1>welcome back, dear wild gecko.</h1>
      <Logo />
    </div>
    <div class="container my-2" style="max-width: 720px">
      <UserForm
        :form="form"
        :error="error"
        :on-submit="onSubmit"
        :on-reset="onReset"
        submit-text="Login"
      >
        <div class="text-right">
          <b-link>Forgot password?</b-link>
        </div>
      </UserForm>
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
  middleware: ['authenticated'],
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      error: '',
    }
  },
  methods: {
    onSubmit(event: Event) {
      event.preventDefault()

      this.$axios
        .post('/api/v1/sessions/new', this.form)
        .then(() => {
          this.$store.dispatch('fetchUser')
        })
        .then(() => {
          this.$router.push('/')
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

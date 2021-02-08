<template>
  <div id="sessions-new">
    <div class="text-center">
      <h1>Hello , Brand new world.</h1>
      <Logo />
    </div>
    <div class="container my-2" style="max-width: 720px">
      <SignupForm
        :form="form"
        :error="error"
        :on-submit="onSubmit"
        :on-reset="onReset"
        submit-text="Sign up"
      ></SignupForm>
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
        .post('/api/v1/users/new', this.form)
        .then(() => this.$axios.post('/api/v1/sessions/new', this.form))
        .then(() => this.$store.dispatch('fetchUser'))
        .then(() => this.$router.push('/'))
        .catch((err: Error) => (this.error = err.toString()))
    },

    onReset(event: Event) {
      event.preventDefault()

      this.form.email = ''
      this.form.password = ''
    },
  },
})
</script>

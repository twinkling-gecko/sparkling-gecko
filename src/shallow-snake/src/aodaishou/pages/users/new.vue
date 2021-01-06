<template>
  <div id="sessions-new">
    <div class="text-center">
      <h1>welcome back, dear wild gecko.</h1>
      <Logo />
    </div>
    <div class="container my-2" style="max-width: 720px">
      <SignupForm
        :form="form"
        :error="error"
        :on-submit="onSubmit"
        :on-reset="onReset"
        :validate-message="validateMessage"
        submit-text="Signup"
      ></SignupForm>
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
      validateMessage: [],
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
        .catch((err) => {
          if (err.response.data.validateError) {
            this.validateMessage = err.response.data
            this.error = "invalid property"
          } else {
            this.error = err.response.data.message
          }
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

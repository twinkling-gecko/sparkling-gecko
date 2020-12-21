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
        :onSubmit="onSubmit"
        :onReset="onReset"
        submitText="Signup"
      >
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
        .post('/api/v1/users/new', this.form)
        .then((user) => {
          console.log(user)
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

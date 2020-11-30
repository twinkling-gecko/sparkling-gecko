<template>
  <div id="sessions-new">
    <div class="text-center">
      <h1>welcome back, dear wild gecko.</h1>
    </div>
    <div class="container" style="max-width: 720px;">
      <b-form @submit="onSubmit" @reset="onReset">
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
    }
  },
})
</script>

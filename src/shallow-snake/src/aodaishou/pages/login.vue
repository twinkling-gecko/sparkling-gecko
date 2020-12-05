<template lang="pug">
  b-form(@submit.prevent='authenticate')
    b-input(type="email" name="email" required v-model="auth.email")
    b-input(type="password" name="password" required v-model="auth.password")
    b-button(type="submit") login
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  middleware: ['authenticated'],
  data() {
    return {
      auth: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    authenticate() {
      axios
        .post('/api/v1/sessions/login', this.auth)
        .then((res) => {
          this.$store.dispatch('fetchUser')
        })
        .then(() => {
          this.$router.push('/')
        })
        // FIXME: 失敗したことをユーザーに通知
        .catch(err => {})
    },
  },
})
</script>

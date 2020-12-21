<template>
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
      <slot />
    </b-form-group>
    <div class="text-center">
      <b-button type="submit" variant="primary" block>{{
        submitText
      }}</b-button>
    </div>
  </b-form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    submitText: {
      type: String,
      default: '',
    },
    form: {
      type: Object,
      default: () => ({
        email: '',
        password: '',
      }),
    },
    error: {
      type: String,
      default: '',
    },
    onSubmit: {
      type: Function,
      default: () => {
        return false
      },
    },
    onReset: {
      type: Function,
      default: () => {
        return
      },
    },
  },
})
</script>

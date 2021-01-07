<template>
  <b-form @submit="onSubmit" @reset="onReset">
    <b-alert :show="error !== ''" variant="danger">{{ error }}</b-alert>
    <b-form-group label="email" label-for="email">
      <b-form-input
        id="email"
        v-model="form.email"
        type="email"
        required
        placeholder="Enter email"
      />
      <b-form-invalid-feedback :state="!emailValidates">
        <div v-for="propertiesValidate in emailValidates">{{ propertiesValidate }}</div>
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group label="password" label-for="password">
      <b-form-input
        id="password"
        v-model="form.password"
        type="password"
        required
        placeholder="Enter password"
      />
      <b-form-invalid-feedback :state="isPasswordMatch">The password does not match.</b-form-invalid-feedback>
      <b-form-invalid-feedback :state="!passwordValidates">
        <div v-for="propertiesValidate in passwordValidates">{{ propertiesValidate }}</div>
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group label="password reconfirmation" label-for="reconfirmation">
      <b-form-input
        id="reconfirmation"
        v-model="reconfirmation"
        type="password"
        required
        placeholder="Enter password reconfirmation"
      />
      <b-form-invalid-feedback :state="isPasswordMatch">The password does not match.</b-form-invalid-feedback>
      <slot />
    </b-form-group>
    <div class="text-center">
      <b-button type="submit" variant="primary" :disabled="cannotSubmit" block>{{ submitText }}</b-button>
    </div>
  </b-form>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

type PropertyValidateError = {
  property: String
  constraints: {
    [type: string]: String
  }
}

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
    validateError: {
      type: Array as PropType<PropertyValidateError[]>,
      default: () => [{ property: '', constraints: {} }],
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
        return false
      },
    },
  },
  data() {
    return {
      reconfirmation: '',
    }
  },
  methods: {
    getPropValidateErrors(
      propertyName: string,
      validateError: PropertyValidateError[]
    ): String[] | undefined {
      for (const propValidateError of validateError) {
        if (propValidateError.property === propertyName) {
          return Object.entries(propValidateError.constraints).map(
            ([key, value]): String => value as String
          )
        }
      }
    },
  },
  computed: {
    isPasswordMatch(): boolean {
      // passwordとreconfirmationが一致する場合 or 空文字 => true
      return (
        this.form.password === this.reconfirmation || this.form.password === ''
      )
    },
    cannotSubmit(): boolean {
      // passwordとreconfirmationが一致する場合 & 空文字でない => true
      // emailはhtml5側で確認される
      return !(
        this.form.password === this.reconfirmation && this.form.password !== ''
      )
    },
    emailValidates(): String[] | undefined {
      return this.getPropValidateErrors('email', this.validateError)
    },
    passwordValidates(): String[] | undefined {
      return this.getPropValidateErrors('password', this.validateError)
    },
  },
})
</script>

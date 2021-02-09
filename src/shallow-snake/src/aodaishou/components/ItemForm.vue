<template>
  <b-form @submit="onSubmit" @reset="onReset">
    <b-form-group label="name" label-form="name">
      <b-form-input
        id="name"
        v-model="form.name"
        type="text"
        required
        placeholder="Enter item name"
      />
    </b-form-group>
    <b-form-group label="Image URL" label-form="Image URL">
      <b-form-input
        id="image-url"
        v-model="form.imageUrl"
        type="text"
        required
        placeholder="Enter Image URL"
      />
    </b-form-group>
    <div>
      <b-button type="submit" variant="primary" block>Add</b-button>
    </div>
  </b-form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    form: {
      type: Object,
      default: () => ({
        name: '',
        imageUrl: '',
      }),
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
})
</script>

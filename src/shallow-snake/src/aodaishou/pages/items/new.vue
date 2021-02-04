<template>
  <div class="container my-2" style="max-width: 720px">
    <ItemForm :form="form" :on-submit="onSubmit" :on-reset="onReset" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  middleware: ['loggedIn'],
  data() {
    return {
      form: {
        name: '',
        image_url: '',
      },
    }
  },
  methods: {
    onSubmit(event: Event) {
      event.preventDefault()
      this.$axios
        .post('/api/v1/items/new', this.form)
        .then(() => this.$router.push('/items'))
        .catch((err: Error) => console.log(err))
    },
    onReset(event: Event) {
      event.preventDefault()
      this.form.name = ''
      this.form.image_url = ''
    },
  },
})
</script>

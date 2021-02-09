<template>
  <div>
    <ItemForm :form="form" :on-submit="onSubmit" :on-reset="onReset" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    item: {
      type: Object,
      default: () => ({
        id: 0,
        name: '',
        imageUrl: '',
      }),
    },
  },
  data() {
    return {
      form: {
        name: '',
        imageUrl: '',
      },
    }
  },
  created() {
    this.formReset()
  },
  methods: {
    onSubmit(event: Event) {
      event.preventDefault()

      this.$axios
        .patch('/api/v1/items/' + this.item.id, this.form)
        .then(() => this.$router.push('/dashboard/items'))
        .catch(() => {})
    },
    onReset(event: Event) {
      event.preventDefault()
      this.formReset()
    },
    formReset() {
      this.form.name = this.item.name
      this.form.imageUrl = this.item.imageUrl
    },
  },
})
</script>

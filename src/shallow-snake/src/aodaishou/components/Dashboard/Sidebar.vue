<template>
  <div class="gecko-sidebar h-100">
    <b-button block :variant="buttonVariant('/dashboard')" to="/dashboard"
      >Dashboard</b-button
    >
    <b-button
      block
      :variant="buttonVariant('/dashboard/items')"
      to="/dashboard/items"
      >Items</b-button
    >
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  methods: {
    is_current_path(path) {
      return path === this.$route.path
    },
    buttonVariant(path) {
      return this.is_current_path(path) ? 'secondary' : 'outline-secondary'
    },
  },
})
</script>

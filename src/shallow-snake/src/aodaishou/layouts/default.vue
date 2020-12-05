<template>
  <div>
    <b-navbar type="dark" variant="primary" class="mb-4">
      <b-navbar-brand to="/"> sparkling-gecko </b-navbar-brand>
    </b-navbar>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Default',
})
</script>

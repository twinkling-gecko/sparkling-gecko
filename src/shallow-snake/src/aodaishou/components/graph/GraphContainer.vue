<template>
  <div class="graph-container">
    <b-card>
      <h2>{{ title }}</h2>
      <slot />
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="sass" scoped>
.graph-container
  max-width: 450px
  text-align: center
</style>

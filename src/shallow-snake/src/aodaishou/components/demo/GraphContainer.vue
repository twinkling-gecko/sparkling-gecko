<template lang="pug">
  .graph-container
    h2 {{title}}
    slot
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
>

<style lang="sass" scoped>
.graph-container
  border: 1px solid #444
  border-radius: 8px
  width: 600px
</style>

<template lang="pug">
.graph-container
  h2 {{ title }}
  slot.graph-content
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
  max-width: 800px
  text-align: center
  padding: 8px
  border: 1px solid #444
  border-radius: 8px
</style>

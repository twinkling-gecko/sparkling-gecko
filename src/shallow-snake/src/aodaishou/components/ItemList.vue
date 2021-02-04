<template>
  <div class="m-2">
    <div v-for="item in items" class="card-container mx-2">
      <ItemCard :item="item" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    items: Array,
    default: () => [],
  },
})
</script>

<style lang="sass" scoped>
.card-container
  max-width: 360px
  float: left
</style>

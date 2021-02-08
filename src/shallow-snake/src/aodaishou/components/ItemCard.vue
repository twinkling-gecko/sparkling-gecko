<template>
  <div>
    <b-card
      :title="item.name"
      :img-src="item.imageUrl"
      img-alt="Item image"
      img-top
    >
      <b-button href="/items" variant="primary">view</b-button>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    item: {
      type: Object,
      default: () => ({
        name: '',
        imageUrl: '',
      }),
    },
  },
})
</script>

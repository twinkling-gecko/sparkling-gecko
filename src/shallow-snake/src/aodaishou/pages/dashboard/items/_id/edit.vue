<template>
  <b-container>
    <b-row>
      <b-col sm="3" class="border-right">
        <Sidebar />
      </b-col>
      <b-col sm="9" width="100%">
        <h1>Item edit</h1>
        <ItemEditBoard :item="item" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $axios, params }) {
    const item = await $axios.$get(`/api/v1/items/${params.id}`)
    return { item }
  },
  data() {
    return {
      item: {
        id: 0,
        name: '',
        imageUrl: '',
      },
    }
  },
})
</script>

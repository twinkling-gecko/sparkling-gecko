<template>
  <b-container>
    <b-row>
      <b-col sm="3" class="border-right">
        <Sidebar />
      </b-col>
      <b-col sm="9" width="100%">
        <h1>Items</h1>
        <p class="lead">
          They are only expendable. They are destined to disappear. At the very
          least, I'll see them through.
        </p>
        <ItemRegisterModal class="text-right" />
        <ItemList :items="items" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  middleware: ['requireLogin'],
  async asyncData({ $axios }) {
    const items = await $axios.$get('/api/v1/items')

    return {
      items,
    }
  },
})
</script>

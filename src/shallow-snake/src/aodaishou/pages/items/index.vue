<template>
  <div>
    <b-button href="/items/new" variant="primary">Add item</b-button>
    <ItemList :items="items" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $axios }) {
    const items = await $axios.$get('/api/v1/items')
    return { items }
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'item1',
          imageUrl:
            'https://cdn.wikiwiki.jp/to/w/nijisanji/%E7%AB%9C%E8%83%86%E5%B0%8A/::ref/face.png?rev=a2c9e3f1de8f75c04278a071d2c9263c&t=20190717144820',
        },
        {
          id: 2,
          name: 'item2',
          imageUrl:
            'https://cdn.wikiwiki.jp/to/w/nijisanji/%E7%AB%9C%E8%83%86%E5%B0%8A/::ref/face.png?rev=a2c9e3f1de8f75c04278a071d2c9263c&t=20190717144820',
        },
      ],
    }
  },
})
</script>

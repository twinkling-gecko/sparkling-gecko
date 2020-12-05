<template lang="pug">
GraphContainer
  Graph
</template>

<script lang="ts">
import Vue from 'vue'
import GraphContainer from '@/components/demo/GraphContainer.vue'
import Graph from '@/components/demo/Graph.vue'

export default Vue.extend({
  layout: 'dashboard',
  components: {
    Graph,
  },
})
</script>

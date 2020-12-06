<template lang="pug">
GraphContainer(title='残量')
  LineGraph
</template>

<script lang="ts">
import Vue from 'vue'
import GraphContainer from '@/components/demo/GraphContainer.vue'
import LineGraph from '@/components/demo/LineGraph.vue'

export default Vue.extend({
  layout: 'dashboard',
  components: {
    LineGraph,
  },
})
</script>

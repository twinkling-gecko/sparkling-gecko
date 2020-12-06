<template lang="pug">
GraphContainer(title='消費量')
  Graph(:heigth='600', :width='600')
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

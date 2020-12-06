<template lang="pug">
GraphContainer(title='残量')
  GraphDetergent(:height='600', :width='600')
</template>

<script lang="ts">
import Vue from 'vue'
import GraphContainer from '@/components/demo/GraphContainer.vue'
import GraphDetergent from '@/components/demo/GraphDetergent.vue'

export default Vue.extend({
  layout: 'dashboard',
  components: {
    GraphDetergent,
  },
})
</script>

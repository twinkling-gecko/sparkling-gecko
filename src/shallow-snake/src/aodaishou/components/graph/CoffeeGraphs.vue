<template lang="pug">
div
  b-container
    b-row.mb-4
      div(v-for='(graphInfo, index) in graphInfos' :key='index')
        b-col.mb-4
          GraphContainer(:title='graphInfo.title')
            transition(name='fade')
              CoffeeRemainGraph(:chartData='graphInfo.data', :options='graphInfo.options' :heigth='300')
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'dashboard',
  props: ['graphInfos'],
})
</script>

<template>
  <div id="devide-graphs">
    <input id="visible-checkbox" type="checkbox" v-model="visible" />
    <label @click="show">{{ device.name }}</label>
    <transition name="slide">
      <div v-show="visible">
        <CoffeeGraphs :graphInfos="device.graphInfos" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CoffeeGraphs from '@/components/graph/CoffeeGraphs.vue'

export default Vue.extend({
  components: {
    CoffeeGraphs,
  },
  props: ['device'],
  data() {
    return {
      visible: true,
    }
  },
  methods: {
    show() {
      this.visible = !this.visible
    },
  },
})
</script>

<style lang="sass" scoped>
#visible-checkbox
  display: none
</style>

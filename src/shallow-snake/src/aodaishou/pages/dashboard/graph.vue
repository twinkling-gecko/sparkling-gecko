<template>
  <div id="graph">
    <b-container>
      <h1>Statistic Graph</h1>
      <b-row v-for="(device, index) in devices" :key="index">
        <DeviceGraphs :device="device" />
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DeviceGraphs from '@/components/DeviceGraphs.vue'
import device1 from '@/assets/device1'
import device2 from '@/assets/device2'
import device3 from '@/assets/device3'

export default Vue.extend({
  components: {
    DeviceGraphs,
  },
  transition: 'fade',
  data() {
    return {
      devices: [device1, device2, device3],
    }
  },
})
</script>

<template>
  <div class="m-2">
    <div v-for="item in items" :key="item.id" class="card-container mx-2 my-1">
      <ItemCard :item="item" :sensor="asignedSensor(item.id)" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Sensor from '@/assets/sensor'
export default Vue.extend({
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    asignedSensor: (id: number) => {
      const sensor = Sensor.filter((sensor) => {
        return sensor.id === id
      })
      return sensor[0]
    },
  },
})
</script>

<style lang="sass" scoped>
.card-container
  float: left
</style>

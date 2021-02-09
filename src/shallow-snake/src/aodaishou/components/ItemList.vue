<template>
  <div class="m-2">
    <b-card-group v-for="item in items" :key="item.id" deck>
      <ItemCard :item="item" :sensor="asignedSensor(item.id)" />
    </b-card-group>
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

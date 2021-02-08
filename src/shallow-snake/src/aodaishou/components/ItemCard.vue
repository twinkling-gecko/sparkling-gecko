<template>
  <b-card
    class="card-container align-items-center"
    :sub-title="item.name"
    :img-src="item.imageUrl"
    img-width="150"
    img-height="150"
    img-left
  >
    <b-card-text class="sensor-text">
      <b-icon
        class="status-icon mr-2 mt-1 text-center"
        icon="exclamation-circle-fill"
        :variant="isActive"
      ></b-icon>
      Sensor: {{ sensor.name }}
    </b-card-text>
    <b-card-text class="sensor-text">
      Interval: {{ sensor.interval }}
    </b-card-text>
    <b-button href="/items" variant="primary">Edit</b-button>
  </b-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    item: {
      type: Object,
      default: () => ({
        name: '',
        imageUrl: '',
      }),
    },
    sensor: {
      type: Object,
      default: () => ({
        name: 'null',
        interval: '1s',
        status: 'inactive',
      }),
    },
  },
  computed: {
    isActive(): string {
      return this.sensor.status !== 'active' ? 'danger' : 'success'
    },
  },
})
</script>

<style lang="sass" scoped>
.card-container
  width: 360px
  min-height: 240px
.sensor-text
  color: #95a5a6
.status-icon
  float: left
</style>

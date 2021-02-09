<template>
  <b-card
    class="align-items-center my-2 mx-2"
    img-height="240"
    img-width="240"
    :sub-title="item.name"
    :img-src="item.imageUrl"
    img-left
  >
    <b-card-text class="sensor-text">
      <b-icon
        class="status-icon text-center"
        icon="exclamation-circle-fill"
        :variant="isActive"
      ></b-icon>
      Sensor: {{ sensor.name }}
    </b-card-text>
    <b-card-text class="sensor-text">
      Interval: {{ sensor.interval }}
    </b-card-text>
    <b-link :to="`/dashboard/items/${item.id}/edit`" variant="primary">
      Edit
    </b-link>
  </b-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    item: {
      type: Object,
      default: () => ({
        id: 0,
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
.sensor-text
  color: #95a5a6
.status-icon
  float: left
</style>

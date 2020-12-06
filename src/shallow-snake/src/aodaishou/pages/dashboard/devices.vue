<template>
  <div id="devices">
    <b-container>
      <h1>Devices management</h1>
      <div class="my-2">
        <b-button variant="primary">Register new Deveice</b-button>
      </div>
      <b-table :items="devices">
        <template v-slot:cell(name)="data">
          <a href="#">{{ data.item.name }}</a>
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  transition: 'fade',
  data() {
    return {
      devices: [
        {
          name: 'Device 1',
          target: 'Beefeater Gin',
          category: 'drink',
          latest: '380g',
          createdAt: '2020-12-06 21:20',
        },
        {
          name: 'Device 2',
          target: 'NESCAFE ゴールドブレンドスティック',
          category: 'drink',
          latest: '180g',
          createdAt: '2020-10-14 13:49',
        },
        {
          name: 'Device 3',
          target: 'スーパーNANOX',
          category: 'amenity',
          latest: '720g',
          createdAt: '2020-11-22 08:14',
        },
        {
          name: 'Device 4',
          target: 'Beefeater Gin',
          category: 'drink',
          latest: '380g',
          createdAt: '2020-12-01 00:20',
        },
        {
          name: 'Device 5',
          target: 'NESCAFE ゴールドブレンドスティック',
          category: 'drink',
          latest: '180g',
          createdAt: '2020-09-22 14:58',
        },
        {
          name: 'Device 6',
          target: 'スーパーNANOX',
          category: 'amenity',
          latest: '720g',
          createdAt: '2020-01-01 00:48',
        },
      ],
    }
  },
})
</script>

<template>
  <b-container>
    <h1>Dashboard</h1>
    <b-row>
      <b-col
        v-for="device in devices"
        :key="device.id"
        cols="4"
        sm="12"
        md="6"
        lg="4"
        class="my-2"
      >
        <b-card
          :title="device.target"
          :sub-title="device.name"
          :footer="`latest: ${device.latest}`"
          :img-src="device.image"
          class="mb-2"
          img-top
        >
          <b-card-text>
            <div class="my-2">
              <b-button>Detail</b-button>
            </div>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
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
          image:
            'https://cdn.discordapp.com/attachments/672180722684919814/785119018491052042/IMG_20201206_210612.jpg',
        },
        {
          name: 'Device 2',
          target: 'NESCAFE ゴールドブレンドスティック',
          category: 'amenity',
          latest: '180g',
          image:
            'https://cdn.discordapp.com/attachments/672180722684919814/785119032738447376/IMG_20201206_210631.jpg',
        },
        {
          name: 'Device 3',
          target: 'スーパーNANOX',
          category: 'drink',
          latest: '720g',
          image:
            'https://cdn.discordapp.com/attachments/672180722684919814/785119046072664064/IMG_20201206_210650.jpg',
        },
        {
          name: 'Device 4',
          target: 'Beefeater Gin',
          category: 'drink',
          latest: '380g',
          image:
            'https://cdn.discordapp.com/attachments/672180722684919814/785119018491052042/IMG_20201206_210612.jpg',
        },
        {
          name: 'Device 5',
          target: 'NESCAFE ゴールドブレンドスティック',
          category: 'amenity',
          latest: '180g',
          image:
            'https://cdn.discordapp.com/attachments/672180722684919814/785119032738447376/IMG_20201206_210631.jpg',
        },
        {
          name: 'Device 6',
          target: 'スーパーNANOX',
          category: 'drink',
          latest: '720g',
          image:
            'https://cdn.discordapp.com/attachments/672180722684919814/785119046072664064/IMG_20201206_210650.jpg',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.card-title {
  white-space: nowrap;
  overflow: scroll;
}
</style>

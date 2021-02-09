<template>
  <b-card :img-src="item.imageUrl" img-width="150" img-height="150" img-left>
    <b-card-title class="h6">
      <nuxt-link to="#">{{ item.name }}</nuxt-link>
    </b-card-title>
    <!-- vue-chartjsのmixinsがこれで定義されているので除外するしか無い -->
    <!-- eslint-disable vue/attribute-hyphenation -->
    <b-card-text>
      <LineChart :chartData="chartdata" :options="options" :height="72" />
    </b-card-text>
  </b-card>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    item: {
      type: Object,
      require: true,
      default: () => {
        return {
          name: '',
          imageUrl: '',
        }
      },
    },
  },
  data() {
    return {
      chartdata: {
        labels: [],
        datasets: [],
      },
      options: {
        height: 100,
        elements: {
          point: {
            radius: 0,
          },
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                display: false,
                beginAtZero: true,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                display: false,
              },
            },
          ],
        },
      },
    }
  },
  mounted() {
    this.fetchItemValues()
  },
  methods: {
    async fetchItemValues() {
      const itemValues = await this.$axios.$get(
        `/api/v1/item_values/${this.item.id}`
      )

      const labels = []
      const data = []
      itemValues.forEach((itemValue) => {
        labels.push(itemValues.observedAt)
        data.push(itemValue.value)
      })

      this.chartdata = {
        labels,
        datasets: [
          {
            backgroundColor: '#18bc9c',
            data,
          },
        ],
      }
    },
  },
})
</script>

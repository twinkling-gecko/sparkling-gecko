<template>
  <b-container>
    <b-row>
      <b-col sm="3" class="border-right">
        <Sidebar />
      </b-col>
      <b-col sm="9" width="100%">
        <h1>Sensors</h1>
        <p class="lead">
          Beep, beep. I'll keep an eye on the items. I'll let you know if I run
          out! But I've left you in charge of us.
        </p>
        <div class="my-4">
          <div class="text-right">
            <b-button>New Sensor</b-button>
          </div>
          <b-card v-for="sensor in sensors" :key="sensor.id" class="my-2">
            <b-card-title>
              <b-icon
                v-if="sensor.status === 'active'"
                icon="exclamation-circle-fill"
                variant="success"
              ></b-icon>
              <b-icon
                v-else
                icon="exclamation-circle-fill"
                variant="danger"
              ></b-icon>
              {{ sensor.name }}
            </b-card-title>
            <b-text>
              <div class="my-2">
                <b-alert
                  v-if="sensor.status !== 'active'"
                  show
                  variant="danger"
                >
                  Unable to connect to sensor "zyuryo7"! Where and what is that
                  girl doing now...
                </b-alert>
                <div class="text-right">
                  <b-button>Edit</b-button>
                </div>
              </div>
              <div class="my-2">
                <h3 class="h6">
                  <b-icon icon="clipboard-data" />
                  Item
                </h3>
                <nuxt-link to="#">{{ sensor.item }}</nuxt-link>
              </div>
              <div class="my-2">
                <h3 class="h6">
                  <b-icon icon="battery" />
                  Battery
                </h3>
                <b-progress
                  :value="sensor.battery"
                  max="100"
                  variant="warning"
                  show-progress
                />
              </div>
              <div class="my-2">
                <h3 class="h6">
                  <b-icon icon="clock" />
                  interval
                </h3>
                > {{ sensor.interval }}
              </div>
            </b-text>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Vue from 'vue'
import sensors from 'assets/sensor.ts'

export default Vue.extend({
  layout: 'default',
  middleware: ['requireLogin'],
  async asyncData({ $axios }) {
    const items = await $axios.$get('/api/v1/items')

    return {
      items,
      sensors,
    }
  },
})
</script>

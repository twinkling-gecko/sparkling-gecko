<template>
  <b-container>
    <b-row>
      <b-col sm="3" class="border-right">
        <Sidebar />
      </b-col>
      <b-col sm="9" width="100%">
        <h1>DashBoard</h1>
        <p class="lead">Welcome home! How was your day?</p>
        <div class="my-4">
          <h2>Top Notifications</h2>
          <div class="text-right">
            <nuxt-link to="/dashboard/notifications"
              >Show All Notifications</nuxt-link
            >
          </div>
          <div class="my-2">
            <b-alert show variant="warning">
              <h4 class="alert-heading">
                <b-icon icon="emoji-dizzy" />
                Stressfull?
              </h4>
              <p>
                I seem to have been drinking more coffee than usual this week.
                How can you do without caffeine? Too much caffeine can prevent
                you from getting a deep sleep and affect your daytime
                activities.
                <br />I know that coffee is the best way to moderately refresh
                yourself, but let's consider other ways to rest.
              </p>
            </b-alert>
            <b-alert show variant="info">
              <h4 class="alert-heading">
                <b-icon icon="bag-plus" />
                Is the order a "アリエール イオンパワージェル サイエンスプラス
                1.0kg"?
              </h4>
              <p>
                I'm about to run out of "アリエール イオンパワージェル
                サイエンスプラス 1.0kg"! It's been about a month since my last
                purchase. My prediction is that I will run out in another
                week.<br />
                Do you want to run to the store on a rainy day in a panic after
                it's gone?
              </p>
            </b-alert>
          </div>
        </div>
        <div class="my-4">
          <h2>Recent Items</h2>
          <div class="text-right">
            <nuxt-link to="/dashboard/items">Show All Items</nuxt-link>
          </div>
          <ItemSummary
            v-for="item in items"
            :key="item.id"
            :item="item"
            class="my-2"
          />
        </div>
        <div class="my-4">
          <h2>Sensors status</h2>
          <div class="text-right">
            <nuxt-link to="/dashboard/sensors">Show All Sensors</nuxt-link>
          </div>
          <div class="my-2">
            <b-card>
              <b-card-title>
                <b-icon
                  icon="exclamation-circle-fill"
                  variant="danger"
                ></b-icon>
                zyuryo7
              </b-card-title>
              <b-card-text>
                <div class="my-2">
                  <b-alert show variant="danger">
                    Unable to connect to sensor "zyuryo7"! Where and what is
                    that girl doing now...
                  </b-alert>
                </div>
                <div class="my-2">
                  <h3 class="h6">
                    <b-icon icon="clipboard-data" />
                    Item
                  </h3>
                  <nuxt-link to="#">ネスカフェ ゴールドブレンド 120g</nuxt-link>
                </div>
                <div class="my-2">
                  <h3 class="h6">
                    <b-icon icon="battery" />
                    Battery
                  </h3>
                  <b-progress
                    value="0"
                    max="100"
                    variant="danger"
                    show-progress
                  />
                </div>
              </b-card-text>
            </b-card>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  middleware: ['requireLogin'],
  async asyncData({ $axios }) {
    const items = await $axios.$get('/api/v1/items')

    return {
      items: items.slice(0, 3),
    }
  },
})
</script>

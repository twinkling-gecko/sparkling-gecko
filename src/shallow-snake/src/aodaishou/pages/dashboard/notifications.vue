<template>
  <b-container>
    <b-row>
      <b-col sm="3" class="border-right">
        <Sidebar />
      </b-col>
      <b-col sm="9" width="100%">
        <h1>Notifications</h1>
        <p class="lead">
          Let's listen to the voices from the items here. Can you hear me? They
          are talking you...
        </p>
        <div class="my-4">
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
              <div class="text-right">
                <b-button variant="light">Show Item</b-button>
                <b-button variant="light">Resolved</b-button>
              </div>
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
              <div class="text-right">
                <b-button variant="light">Show Item</b-button>
                <b-button variant="light">Resolved</b-button>
              </div>
            </b-alert>
            <b-alert show variant="danger">
              <h4 class="alert-heading">
                <b-icon icon="bag-plus" />
                Copy?! Copy?! I can't seem to...
              </h4>
              <p>
                Unable to connect to sensor "zyuryo7"! Where and what is that
                girl doing now... Maybe the sensors aren't getting a signal?
                Maybe it's not turned on?<br />
                Maybe it's broken... Anyway, let's go.
              </p>
              <div class="text-right">
                <b-button variant="light">Show Sensor</b-button>
                <b-button variant="light">Resolved</b-button>
              </div>
            </b-alert>
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

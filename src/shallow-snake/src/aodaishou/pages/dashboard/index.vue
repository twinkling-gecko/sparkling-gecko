<template>
  <b-container>
    <b-row>
      <b-col sm="3" class="border-right">
        <Sidebar />
      </b-col>
      <b-col sm="9" width="100%">
        <h1>DashBoard</h1>
        <div class="my-4">
          <h2>Top Notifications</h2>
          <div class="text-right">
            <nuxt-link to="#">Show All Notifications</nuxt-link>
          </div>
          <b-alert show variant="warning">
            <h4 class="alert-heading">
              <b-icon icon="emoji-dizzy" />
              Stressfull?
            </h4>
            <p>
              I seem to have been drinking more coffee than usual this week. How
              can you do without caffeine? Too much caffeine can prevent you
              from getting a deep sleep and affect your daytime activities.
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
              purchase. My prediction is that I will run out in another week.<br />
              Do you want to run to the store on a rainy day in a panic after
              it's gone?
            </p>
          </b-alert>
        </div>
        <div class="my-4">
          <h2>Recent Items</h2>
          <div class="text-right">
            <nuxt-link to="#">Show All Items</nuxt-link>
          </div>
          <ItemSummary
            v-for="item in items"
            :key="item.id"
            :item="item"
            class="my-2"
          />
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

<template lang="pug">
  b-container#container(fluid)
    b-row#content
      b-col.sidebar-container
        Sidebar
      b-col(cols="10")
        Nuxt
</template>

<script lang="ts">
import Vue from 'vue'
import Sidebar from '@/components/Sidebar.vue'

export default Vue.extend({
  components: {
    Sidebar,
  },
})
</script>

<style lang="sass">
html, body, #__nuxt, #__layout, #container
  height: 100%

#content
  height: 100%

.sidebar-container
  height: 100%
  width: 200px
  border-right: 1px solid #222
</style>

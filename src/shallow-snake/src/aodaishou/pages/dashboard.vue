<template>
  <div id="dashboard">
    <b-container fluid>
      <b-row>
        <b-col cols="3">
          <b-list-group>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
              to="/dashboard"
            >
              Dashboard
              <span class="badge badge-primary badge-pill">14</span>
            </b-list-group-item>
            <b-list-group-item to="/dashboard/graph"
              >Statistic Graph</b-list-group-item
            >
            <b-list-group-item to="/dashboard/devices"
              >Devices management</b-list-group-item
            >
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
              to="/dashboard"
            >
              Promotion
              <span class="badge badge-primary badge-pill">99</span>
            </b-list-group-item>
            <b-list-group-item to="/dashboard/preferences"
              >Preferences</b-list-group-item
            >
          </b-list-group>
        </b-col>
        <b-col cols="9">
          <NuxtChild />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  middleware: ['authenticate'],
})
</script>

<template>
  <div id="preferences">
    <b-container>
      <h1>Preferences</h1>

      <div>
        <h2>User info</h2>
        <b-table stacked :items="[user]"> </b-table>

        <h3>Change password</h3>
        <b-form>
          <b-form-group label="New password" label-for="password">
            <b-form-input
              id="password"
              type="password"
              placeholder="Enter new password"
            />
          </b-form-group>
          <b-form-group label="Retype password" label-for="confirmPassword">
            <b-form-input
              id="confrimPassword"
              type="password"
              placeholder="Retype password"
            />
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  transition: 'fade',
  data() {
    return {
      user: { email: '' },
    }
  },
  mounted() {
    setTimeout(() => {
      this.user.email = this.$store.getters.loginUser.email
    }, 0)
  },
})
</script>

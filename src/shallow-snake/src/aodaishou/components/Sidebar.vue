<template lang="pug">
  b-nav(vertical class="w-75")
    b-nav-item.nav-text(active to="/demo/coffee") コーヒー
    b-nav-item.nav-text(to="/demo/liquor") 酒
    b-nav-item.nav-text(to="/demo/detergent") 洗剤
</template>

<style lang="sass" scoped>
.nav-text
  a
    color: #444 !important
</style>

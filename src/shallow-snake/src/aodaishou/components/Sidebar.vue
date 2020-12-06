<template lang="pug">
b-nav.w-75(vertical)
  b-nav-item.nav-text(to='/demo/coffee') コーヒー
  b-nav-item.nav-text(to='/demo/liquor') 酒
  b-nav-item.nav-text(to='/demo/detergent') 洗剤
</template>

<style lang="sass" scoped>
.nav-text
  a
    color: #444
    &:hover, &:active
      color: #18bc9c
</style>

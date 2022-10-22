<template>
  <div class="home-logo-content">
    <div class="logo-image" />
  </div>
</template>

<script>

import logoImage from '../../../assets/login.png'

export default {
  name: 'HomeLogo',
  data() {
    return {
      logoImage
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
.home-logo-content {
  text-align: left;
}

.logo-image {
  width: 200px;
  height: 60px;
  background-image: url('../../../assets/login.png');
  background-position: center;
  background-size: 200px 100px;
}
</style>

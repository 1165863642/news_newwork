<template>
  <div class="home-logo-content">
    <div class="logo-image" @click="toHomePage" />
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
    toHomePage() {
      // 打开新闻详情页面
      window.open(`/#/WebHome`, `T=${new Date().getTime()}`)
    }
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
  cursor: pointer;
}
</style>

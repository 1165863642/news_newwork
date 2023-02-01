<template>
  <div class="home-login">
    <div class="username">您好！***欢迎访问！</div>
    <div class="login-bnt">登录</div>
    <Login />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Login from './Login.vue'
export default {
  name: 'HomeLogo',
  components: { Login },
  data() {
    return {
    }
  },

  watch: {
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="scss">
@import "../../../mian.scss";

.home-login {
  background-color: rgba($color: #c4c4c4, $alpha: 0.1);
  height: 20px;
  line-height: 20px;
  display: flex;
  justify-content: flex-end;
  padding: 0 10px;

  .username {
    margin: 0 0 0 20px;
    color: $main-color;
  }

  .login-bnt {
    color: $main-color;
    margin: 0 0 0 20px;
    cursor: pointer;
  }
}
</style>

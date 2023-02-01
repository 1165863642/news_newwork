<template>
  <div class="home-login">
    <div class="username" v-if="userInfo">{{ userInfo.nickName }},您好!欢迎访问！</div>
    <div class="login-bnt" @click="logout" v-if="userInfo">退出</div>
    <div class="login-bnt" @click="showLoginDialog" v-else>登录</div>
    <Login />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Login from './Login.vue'
import { removeToken } from '@/homepage/api/auth'
export default {
  name: 'HomeLogin',
  components: { Login },
  data() {
    return {
    }
  },
  watch: {
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    showLoginDialog() {
      this.$store.commit("setLoginDialogVisible", true);
    },
    logout() {
      removeToken();
      this.$store.commit("setToken", "");
    }
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

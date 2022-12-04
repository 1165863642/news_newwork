<template>
  <div class="home-main">
    <el-container>
      <el-header>
        <div class="horizontal-center">
          <Home-Logo />
        </div>
      </el-header>
      <el-main>
        <div class="navigation-bar">
          <el-row class="horizontal-center">
            <el-col v-for="(item) in navigationBarList" :key="item.id" :span="3" @click.native="goPageModule(item.id)">
              <div class="navigation-bar-item">{{ item.title }}</div>
            </el-col>
          </el-row>
        </div>
        <div class="horizontal-center" style="background-color: #fff;">
          <router-view />
        </div>
      </el-main>
      <!-- 底部备案内容 -->
      <!-- <el-footer>
        <div class="horizontal-center" />
      </el-footer> -->
    </el-container>
  </div>

</template>

<script>

import HomeLogo from './components/HomeLogo'

export default {
  name: 'Home',
  components: { HomeLogo },
  data() {
    return {
      navigationBarList: [
        {
          id: 'WebHome',
          title: '网站首页'
        },
        {
          id: 'journaLism/GrassRoots',
          title: '基层视窗'
        },
        {
          id: 'journaLism/Characteristic',
          title: '特色栏目'
        },
        {
          id: 'journaLism/OnlineSupport',
          title: '在线服务'
        },
        {
          id: 'journaLism/JobInstruction',
          title: '工作指导'
        },
        {
          id: 'journaLism/CorporationCulture',
          title: '信保文化'
        },
        {
          id: 'journalism/TravelPlatform',
          title: '旅务平台'
        },
        {
          id: 'leaveWord',
          title: '留言'
        }
      ]
    }
  },
  methods: {
    goPageModule(moduleId) {
      this.$router.push(`/${moduleId}`)
    }
  }
}
</script>

<style lang="scss">
.home-main {
  background-image: url('../../assets/home-back.jpg');
  background-position: top center;
  background-repeat: no-repeat;
}

.el-header,
.el-footer {
  background-color: #e42a0f;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.home-main {
  .el-main {
    padding: 0;
  }
}

.horizontal-center {
  width: 1440px;
  margin: 0 auto;
}

.navigation-bar {
  // background-color: #ffcb7d;

  .navigation-bar-item {
    background-color: #ffcb7d;
    color: #8f3024;
    text-align: center;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    border: #8f3024 1px solid;
    font-weight: 500;
  }
}
</style>

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
          <div id="WebHome">
            <WebHome />
          </div>
          <div id="GrassRoots">
            <GrassRoots />
          </div>
          <div id="Characteristic">
            <Characteristic />
          </div>
          <div id="OnlineSupport">
            <OnlineSupport />
          </div>
          <div id="JobInstruction">
            <JobInstruction />
          </div>
          <div id="CorporationCulture">
            <CorporationCulture />
          </div>
          <div id="TravelPlatform">
            <TravelPlatform />
          </div>
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
import WebHome from '../WebHome/index'
import GrassRoots from '../GrassRoots/index'
import Characteristic from '../Characteristic/index'
import OnlineSupport from '../OnlineSupport/index'
import JobInstruction from '../JobInstruction/index'
import CorporationCulture from '../CorporationCulture/index'
import TravelPlatform from '../TravelPlatform/index'

export default {
  name: 'Home',
  components: { HomeLogo, WebHome, GrassRoots, Characteristic, OnlineSupport, JobInstruction, CorporationCulture, TravelPlatform },
  data() {
    return {
      navigationBarList: [
        {
          id: 'WebHome',
          title: '网站首页'
        },
        {
          id: 'GrassRoots',
          title: '基层视窗'
        },
        {
          id: 'Characteristic',
          title: '特色栏目'
        },
        {
          id: 'OnlineSupport',
          title: '在线服务'
        },
        {
          id: 'JobInstruction',
          title: '工作指导'
        },
        {
          id: 'CorporationCulture',
          title: '信保文化'
        },
        {
          id: 'TravelPlatform',
          title: '旅务平台'
        },
        {
          id: 'rests',
          title: '其他'
        }
      ]
    }
  },
  methods: {
    goPageModule(moduleId) {
      document.getElementById(moduleId).scrollIntoView({ behavior: 'smooth' })
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
  background-color: #ffcb7d;

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

<template>
  <div v-loading="loading" class="home-main">
    <el-container style="height: 100%;">
      <el-header height="127px">
        <div class="horizontal-center">
          <!-- <Home-Login /> -->
          <Home-Logo />
        </div>
      </el-header>
      <el-main :style="defaultHeight">
        <div style="display: flex;flex-direction:column;height: 100%;position: relative;">
          <div class="navigation-bar" style="position:sticky;top:0;z-index: 10;">
            <!-- <el-row class="horizontal-center">
              <el-col v-for="(item) in navigationBarList" :key="item.id" :span="3"
                @click.native="goPageModule(item.id)">
                <div class="navigation-bar-item">{{ item.title }}</div>
              </el-col>
            </el-row> -->
            <div class="horizontal-center navigation-chunk">
              <div v-for="(item) in navigationBarList" :key="item.id" class="navigation-item"
                @click="goPageModule(item.id)">
                <div class="navigation-bar-item">{{ item.title }}</div>
              </div>
            </div>
          </div>
          <div class="horizontal-center" style="background-color: #fff;flex: 1;overflow-y: auto;">
            <router-view />
          </div>
        </div>

      </el-main>
      <!-- 底部备案内容 -->
      <!-- <el-footer>
        <div class="horizontal-center">

        </div>
      </el-footer> -->
    </el-container>
  </div>
</template>

<script>

import HomeLogo from './components/HomeLogo'
import HomeLogin from './components/HomeLogin'
import { getHome, toJournaDetailPage } from '@/homepage/api/newsType'
import { getToken } from '@/homepage/api/auth'
import { mapGetters } from 'vuex';
export default {
  name: 'Home',
  components: { HomeLogo, HomeLogin },
  data() {
    return {
      navigationBarList: [
        {
          id: 'WebHome',
          title: '网站首页'
        },
        {
          id: 'journaLism/基层视窗',
          title: '基层视窗'
        },
        {
          id: 'journaLism/特色栏目',
          title: '特色栏目'
        },
        {
          id: 'journaLism/在线服务',
          title: '在线服务'
        },
        {
          id: 'journaLism/工作指导',
          title: '工作指导'
        },
        {
          id: 'journaLism/信保文化',
          title: '信保文化'
        },
        {
          id: 'journalism/旅务平台',
          title: '旅务平台'
        },
        {
          id: 'leaveWord',
          title: '留言'
        }
      ],
      defaultHeight: {
        height: ''
      },
      loading: false
    }
  },
  created() {
    this.init()
    // 页面创建时执行一次getHeight进行赋值，顺道绑定resize事件
    window.addEventListener('resize', this.getHeight)
    this.getHeight()
    const token = getToken();
    console.log("token", token);
    if (token) {
      this.$store.commit("setToken", token);
    }
  },
  computed: {
    ...mapGetters(['mailboxDddress']),
  },
  methods: {
    async init() {

      this.loading = true
      const { code, data, msg } = await getHome()
      this.loading = false
      if (code !== 200) {
        this.$message.error(msg)
      } else {
        const { other = [], parentType = [], top = [] } = data
        this.$store.commit("setOther", other)
        this.$store.commit("setTop", top)
        this.navigationBarList = [{
          id: 'WebHome',
          title: '网站首页'
        },
        ...parentType.slice(0, 5).map((item) => {
          return {
            id: `journaLism/${item.label}`,
            title: item.label
          }
        }),
        {
          id: 'leaveWord',
          title: '留言'
        }
        ]
      }
    },
    goPageModule(moduleId) {
      if (moduleId != "leaveWord") {
        this.$router.push(`/${moduleId}`)
      } else {
        console.log("this.mailboxDddress", this.mailboxDddress)
        toJournaDetailPage(this.mailboxDddress);
      }
    },
    // 定义方法，获取高度减去头尾
    getHeight() {
      this.defaultHeight.height = window.innerHeight - 120 + 'px'
    }
  }
}
</script>

<style lang="scss">
.sticky {
  position: sticky;
  position: -webkit-sticky;
  top: 0;

}

.home-main {
  background-color: rgba($color: #eee, $alpha: 0.5);
  background-position: top center;
  background-repeat: no-repeat;
  height: 100%;
}

.el-header {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

$horizontal-width: 1440px;
$main-color: #3a523d;

.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
  background-color: #fff;
  width: $horizontal-width;
  margin: 0 auto;
}

.home-main {
  .el-main {
    padding: 0;
  }
}



.horizontal-center {
  width: $horizontal-width;
  margin: 0 auto;
}

.navigation-bar {
  // background-color: #ffcb7d;
  height: 45px;

  .navigation-bar-item {
    background-color: $main-color;
    color: #fff;
    text-align: center;
    font-size: 20px;
    line-height: 45px;
    height: 45px;
    cursor: pointer;
    font-weight: 1000;
  }
}

.navigation-chunk {
  display: flex;

  .navigation-item {
    flex: 1;
  }
}
</style>

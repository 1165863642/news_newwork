<template>
  <div>
    <el-divider content-positio="center"> 基层视窗 </el-divider>

    <el-tabs v-model="navigationBar.activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item) in navigationBar.list" :key="item.key" :label="item.title" :name="item.key" />
    </el-tabs>
    <div>
      <el-row :gutter="20">
        <el-col :span="5">
          <img :src="slideshow1" class="image-info">
        </el-col>
        <el-col :span="5">
          <img :src="slideshow2" class="image-info">
        </el-col>
        <el-col :span="5">
          <img :src="slideshow3" class="image-info">
        </el-col>
        <el-col :span="9">
          <div class="news-list">
            <div v-for="(item, index) in staffData" :key="index">
              <a :href="item.href" target="_blank">{{ item.name }}</a>
            </div>
          </div>

        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import slideshow1 from '../../../../assets/slideshow/slideshow1.jpeg'
import slideshow2 from '../../../../assets/slideshow/slideshow2.jpeg'
import slideshow3 from '../../../../assets/slideshow/slideshow3.jpeg'

export default {
  name: 'GrassRoots',
  data() {
    return {
      navigationBar: {
        activeName: 'key1',
        list: [{
          key: 'key1',
          title: '全部新闻'
        }, {
          key: 'key2',
          title: '指挥控制营'
        }, {
          key: 'key3',
          title: '机动通信一营'
        }, {
          key: 'key4',
          title: '机动通信二营'
        }, {
          key: 'key5',
          title: '通信值班营'
        }, {
          key: 'key6',
          title: '勤务保障营'
        }, {
          key: 'key7',
          title: '卫星通信地球站'
        }, {
          key: 'key8',
          title: '网络护卫对'
        }]
      },
      slideshow1,
      slideshow2,
      slideshow3,
      staffData: [
        {
          href: 'http://www.81.cn/yw/2022-10/22/content_10194144.htm',
          name: '解放军和武警部队代表团代表持续热烈讨论党的二十大报告'
        },
        {
          href: 'http://www.81.cn/yw/2022-10/22/content_10194148.htm',
          name: '综述之八丨加快把人民军队建成世界一流军队'
        },
        {
          href: 'http://www.81.cn/yw/2022-10/22/content_10194152.htm',
          name: '基层代表热议履行新时代人民军队使命任务'
        }
      ]
    }
  },
  methods: {
    handleClick() { }
  }
}
</script>

<style lang="scss">
.el-divider {
  background-color: #394456;
  height: 10px;
}

.el-divider__text {
  font-size: 25px;
  background-color: #fff;
}

.image-info {
  width: 100%;
  height: 100px;
}

.news-list {
  margin-top: 20px;
  text-align: left;

  div+div {
    margin-top: 10px;
  }

  .el-image {
    width: 200px;
    height: 120px;
  }
}

a:hover {
  color: blue;
}

a:link {
  color: black;
}

a {
  color: black;
  text-decoration: none;
}
</style>

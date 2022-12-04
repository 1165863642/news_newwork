<template>
  <div>
    <el-divider content-positio="center"> 特色栏目 </el-divider>
    <el-row :gutter="20">
      <el-col :span="8" class="container">
        <span class="title">学习强军</span>
        <div class="news-list">
          <div v-for="(item, index) in staffData" :key="index">
            <a :href="item.href" target="_blank">{{ item.name }}</a>
          </div>
        </div>
      </el-col>
      <el-col :span="8" class="container">
        <span class="title">教案共享</span>
        <div class="news-list">
          <div v-for="(item, index) in staffData" :key="index">
            <a :href="item.href" target="_blank">{{ item.name }}</a>
          </div>
        </div>
      </el-col>
      <el-col :span="8" class="container">
        <span class="title">理论月刊</span>
        <div class="news-list">
          <div v-for="(item, index) in staffData" :key="index">
            <a :href="item.href" target="_blank">{{ item.name }}</a>
          </div>
        </div>
      </el-col>
    </el-row>

    <div class="flex-row">
      <el-image
        v-for="(item, index) in qiangjunData"
        :key="index"
        :src="item"
        style="width: 200px; height: 100px"
      />
    </div>

    <div style="text-align: center; margin-top: 20px">
      <span
        style="border: 2px solid black; border-radius: 5px; padding: 10px 30px;font-size: 20px;"
      >典型人物</span>
    </div>

    <div class="flex-row">
      <el-image
        v-for="(item, index) in typicalCharacter"
        :key="index"
        :src="item"
        style="width: 250px; height: 100px"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Characteristic',
  data() {
    return {
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
      ],
      qiangjunData: [
        'https://img2.baidu.com/it/u=2386750942,406768285&fm=253&fmt=auto&app=138&f=JPEG?w=829&h=500',
        'https://img2.baidu.com/it/u=3644810101,328185518&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=300',
        'https://img1.baidu.com/it/u=3158827197,3721034271&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=250',
        'https://img2.baidu.com/it/u=713518451,3116316626&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=400',
        'https://img1.baidu.com/it/u=3505368791,1562614088&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
        'https://img0.baidu.com/it/u=3030429087,1103705111&fm=253&fmt=auto&app=120&f=JPEG?w=660&h=371'
      ],
      typicalCharacter: [
        'https://img2.baidu.com/it/u=2386750942,406768285&fm=253&fmt=auto&app=138&f=JPEG?w=829&h=500',
        'https://img2.baidu.com/it/u=3644810101,328185518&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=300',
        'https://img1.baidu.com/it/u=3158827197,3721034271&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=250',
        'https://img2.baidu.com/it/u=713518451,3116316626&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=400',
        'https://img1.baidu.com/it/u=3505368791,1562614088&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500']
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
.title {
  border: 2px black solid;
  padding: 5px 26px;
}
.news-list {
  margin-top: 20px;
  text-align: left;

  div + div {
    margin-top: 10px;
  }
}
.el-divider {
  background-color: #394456;
  height: 10px;
}

.el-divider__text {
  font-size: 25px;
  background-color: #fff;
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

.flex-row {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
</style>

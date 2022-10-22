<template>
  <div>
    <el-divider content-positio="center"> 工作指导 </el-divider>
    <el-row :gutter="20">
      <el-col :span="8" class="container">
        <span class="title">参谋部</span>
        <div class="news-list">
          <div v-for="(item, index) in staffData" :key="index">
            <a :href="item.href" target="_blank">{{ item.name }}</a>
          </div>
        </div>
      </el-col>
      <el-col :span="8" class="container">
        <span class="title">政治工作部</span>
        <div class="news-list">
          <div v-for="(item, index) in staffData" :key="index">
            <a :href="item.href" target="_blank">{{ item.name }}</a>
          </div>
        </div>
      </el-col>
      <el-col :span="8" class="container">
        <span class="title">保障部</span>
        <div class="news-list">
          <div v-for="(item, index) in staffData" :key="index">
            <a :href="item.href" target="_blank">{{ item.name }}</a>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'JobInstruction',
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
      ]
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
</style>

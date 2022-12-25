<template>
  <div style="padding-bottom: 30px;">
    <el-divider content-positio="center">
      <div @click="$router.push(`/journaLism/${label}`)" class="module-title">{{ label }}</div>
    </el-divider>
    <el-row :gutter="20">
      <el-col :span="8" class="container">
        <el-card><span class="title">{{ news1.label }}</span>
          <div class="news-list">
            <div v-for="(item, index) in news1.news.slice(0, 4)" :key="item.newsId">
              <a @click="toJournaDetailPage(item)">{{ item.title }}</a>
            </div>
          </div>
          <div class="flex-row">
            <el-image v-for="(item, index) in news1.news.slice(4, 6)" :key="item.newsId"
              :src="getImageUrl(item.imageUrl)" @click="toJournaDetailPage(item)" :title="item.title"
              style="width: 200px; height: 100px" />
          </div>
        </el-card>

      </el-col>


      <el-col :span="8" class="container">
        <el-card>
          <span class="title">{{ news2.label }}</span>
          <div class="news-list">
            <div v-for="(item, index) in news2.news.slice(0, 4)" :key="item.newsId">
              <a @click="toJournaDetailPage(item)">{{ item.title }}</a>
            </div>
          </div>
          <div class="flex-row">
            <el-image v-for="(item, index) in news2.news.slice(4, 6)" :key="item.newsId"
              :src="getImageUrl(item.imageUrl)" @click="toJournaDetailPage(item)" :title="item.title"
              style="width: 200px; height: 100px" />
          </div>
        </el-card>

      </el-col>


      <el-col :span="8" class="container">
        <el-card>
          <span class="title">{{ news3.label }}</span>
          <div class="news-list">
            <div v-for="(item, index) in news3.news.slice(0, 4)" :key="item.newsId">
              <a @click="toJournaDetailPage(item)">{{ item.title }}</a>
            </div>
          </div>
          <div class="flex-row">
            <el-image v-for="(item, index) in news3.news.slice(4, 6)" :key="item.newsId"
              :src="getImageUrl(item.imageUrl)" @click="toJournaDetailPage(item)" :title="item.title"
              style="width: 200px; height: 100px" />
          </div>

        </el-card>

      </el-col>
    </el-row>

    <el-card style="margin-top: 20px">
      <div style="text-align: center;">
        <span class="title">典型人物</span>
      </div>

      <div class="flex-row">
        <el-image v-for="(item, index) in news4.news.slice(0, 5)" :key="item.newsId" :src="getImageUrl(item.imageUrl)"
          @click="toJournaDetailPage(item)" :title="item.title" style="width: 250px; height: 100px" />
      </div>
    </el-card>


  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getImageUrl, toJournaDetailPage } from "@/homepage/api/newsType"
export default {
  name: 'Characteristic',
  data() {
    return {
      label: '',
      news1: {
        id: 0,
        label: "",
        news: []
      },
      news2: {
        id: 0,
        label: "",
        news: []
      },
      news3: {
        id: 0,
        label: "",
        news: []
      },
      news4: {
        id: 0,
        label: "",
        news: []
      }
    }
  },
  mounted() {
    this.init(this.featureClassBar);
  },
  watch: {
    featureClassBar(newValue, oldValue) {
      this.init(newValue);
    }
  },
  computed: {
    ...mapGetters(['featureClassBar']),
  },
  methods: {
    getImageUrl, toJournaDetailPage,
    init(newValue) {
      if (newValue && newValue.length > 0) {
        const { label, child = [] } = newValue[0]
        this.label = label;
        child.forEach((item, i) => {
          this[`news${i + 1}`] = item
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}

.title {
  border: #fcb955 2px solid;
  padding: 5px 26px;
  border-radius: 2px;
}

.news-list {
  margin-top: 20px;
  text-align: left;

  div+div {
    margin-top: 10px;
  }
}

.el-divider {
  background-color: #ffcb7d;
  height: 5px;
}

.el-divider__text {
  font-size: 25px;
  background-color: #fff;
}

a:hover {
  color: #fcb955;
}

a:link {
  color: black;
}

a {
  color: black;
  text-decoration: none;
  padding-left: 5px;
}

.flex-row {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}


.module-title {
  background-color: #ffcb7d;
  color: #8f3024;
  text-align: center;
  font-size: 20px;
  line-height: 45px;
  height: 45px;
  cursor: pointer;
  border: #8f3024 1px solid;
  padding: 0 40px;
  font-weight: 500;
  border-radius: 2px;
}
</style>

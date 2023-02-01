<template>
  <div style="padding-bottom: 30px;">
    <el-divider content-positio="center">
      <div @click="$router.push(`/journaLism/${label}`)" class="module-title">{{ label }}</div>
    </el-divider>
    <el-row :gutter="20">
      <el-col :span="8" class="container">
        <el-card>
          <span class="title">{{ news1.label }}</span>
          <div class="news-list">
            <div v-for="(item, index) in news1.news" :key="item.newsId">
              <a @click="toJournaDetailPage(item)" :title="item.title">{{ item.title }}</a>
            </div>
          </div>
        </el-card>

      </el-col>
      <el-col :span="8" class="container">
        <el-card>
          <span class="title">{{ news2.label }}</span>
          <div class="news-list">
            <div v-for="(item, index) in news2.news" :key="item.newsId">
              <a @click="toJournaDetailPage(item)" :title="item.title">{{ item.title }}</a>
            </div>
          </div>
        </el-card>

      </el-col>

      <el-col :span="8" class="container">
        <el-card>
          <span class="title">{{ news3.label }}</span>
          <div class="news-list">
            <div v-for="(item, index) in news3.news" :key="item.newsId">
              <a @click="toJournaDetailPage(item)" :title="item.title">{{ item.title }}</a>
            </div>
          </div>
        </el-card>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getImageUrl, toJournaDetailPage } from "@/homepage/api/newsType"
export default {
  name: 'JobInstruction',
  data() {
    return {
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
      label: ''
    }
  },
  mounted() {
    this.init(this.workClassBar);
  },
  watch: {
    workClassBar(newValue, oldValue) {
      this.init(newValue);
    }
  },
  computed: {
    ...mapGetters(['workClassBar']),
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
@import "../../../../mian.scss";

.container {
  text-align: center;
}

.title {
  border: $main-color 2px solid;
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



.el-divider__text {
  font-size: 25px;
  background-color: #fff;
}
</style>

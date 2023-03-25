<template>
  <div style="padding-bottom: 10px;">
    <el-divider content-positio="center">
      <div class="module-title">学习强军</div>
    </el-divider>
    <el-row :gutter="20">
      <el-col :span="8" class="container" v-if="navigationBar21">
        <el-card>
          <span class="title">{{ navigationBar21.label }}</span>
          <div class="news-list">
            <div v-for="(item, index) in navigationBar21.news.slice(0, 10)" :key="item.newsId">
              <a @click="toJournaDetailPage(item)" :title="item.title">{{ item.title }}</a>
            </div>
          </div>
        </el-card>

      </el-col>
      <el-col :span="8" class="container" v-if="navigationBar22">
        <el-card>
          <span class="title">{{ navigationBar22.label }}</span>
          <div class="news-list">
            <div v-for="(item, index) in navigationBar22.news.slice(0, 10)" :key="item.newsId">
              <a @click="toJournaDetailPage(item)" :title="item.title">{{ item.title }}</a>
            </div>
          </div>
        </el-card>

      </el-col>

      <el-col :span="8" class="container" v-if="navigationBar23">
        <el-card>
          <span class="title">{{ navigationBar23.label }}</span>
          <div class="news-list">
            <div v-for="(item, index) in navigationBar23.news.slice(0, 10)" :key="item.newsId">
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

    }
  },
  computed: {
    ...mapGetters(['navigationBar21', "navigationBar22", "navigationBar23"]),
  },
  methods: {
    getImageUrl,
    toJournaDetailPage
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

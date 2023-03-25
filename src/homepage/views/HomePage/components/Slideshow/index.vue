<template>
  <div style="padding-bottom: 30px;">
    <el-divider content-positio="center">
      <div class="module-title">文化角</div>
    </el-divider>

    <!-- <el-carousel :interval="10000" arrow="never" height="150px">
      <el-carousel-item v-for="item in slideshowList">
        <el-row :gutter="20">
          <el-col :span="4" v-for="jtem in item" :key="jtem.newsId">
            <img style="width: 100%;height: 130px;" :src="getImageUrl(jtem.imageUrl)">
          </el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel> -->
    <!-- <el-row :gutter="20">
      <el-col :span="12" v-for="item in slideshow" :key="item.newId"
        style="margin-bottom: 10px;cursor: pointer;text-align: center;" @click.native="toJournaDetailPage(item)">
        <img style="width: 500px;height: 200px;" :src="getImageUrl(item.imageUrl)">
        <div>{{ item.title }}</div>
      </el-col>
    </el-row> -->


    <el-row :gutter="20">
      <el-col :span="8" class="container" v-if="slideshow1">
        <el-card>
          <span class="title">{{ slideshow1.label }}</span>
          <el-row :gutter="10" style="margin-top: 20px;">
            <el-col :span="12" v-for="(item, index) in slideshow1.news.slice(0, 6)"
              @click.native="toJournaDetailPage(item)" style="margin-bottom: 10px;cursor: pointer;" :key="item.newsId">
              <img :src="getImageUrl(item.imageUrl)" style="width: 200px;height: 100px;" />
              <div style="color: #3a523d;">{{ item.title }}</div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>


      <el-col :span="8" class="container" v-if="slideshow2">
        <el-card>
          <span class="title">{{ slideshow2.label }}</span>
          <el-row :gutter="10" style="margin-top: 20px;">
            <el-col :span="12" v-for="(item, index) in slideshow2.news.slice(0, 6)"
              @click.native="toJournaDetailPage(item)" style="margin-bottom: 10px;cursor: pointer;" :key="item.newsId">
              <img :src="getImageUrl(item.imageUrl)" style="width: 200px;height: 100px;" />
              <div style="color: #3a523d;">{{ item.title }}</div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="8" class="container" v-if="slideshow3">
        <el-card>
          <span class="title">{{ slideshow3.label }}</span>
          <el-row :gutter="10" style="margin-top: 20px;">
            <el-col :span="12" v-for="(item, index) in slideshow3.news.slice(0, 6)"
              @click.native="toJournaDetailPage(item)" style="margin-bottom: 10px;cursor: pointer;" :key="item.newsId">
              <img :src="getImageUrl(item.imageUrl)" style="width: 200px;height: 100px;" />
              <div style="color: #3a523d;">{{ item.title }}</div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import { getImageUrl, toJournaDetailPage } from "@/homepage/api/newsType"
import { mapGetters } from 'vuex';
export default {
  name: 'Slideshow',
  data() {
    return {

    }
  },
  mounted() {

  },
  watch: {

  },
  computed: {
    ...mapGetters(['slideshow1', 'slideshow2', 'slideshow3']),
  },
  methods: {
    getImageUrl,
    toJournaDetailPage,
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

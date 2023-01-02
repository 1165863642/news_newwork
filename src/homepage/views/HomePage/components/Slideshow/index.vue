<template>
  <div style="padding-bottom: 30px;">
    <el-divider content-positio="center">
      <div class="module-title">展示墙</div>
    </el-divider>

    <el-carousel :interval="10000" arrow="never" height="150px">
      <el-carousel-item v-for="item in slideshowList">
        <el-row :gutter="20">
          <el-col :span="4" v-for="jtem in item" :key="jtem.newsId">
            <img style="width: 100%;height: 130px;" :src="getImageUrl(jtem.imageUrl)">
          </el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>



  </div>
</template>

<script>

import { getImageUrl, toJournaDetailPage } from "@/homepage/api/newsType"
import { mapGetters } from 'vuex';
export default {
  name: 'Slideshow',
  data() {
    return {
      slideshowList: []
    }
  },
  mounted() {
    this.init(this.slideshow)
  },
  watch: {
    slideshow(newValue, oldValue) {
      this.init(newValue)
    },
  },
  computed: {
    ...mapGetters(['slideshow']),
  },
  methods: {
    getImageUrl,
    toJournaDetailPage,
    init(list) {
      console.log('init', list);
      this.slideshowList = this.spArr(list, 6);
    },
    spArr(arr, num) { //arr是你要分割的数组，num是以几个为一组
      let newArr = [] //首先创建一个新的空数组。用来存放分割好的数组
      for (let i = 0; i < arr.length;) { //注意：这里与for循环不太一样的是，没有i++
        newArr.push(arr.slice(i, i += num));
      }
      return newArr
    }
  }
}
</script>

<style lang="scss" scoped>
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

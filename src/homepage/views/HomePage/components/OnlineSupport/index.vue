<template>
  <div style="padding-bottom: 30px;">
    <el-divider content-positio="center">
      <div @click="$router.push(`/journaLism/${label}`)" class="module-title">{{ label }}</div>
    </el-divider>
    <el-row :gutter="20">
      <el-col :span="8" class="container">
        <el-card class="my-list-h">
          <span class="title">{{ news1.label }}</span>
          <div class="news-list">
            <div v-for="(item, index) in news1.news.slice(0, 7)" :key="item.newsId">
              <el-image v-if="index == 0" fit="fill" :src="getImageUrl(item.imageUrl)" style="float: left"
                @click="toJournaDetailPage(item)" :title="item.title" />
              <a @click="toJournaDetailPage(item)">{{ item.title }}</a>
            </div>
          </div>
        </el-card>

      </el-col>
      <el-col :span="8" class="container">
        <el-card class="my-list-h">
          <span class="title">{{ news2.label }}</span>
          <div class="news-list">
            <div v-for="(item, index) in news2.news.slice(0, 7)" :key="item.newsId">
              <el-image v-if="index == 0" fit="fill" :src="getImageUrl(item.imageUrl)" style="float: left"
                @click="toJournaDetailPage(item)" :title="item.title" />
              <a @click="toJournaDetailPage(item)">{{ item.title }}</a>
            </div>
          </div>
        </el-card>

      </el-col>


      <el-col :span="8" class="container">
        <el-card class="my-list-h">
          <span class="title">{{ news3.label }}</span>
          <div class="server">
            <div v-for="(item, index) in news3.news" :key="item.newsId">
              <el-image class="icon" :src="getImageUrl(item.imageUrl)" @click="toJournaDetailPage(item)"
                style="float: left" />
              <div class="line" @click="toJournaDetailPage(item)"><span>{{ item.title }}</span></div>
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
  name: 'OnlineSupport',
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
    this.init(this.onlineClassBar);
  },
  watch: {
    onlineClassBar(newValue, oldValue) {
      this.init(newValue);
    }
  },
  computed: {
    ...mapGetters(['onlineClassBar']),
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

  .title {
    border: $main-color 2px solid;
    font-weight: 500;
    padding: 5px 26px;
    border-radius: 2px;
  }

  .news-list {
    margin-top: 20px;
    text-align: left;

    div+div {
      margin-top: 10px;
    }

    .el-image {
      width: 100px;
      height: 100px;
    }
  }
}


.el-divider__text {
  font-size: 25px;
  background-color: #fff;
}

.server {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  .line {
    width: 200px;

    span {
      line-height: 50px;
    }
  }
}

.icon {
  width: 50px;
  height: 50px;
}

.clearfix:after {
  content: '';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}



.my-list-h {
  height: 300px;
}
</style>

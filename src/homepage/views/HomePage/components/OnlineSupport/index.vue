<template>
  <div>
    <el-divider content-positio="center">
      <div @click="$router.push(`/journaLism/${label}`)">{{ label }}</div>
    </el-divider>
    <el-row :gutter="20">
      <el-col :span="8" class="container">
        <span class="title">{{ news1.label }}</span>
        <div class="news-list">
          <div v-for="(item, index) in news1.news" :key="item.newsId">
            <el-image v-if="index == 0" fit="fill" :src="getImageUrl(item.imageUrl)" style="float: left"
              @click="toJournaDetailPage(item)" :title="item.title" />
            <a @click="toJournaDetailPage(item)">{{ item.title }}</a>
          </div>
        </div>
      </el-col>
      <el-col :span="8" class="container">
        <span class="title">{{ news2.label }}</span>
        <div class="news-list">
          <div v-for="(item, index) in news2.news" :key="item.newsId">
            <el-image v-if="index == 0" fit="fill" :src="getImageUrl(item.imageUrl)" style="float: left"
              @click="toJournaDetailPage(item)" :title="item.title" />
            <a @click="toJournaDetailPage(item)">{{ item.title }}</a>
          </div>
        </div>
      </el-col>


      <el-col :span="8" class="container">
        <span class="title">{{ news3.label }}</span>
        <div class="server">
          <div v-for="(item, index) in news3.news" :key="item.newsId">
            <el-image class="icon" :src="getImageUrl(item.imageUrl)" @click="toJournaDetailPage(item)"
              style="float: left" />
            <div class="line" @click="toJournaDetailPage(item)"><span>{{ item.title }}</span></div>
          </div>
        </div>
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
.container {
  text-align: center;

  .title {
    border: 2px black solid;
    padding: 5px 26px;
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

.el-divider {
  background-color: #394456;
  height: 10px;
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
</style>

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
            <el-image v-for="(item, index) in news1.news.slice(4, 6)" :key="item.newsId" :src="getImageUrl(item.imageUrl)"
              @click="toJournaDetailPage(item)" :title="item.title" style="width: 200px; height: 100px" />
          </div>
        </el-card>

      </el-col>
      <el-col :span="8" class="container">
        <el-card>
          <span class="title">{{ news2.label }}</span>
          <div class="qwe-qwe">
            <div v-if="news2.news[0]" class="azxc-zxc">
              <el-image :src="getImageUrl(news2.news[0].imageUrl)" @click="toJournaDetailPage(news2.news[0])"
                :title="news2.news[0].title" />
            </div>
            <div class="asd-asd">
              <div v-for="(item, index) in news2.news.slice(1, 8)" :key="item.newsId">
                <a @click="toJournaDetailPage(item)">{{ item.title }}</a>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8" class="container">
        <el-card>
          <span class="title">{{ news3.label }}</span>
          <div class="qwe-qwe">
            <div v-if="news3.news[0]" class="azxc-zxc">
              <el-image :src="getImageUrl(news3.news[0].imageUrl)" @click="toJournaDetailPage(news3.news[0])"
                :title="news3.news[0].title" />
            </div>
            <div class="asd-asd">
              <div v-for="(item, index) in news3.news.slice(1, 8)" :key="item.newsId">
                <a @click="toJournaDetailPage(item)">{{ item.title }}</a>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-card style="margin-top: 20px">
      <div class="human-portrait">
        <div class="portrait-item" v-for="(item, index) in humanPortrait.slice(0, 7)" :key="item.newsId"
          @click="toJournaDetailPage(item)">
          <img :src="getImageUrl(item.imageUrl)" />
        </div>
      </div>
      <div class="human-portrait">
        <div class="portrait-item" v-for="(item, index) in humanPortrait.slice(7, 14)" :key="item.newsId"
          @click="toJournaDetailPage(item)">
          <img :src="getImageUrl(item.imageUrl)" />
        </div>
      </div>
    </el-card>
    <el-card style="margin-top: 20px">
      <div style="text-align: center;margin-bottom: 20px;">
        <span class="title">典型人物</span>
      </div>

      <el-carousel :interval="5000" arrow="never" height="150px">
        <el-carousel-item>
          <!-- <el-row :gutter="20">
            <el-col :span="4" v-for="jtem in news4.news.slice(0, 5)" :key="jtem.newsId">
              <img style="width: 100%;height: 130px;" :src="getImageUrl(jtem.imageUrl)">
            </el-col>
          </el-row> -->
          <div class="flex-row">
            <div v-for="(item, index) in news4.news.slice(0, 5)" :key="item.newsId" @click="toJournaDetailPage(item)"
              style="width: 250px; overflow: hidden; ">
              <el-image :src="getImageUrl(item.imageUrl)" :title="item.title" style="width: 250px; height: 100px" />
              <div class="name">{{ item.title }}</div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <!-- <el-row :gutter="20">
            <el-col :span="4" v-for="jtem in news4.news.slice(5, 10)" :key="jtem.newsId">
              <img style="width: 100%;height: 130px;" :src="getImageUrl(jtem.imageUrl)">
            </el-col>
          </el-row> -->
          <div class="flex-row">
            <div v-for="(item, index) in news4.news.slice(5, 10)" :key="item.newsId" @click="toJournaDetailPage(item)"
              style="width: 250px; overflow: hidden; ">
              <el-image :src="getImageUrl(item.imageUrl)" :title="item.title" style="width: 250px; height: 100px" />
              <div class="name">{{ item.title }}</div>
            </div>

          </div>
        </el-carousel-item>
      </el-carousel>
      <!-- <div class="flex-row">
        <el-image v-for="(item, index) in news4.news.slice(5, 10)" :key="item.newsId" :src="getImageUrl(item.imageUrl)"
          @click="toJournaDetailPage(item)" :title="item.title" style="width: 250px; height: 100px" />
      </div> -->
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
    ...mapGetters(['featureClassBar', 'humanPortrait']),
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

.qwe-qwe {
  display: flex;
  margin-top: 20px;

  .azxc-zxc {
    width: 140px;
    flex-shrink: 0;

    .el-image {
      width: 140px;
      height: 250px
    }
  }


  .asd-asd {
    width: calc(100% - 140px);
    text-align: left;

    div+div {
      margin-top: 10px;
    }
  }
}

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


.flex-row {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.name {
  color: #3a523d;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.human-portrait {
  margin-bottom: 10px;
  display: flex;

  .portrait-item {
    flex: 1;
    text-align: center;
    cursor: pointer;

    img {
      width: 180px;
      height: 90px;
    }

    .name {
      color: #3a523d;
    }
  }
}
</style>

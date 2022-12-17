<template>
  <div>
    <div class="top-part">
      <img :src="topImage" style="width: 49%;"> <img :src="topImage" style="width: 49%;">
    </div>
    <el-row :gutter="20">
      <el-col :span="12" class="col-item">
        <el-carousel :interval="5000" height="400px" arrow="never" direction="vertical">
          <el-carousel-item v-for="item in slideshowList" :key="item.newsId">
            <img style="width: 100%;" :src="getImageUrl(item.imageUrl)" :title="item.title"
              @click="toJournaDetailPage(item)">
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="12" class="col-item">
        <el-tabs v-model="Bar1.nameValue" type="card" @tab-click="handleClick1">
          <el-tab-pane v-for="(item) in Bar1.list" :key="item.id" :label="item.label" :name="item.id">
          </el-tab-pane>
          <div class="news-list" v-loading="Bar1.loading">
            <div v-for="(item, index) in Bar1.news" :key="item.newsId">
              <el-image v-if="index == 0" fit="fill" :src="getImageUrl(item.imageUrl)" @click="toJournaDetailPage(item)"
                style="float: left" />
              <a @click="toJournaDetailPage(item)">{{ item.title }}</a>
            </div>
          </div>
        </el-tabs>

      </el-col>
      <el-col :span="12" class="col-item">
        <el-tabs v-model="Bar2.nameValue" type="card" @tab-click="handleClick2">
          <el-tab-pane v-for="(item) in Bar2.list" :key="item.id" :label="item.label" :name="item.id"> </el-tab-pane>
          <div class="news-list" v-loading="Bar2.loading">
            <div v-for="(item, index) in Bar2.news" :key="item.newsId">
              <el-image v-if="index == 0" fit="fill" :src="getImageUrl(item.imageUrl)" @click="toJournaDetailPage(item)"
                style="float: left" />
              <a @click="toJournaDetailPage(item)">{{ item.title }}</a>
            </div>
          </div>
        </el-tabs>

      </el-col>
      <el-col :span="12" class="col-item">
        <el-row :gutter="10">
          <el-col :span="10">
            <img :src="getImageUrl(journalList[0] ? journalList[0].imageUrl : '')" style="width: 100%;height:400px"
              @click="toJournaDetailPage(journalList[0] ? journalList[0] : null)">
          </el-col>
          <el-col :span="12">
            <el-row :gutter="10">
              <el-col :span="8" v-for="(item, index) in journalList" v-show="index !== 0">
                <img :src="getImageUrl(item.imageUrl)" @click="toJournaDetailPage(item)" class="image-book">
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import topImage from '../../../../assets/top.png'
import { mapGetters } from 'vuex';
import { getImageUrl, toJournaDetailPage, getJournaList } from "@/homepage/api/newsType"
export default {
  name: 'WebHome',
  data() {
    return {
      Bar1: {
        nameValue: 'TravelPublic',
        loading: false,
        news: [],
        list: [
          {
            key: 'TravelPublic',
            title: '旅务公开'
          },
          {
            key: 'OfficeImmediately',
            title: '马上就办'
          },
          {
            key: 'DirectorEmail',
            title: '所长信箱'
          }
        ]
      },
      Bar2: {
        nameValue: 'IntensifSoldier',
        loading: false,
        news: [],
        list: [
          {
            key: 'IntensifSoldier',
            title: '强军网'
          },
          {
            key: 'OfficeImmediately',
            title: '制作新闻'
          },
          {
            key: 'TelevisionNews',
            title: '电视新闻'
          },
          {
            key: 'NewMedia',
            title: '新媒体'
          }
        ]
      },
      topImage,
    }
  },
  watch: {
    navigationBar1(newValue, oldValue) {
      const data = newValue || []
      const lsit = []
      data.map((item => {
        const { foucs, id, index, label, news } = item;
        if (foucs) {
          //默认选中项
          this.Bar1.nameValue = id;
          this.Bar1.news = news;
          lsit.unshift({ id, index, label });
        } else {
          lsit.push({ id, index, label });
        }
      }))
      this.Bar1.list = lsit
    },
    navigationBar2(newValue, oldValue) {
      const data = newValue || []
      const lsit = []
      data.map((item => {
        const { foucs, id, index, label, news } = item;
        if (foucs) {
          //默认选中项
          this.Bar2.nameValue = id;
          this.Bar2.news = news;
          lsit.unshift({ id, index, label });
        } else {
          lsit.push({ id, index, label });
        }
      }))
      this.Bar2.list = lsit
    }
  },
  computed: {
    ...mapGetters(['slideshowList', 'navigationBar1', 'navigationBar2', 'journalList']),
  },
  methods: {
    getImageUrl,
    toJournaDetailPage,
    async handleClick1() {
      this.Bar1.loading = true
      const { code, msg, rows = [] } = await getJournaList({
        pageSize: 6,
        page: 1, newsType: this.Bar1.nameValue
      })
      this.Bar1.loading = false
      if (code !== 200) {
        this.$message.error(msg)
        return
      }
      this.Bar1.news = rows;
    },
    async handleClick2() {
      this.Bar2.loading = true
      const { code, msg, rows = [] } = await getJournaList({
        pageSize: 6,
        page: 1, newsType: this.Bar2.nameValue
      })
      this.Bar2.loading = false
      if (code !== 200) {
        this.$message.error(msg)
        return
      }
      this.Bar2.news = rows;
    }
  }
}
</script>

<style lang="scss" scoped>
.top-part {
  background-color: #e60003;
  text-align: center;
  margin-bottom: 20px;
}

.col-item {
  height: 400px;
  margin-bottom: 20px;
}

.col-item ::v-deep {
  .el-tabs__item.is-active {
    color: #fcb955 !important;
  }
}

.news-list {
  margin-top: 0px;
  text-align: left;

  div+div {
    margin-top: 10px;
  }

  .el-image {
    width: 200px;
    height: 120px;
    margin-right: 10px;
  }
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

.image-book {
  width: 100%;
  height: 150px;
  margin-bottom: 90px;
}
</style>

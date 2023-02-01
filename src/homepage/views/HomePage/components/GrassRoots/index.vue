<template>
  <div style="padding-bottom: 30px;">
    <el-divider content-positio="center">
      <div @click="$router.push(`/journaLism/${label}`)" class="module-title">{{ label }}</div>
    </el-divider>
    <el-card>

      <div class="top_situation" @click="showTopSituation()">上稿情况</div>
      <div style="width: 90%;">
        <el-tabs v-model="navigationBar.activeName" @tab-click="handleClick">
          <el-tab-pane v-for="(item) in navigationBar.list" :key="item.id" :label="item.label" :name="item.id" />
        </el-tabs>
      </div>

      <div v-loading="navigationBar.loading">
        <el-row :gutter="20">
          <el-col :span="5" v-for="item in navigationBar.news.slice(0, 3)" :key="item.newsId">
            <img :src="getImageUrl(item.imageUrl)" class="image-info" @click="toJournaDetailPage(item)"
              :title="item.title">
          </el-col>
          <el-col :span="9" v-if="navigationBar.news.length > 3">
            <div class="news-list">
              <div v-for="item in navigationBar.news.slice(2, 7)" :key="item.newsId">
                <a @click="toJournaDetailPage(item)">{{ item.title }}</a>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>


    </el-card>


    <el-dialog title="上稿情况" :visible.sync="topSituationVisible" width="50%" :before-close="topSituationClose" center>
      <el-row style="margin-bottom: 20px;">
        <el-col :span="8" class="topSituationCol">排名</el-col>
        <el-col :span="8" class="topSituationCol">名称</el-col>
        <el-col :span="8" class="topSituationCol">上稿数量</el-col>
      </el-row>
      <el-row v-for="(item, i) in topSituationList" :key="item.id">
        <el-col :span="8" :class="i < 3 ? 'topSituationCom-x' : 'topSituationCom'">{{ i+ 1}}</el-col>
        <el-col :span="8" :class="i < 3 ? 'topSituationCom-x' : 'topSituationCom'">{{ item.label }}</el-col>
        <el-col :span="8" :class="i < 3 ? 'topSituationCom-x' : 'topSituationCom'"> {{
          item.count ? item.count : '0'
        }}</el-col>
      </el-row>

    </el-dialog>

  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import { getImageUrl, toJournaDetailPage, getJournaList } from "@/homepage/api/newsType"
export default {
  name: 'GrassRoots',
  data() {
    return {
      navigationBar: {
        activeName: '',
        loading: false,
        news: [],
        list: []
      },
      label: '',
      topSituationVisible: false,
      topSituationList: []
    }
  },
  mounted() {
    this.init(this.basicClassBar);
  },
  watch: {
    basicClassBar(newValue, oldValue) {
      this.init(newValue);
    }
  },
  computed: {
    ...mapGetters(['basicClassBar']),
  },
  methods: {
    getImageUrl, toJournaDetailPage,
    showTopSituation() {
      // 显示上访情况

      const list = this.navigationBar.list.map(({ count, id, label }) => { return { count, id, label } });
      this.topSituationList = list.sort((a, b) => { return b.count - a.count })
      this.topSituationVisible = true;
    },
    topSituationClose() {
      // 上访情况
      this.topSituationVisible = false;
    },
    init(newValue) {
      if (newValue && newValue.length > 0) {
        const { label, child = [] } = newValue[0]
        this.label = label;
        const lsit = []
        child.map((item, i) => {
          const { id, label, count, news } = item;
          if (i == 0) {
            //默认选中项
            this.navigationBar.activeName = id + '';
            this.navigationBar.news = news;
          }
          lsit.push({ id: id + '', label, count });

        })
        this.navigationBar.list = lsit
      }
    },
    async handleClick() {
      this.navigationBar.loading = true
      const { code, msg, rows = [] } = await getJournaList({
        pageSize: 6,
        page: 1,
        newsType: this.navigationBar.activeName,
        reviewStatus: 1
      })
      this.navigationBar.loading = false
      if (code !== 200) {
        this.$message.error(msg)
        return
      }
      this.navigationBar.news = rows;
    },
  }
}
</script>

<style lang="scss">
@import "../../../../mian.scss";



.el-divider__text {
  font-size: 25px;
  background-color: #fff;
}

.image-info {
  width: 100%;
  height: 140px;
}

.news-list {
  text-align: left;

  div+div {
    margin-top: 10px;
  }

  .el-image {
    width: 200px;
    height: 120px;
  }
}


.el-tabs__item.is-active {
  color: $main-color;
  font-weight: 1000;
}

.el-tabs__active-bar {
  background-color: $main-color;
}

.top_situation {
  float: right;
  width: 90px;
  color: #000;
  text-align: right;
  cursor: pointer;
  z-index: 10;
}

.top_situation:hover {
  color: $main-color;
  font-weight: 1000;
  font-size: 18px;
}

.topSituationCol {
  text-align: center;
  color: $main-color;
  font-size: 18px;
  font-weight: 1000;
  border-right: $main-color 1px solid;
}

.topSituationCol:last-of-type {
  border: none;
}

.topSituationCom-x {
  text-align: center;
  line-height: 35px;
  height: 35px;
  font-size: 20px;
  color: #d71616;
  font-size: 1000;
}


.topSituationCom {
  text-align: center;
  line-height: 30px;
  height: 30px;
  font-size: 18px;
}
</style>

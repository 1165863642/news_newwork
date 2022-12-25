<template>
  <div style="padding-bottom: 30px;">
    <el-divider content-positio="center">
      <div @click="$router.push(`/journaLism/${label}`)" class="module-title">{{ label }}</div>
    </el-divider>
    <el-card>


      <el-tabs v-model="navigationBar.activeName" @tab-click="handleClick">
        <el-tab-pane v-for="(item) in navigationBar.list" :key="item.id" :label="item.label" :name="item.id" />
      </el-tabs>
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
      label: ''
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
    init(newValue) {
      if (newValue && newValue.length > 0) {
        const { label, child = [] } = newValue[0]
        this.label = label;
        const lsit = []
        child.map((item, i) => {
          const { id, label, news } = item;
          if (i == 0) {
            //默认选中项
            this.navigationBar.activeName = id + '';
            this.navigationBar.news = news;
          }
          lsit.push({ id: id + '', label });

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
.el-divider {
  background-color: #ffcb7d;
  height: 5px;
}

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

.el-tabs__item.is-active {
  color: #ffcb7d;
}

.el-tabs__active-bar {
  background-color: #ffcb7d;
}
</style>

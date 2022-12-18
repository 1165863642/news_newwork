<template>
  <div>
    <el-divider content-positio="center">
      <div @click="$router.push(`/journaLism/${label}`)">{{ label }}</div>
    </el-divider>

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
            <div v-for="item in navigationBar.news.slice(2)" :key="item.newsId">
              <a @click="toJournaDetailPage(item)">{{ item.title }}</a>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
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
        child.map((item) => {
          const { id, label, news } = item;
          if (news) {
            //默认选中项
            this.navigationBar.activeName = id + '';
            this.navigationBar.news = news;
            lsit.unshift({ id: id + '', label });
          } else {
            lsit.push({ id: id + '', label });
          }
        })
        this.navigationBar.list = lsit
      }
    },
    async handleClick() {
      this.navigationBar.loading = true
      const { code, msg, rows = [] } = await getJournaList({
        pageSize: 6,
        page: 1, newsType: this.navigationBar.activeName
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
  background-color: #394456;
  height: 10px;
}

.el-divider__text {
  font-size: 25px;
  background-color: #fff;
}

.image-info {
  width: 100%;
  height: 100px;
}

.news-list {
  margin-top: 20px;
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
</style>

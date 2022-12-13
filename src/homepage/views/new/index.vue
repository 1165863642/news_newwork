<template>

  <div class="news-content">
    <el-container>
      <el-header>
        <div class="horizontal-center">
          <Home-Logo />
        </div>
      </el-header>
      <el-main>
        <div class="horizontal-center news">
          <div class="news-title">
            <h1>{{ news.title }}</h1>
          </div>
          <div class="news-time"><span>{{ news.createTime }}</span></div>
          <div class="news-img">
            <img :src="`/dev-api/${news.imageUrl}`">
          </div>
          <div class="news-com">
            <div v-html="news.content" />
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import HomeLogo from './components/HomeLogo'
import { getJournaList } from '@/homepage/api/newsType'
export default {
  name: 'News',
  components: { HomeLogo },
  data() {
    return {
      news: {
        'createBy': '',
        'createTime': '2022-12-06 23:44:05',
        'updateBy': '',
        'updateTime': '2022-12-13 23:05:36',
        'remark': '',
        'newsId': 8,
        'title': '123',
        'isLink': '1',
        'newsType': 15,
        'link': '',
        'reviewStatus': 1,
        'content': '',
        'imageUrl': ''
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const newsId = this.$route.params.newsId
      const { code, msg, rows = [] } = await getJournaList({
        pageSize: 1,
        page: 1, newsId
      })
      if (rows.length > 0) {
        this.news = rows[0]
      }
    }
  }
}
</script>

<style lang="scss" >
.el-header,
.el-footer {
  background-color: #e42a0f;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.home-main {
  .el-main {
    padding: 0;
  }
}

.horizontal-center {
  width: 1080px;
  margin: 0 auto;
}

.news {
  .news-title {
    padding: 10px 0;
  }

  .news-time {
    padding: 10px 0;
    color: #888;
  }

  .news-img {
    padding: 10px 0;
    text-align: center;

    img {
      max-width: 830px;
    }
  }

  .news-com {
    padding: 10px 0;
  }
}
</style>

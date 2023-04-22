<template>
  <div class="news-content">
    <el-container>
      <el-header style="height: 70px;">
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
          <div v-for="item in news.imageUrl.split(',')" :key="item" class="news-img">
            <img v-if="item" :src="getImageUrl(item)">
          </div>
          <div class="news-com">
            <div v-html="news.content" class="ql-editor" />
          </div>
        </div>
      </el-main>
    </el-container>
    <div class="put_records" style="padding-bottom: 20px;">
      <el-divider></el-divider>
      <p style="font-size: 18px;">备案号：LJ2620181025001 开设单位：中国人民解放军陆军31618部队 联系人：李洋 联系电话：0611-969230</p>
      <p style="font-size: 18px;"> 中国人民解放军陆军31618部队强军网 版权所有2022-2023</p>
    </div>
  </div>
</template>

<script>
import HomeLogo from './components/HomeLogo'
import { getJournaList, getImageUrl } from '@/homepage/api/newsType'
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import Quill from 'quill';
import ImageResize from 'quill-image-resize-module'; // 引用
Quill.register('modules/imageResize', ImageResize); // 注册
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
    getImageUrl,
    async init() {
      const newsId = this.$route.params.newsId
      const { code, msg, rows = [] } = await getJournaList({
        pageSize: 1,
        page: 1,
        newsId,
        reviewStatus: 1
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
    text-align: center;
  }

  .news-time {
    padding: 10px 0;
    color: #888;
    text-align: center;
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

.ql-editor {
  P {
    margin-bottom: 20px;

    span {
      line-height: 35px;
    }
  }
}
</style>

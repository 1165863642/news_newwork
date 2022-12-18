<template>
  <div class="journa-lism-content">
    <el-row :gutter="50" style="height: 100%;">
      <el-col :span="6">
        <div class="journa-item-type">
          <div class="title">
            {{ journaTypeObj.newsTypeName }}
          </div>
          <div v-loading="tiemTypeListLoading" class="tiem-type-list">
            <div v-for="item in journaTypeObj.children" :key="item.newsTypeId" class="tiem"
              :class="journaList.paging.newsType === item.newsTypeId ? 'select-item' : ''"
              @click="itemClickEvent(item.newsTypeId)">
              {{ item.newsTypeName }}
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="journa-content">
          <div class="journa-tiem-type-name"><i class="el-icon-document" /> {{ getSelectJournaItemTypeName }}</div>
          <div v-loading="journaTiemListLoading" class="journa-tiem-list">
            <div v-for="journa in journaList.row" :key="journa.newsId" class="journa-tiem">
              <div class="journa-name" @click="toJournaDetailPage(journa)">{{ journa.title }}</div>
              <div class="journa-item">{{ journa.createTime }}</div>
            </div>
          </div>
          <!-- 分页组件 -->
          <div class="my-pagination">
            <el-pagination background :current-page.sync="journaList.paging.page"
              :page-size="journaList.paging.pageSize" layout="total, prev, pager, next,jumper"
              :total="journaList.paging.total" @current-change="handleCurrentChange" />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getNewsTypeList, getJournaList } from '@/homepage/api/newsType'
const transListDataToTreeData = (list, root) => {
  const arr = []
  // 1.遍历
  list.forEach((item) => {
    // 2.首次传入空字符串  判断list的pid是否为空 如果为空就是一级节点
    if (item.parentId === root) {
      // 找到之后就要去找item下面有没有子节点  以 item.id 作为 父 id, 接着往下找
      const children = transListDataToTreeData(list, item.newsTypeId)
      if (children.length > 0) {
        // 如果children的长度大于0,说明找到了子节点
        item.children = children
      }
      // 将item项, 追加到arr数组中
      arr.push(item)
    }
  })
  return arr
}

export default {
  name: 'JournaLism',
  data() {
    return {
      journaType: '', // 新闻大类名称
      journaTypeObj: { newsTypeId: 0, newsTypeName: '', children: [] },
      journaItemTypes: [], // 新闻子类列表
      journaList: {
        row: [],
        paging: {
          newsType: 0,
          pageSize: 20,
          page: 1,
          total: 0
        }
      },
      tiemTypeListLoading: false,
      journaTiemListLoading: false
    }
  },
  computed: {
    getSelectJournaItemTypeName() {
      for (let i = 0; i < this.journaTypeObj.children.length; i++) {
        const item = this.journaTypeObj.children[i]
        if (item.newsTypeId === this.journaList.paging.newsType) {
          return item.newsTypeName
        }
      }
      return ''
    }
  },
  watch: {
    '$route.params.journaType': {
      handler(newVal, oldVal) {
        this.init(newVal)
      },
      deep: true
    }
  },
  mounted() {
    this.init(this.$route.params.journaType)
  },
  methods: {
    itemClickEvent(key) {
      this.journaList.paging.newsType = key
      // 重置更新表格
      this.journaList.paging.page = 1
      this.updateList()
    },
    async init(journaType) {
      // this.journaType = journaType
      // 1.根据大类请求子类
      this.tiemTypeListLoading = true
      const newsTypeList = await getNewsTypeList({
        pageNum: 1,
        pageSize: 10000
      })
      this.tiemTypeListLoading = false
      const data = transListDataToTreeData(newsTypeList.rows, 0)
      const { newsTypeId, newsTypeName, children = [] } = data.filter((item) => item.newsTypeName === journaType)[0]
      this.journaTypeObj = { newsTypeId, newsTypeName, children }
      this.journaList.paging.newsType = children[0] ? children[0].newsTypeId : 0
      // 2.获取子类后更新新闻列表
      this.journaList.paging.page = 1
      this.updateList()
    },
    async updateList() {
      this.journaTiemListLoading = true
      const { code, msg, rows = [], total } = await getJournaList({ ...this.journaList.paging, reviewStatus: 1 })
      this.journaTiemListLoading = false
      if (code !== 200) {
        return
      }
      this.journaList.paging.total = total
      this.journaList.row = rows
    },
    toJournaDetailPage(journa) {
      // 根据新闻类型进行不同的跳转
      const { isLink, link, newsId } = journa
      if (isLink === '0') {
        // 链接打开新网页
        window.open(link, 'blank')
      } else {
        // 打开新闻详情页面
        window.open(`/#/news/${newsId}`, `T=${new Date().getTime()}`)
      }
    },
    handleSizeChange(val) {
      this.updateList()
    },
    handleCurrentChange(val) {
      this.updateList()
    }
  }
}
</script>

<style lang="scss" >
.journa-lism-content {
  padding: 20px 0 0 0;

  .journa-item-type {
    border: 2px #c10407 solid;
    font-size: 16px;
    color: #000;

    .title {
      height: 100px;
      line-height: 100px;
      text-align: center;
      font-weight: 600;
      font-size: 20px;
      color: #c10407;
      border-bottom: 1px #c10407 solid;
    }

    .tiem-type-list {
      .tiem {
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        border-bottom: 1px #eeefec solid;
        cursor: pointer;
      }

      .select-item {
        color: #fff;
        font-size: 18px;
        background-color: #bf0108;
      }
    }
  }

  .journa-content {
    margin: 20px 50px 20px 0px;

    .journa-tiem-type-name {
      border-bottom: 3px #c10407 solid;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;
      padding: 0 0 10px 5px;
    }

    .journa-tiem-list {
      min-height: 500px;
      max-height: 600px;

      .journa-tiem {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 30px;
        border-bottom: 1px solid #eee;
        margin-top: 10px;

        .journa-name {
          cursor: pointer;
          width: 400px;
          /* 让文字在一行内显示, 不换行 */
          white-space: nowrap;
          /* 当内容超过盒子宽度, 隐藏溢出部分 */
          overflow: hidden;
          /* 如果溢出的内容是文字, 就用省略号代替 */
          text-overflow: ellipsis;
        }

        .journa-name:hover {
          color: #bf0108;
        }

        .journa-item {
          color: #898989;
          width: 200px;
          text-align: right;
        }
      }
    }
  }
}

.my-pagination {
  text-align: center;
}

.el-pagination.is-background .el-pager li {
  color: #cf0104;
  background-color: #fff;
  border: 1px #cf0104 solid;
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #cf0104;
  color: #FFF;
}

.el-pagination.is-background .btn-next {
  background-color: #fff;
  color: #cf0104;
  border: 1px #cf0104 solid;
}
</style>

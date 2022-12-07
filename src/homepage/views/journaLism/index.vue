<template>
  <div class="journa-lism-content">
    <el-row :gutter="50">
      <el-col :span="6">
        <div class="journa-item-type">
          <div class="title">
            {{ journaTypeObj.newsTypeName }}
          </div>
          <div class="tiem-type-list">
            <div v-for="item in journaTypeObj.children" :key="item.newsTypeId" class="tiem"
              :class="selectJournaItemType === item.newsTypeId ? 'select-item' : ''"
              @click="itemClickEvent(item.newsTypeId)">
              {{ item.newsTypeName }}
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="journa-content">
          <div class="journa-tiem-type-name"><i class="el-icon-document" /> {{ getSelectJournaItemTypeName }}</div>
          <div class="journa-tiem-list">
            <div v-for="journa in journaList.row" :key="journa.key" class="journa-tiem">
              <div class="journa-name" @click="toJournaDetailPage(journa)">{{ journa.name }}</div>
              <div class="journa-item">{{ journa.time }}</div>
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
import { getNewsTypeList } from '@/homepage/api/newsType'
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
const rowList = [
  { name: '新闻名称1', time: '2022-12-05', key: '001', uel: '123123' },
  { name: '新闻名称2', time: '2022-12-05', key: '002', uel: '123123' },
  { name: '新闻名称3', time: '2022-12-05', key: '003', uel: '123123' },
  { name: '新闻名称4', time: '2022-12-05', key: '004', uel: '123123' },
  { name: '新闻名称5', time: '2022-12-05', key: '005', uel: '123123' },
  { name: '新闻名称6', time: '2022-12-05', key: '006', uel: '123123' },
  { name: '新闻名称7', time: '2022-12-05', key: '007', uel: '123123' },
  { name: '新闻名称8', time: '2022-12-05', key: '008', uel: '123123' },
  { name: '新闻名称9', time: '2022-12-05', key: '009', uel: '123123' },
  { name: '新闻名称10', time: '2022-12-05', key: '010', uel: '123123' },
  { name: '新闻名称11', time: '2022-12-05', key: '011', uel: '123123' },
  { name: '新闻名称12', time: '2022-12-05', key: '012', uel: '123123' },
  { name: '新闻名称13', time: '2022-12-05', key: '013', uel: '123123' },
  { name: '新闻名称14', time: '2022-12-05', key: '014', uel: '123123' },
  { name: '新闻名称15', time: '2022-12-05', key: '015', uel: '123123' }]

export default {
  name: 'JournaLism',
  data() {
    return {
      journaType: '', // 新闻大类名称
      journaTypeObj: { newsTypeId: 0, newsTypeName: '', children: [] },
      journaItemTypes: [
        { name: '头条新闻', key: '001' },
        { name: '教育厅', key: '002' },
        { name: '教育动态', key: '003' },
        { name: '图片新闻', key: '004' }], // 新闻子类列表
      selectJournaItemType: 0, // 选中新闻子类key
      journaList: {
        row: rowList,
        paging: {
          pageSize: 20,
          page: 1,
          total: 100
        }
      }
    }
  },
  computed: {
    getSelectJournaItemTypeName() {
      console.log('测试', this.journaItemTypes)
      for (let i = 0; i < this.journaItemTypes.length; i++) {
        const element = this.journaItemTypes[i]
        console.log(element)
        if (element.key === this.selectJournaItemType) {
          return element.name
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
      this.selectJournaItemType = key
      // 重置更新表格
    },
    async init(journaType) {
      // this.journaType = journaType
      // 1.根据大类请求子类
      const newsTypeList = await getNewsTypeList({
        pageNum: 1,
        pageSize: 10000
      })
      const data = transListDataToTreeData(newsTypeList.rows, 0)
      const { newsTypeId, newsTypeName, children = [] } = data.filter((item) => item.newsTypeName === journaType)[0]
      this.journaTypeObj = { newsTypeId, newsTypeName, children }
      this.selectJournaItemType = children[0] ? children[0].newsTypeId : 0
      // 2.获取子类后更新新闻列表
    },
    toJournaDetailPage(journa) {
      // 根据新闻类型进行不同的跳转
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
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

      .journa-tiem {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 30px;

        .journa-name {
          cursor: pointer;
        }

        .journa-name:hover {
          color: #bf0108;
        }

        .journa-item {
          color: #898989;
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

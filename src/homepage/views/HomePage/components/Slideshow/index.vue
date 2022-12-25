<template>
  <div style="padding-bottom: 30px;">
    <el-divider content-positio="center">
      <div class="module-title">展示墙</div>
    </el-divider>

    <el-carousel :interval="10000" arrow="never" height="150px">
      <el-carousel-item v-for="item in slideshowList">
        <el-row :gutter="20">
          <el-col :span="4" v-for="jtem in item" :key="jtem.id">
            <img style="width: 100%;height: 130px;" :src="jtem.imageUrl">
          </el-col>
        </el-row>

      </el-carousel-item>
    </el-carousel>



  </div>
</template>

<script>

import { getImageUrl, toJournaDetailPage } from "@/homepage/api/newsType"

const slideshowList = [
  [{ id: '001', imageUrl: 'https://img.tuguaishou.com/ips_templ_preview/bb/d0/24/lg_106615_1520995037_5aa88add20531.jpg?auth_key=2277648000-0-0-6baac905a94e5e46b4773a815da1865f' },
  { id: '002', imageUrl: 'https://img1.baidu.com/it/u=3405874350,401159039&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=272' },
  { id: '003', imageUrl: 'https://img.5tu.cn/attachments/image_files/month_1801/2018010102038584905.jpg' },
  { id: '004', imageUrl: 'http://www.81.cn/syjdt/attachement/jpg/site351/20221223/1853f70b78e10207393038.jpg' },
  { id: '005', imageUrl: 'https://img-qn-2.51miz.com/Templet/00/17/51/97/175197_8d18995a818a1ed3fcd2c6082c393a7b.jpg' },
  { id: '006', imageUrl: 'https://pic.5tu.cn/uploads/allimg/1807/pic_5tu_big_201807262121198655.jpg' }],
  [{ id: '012', imageUrl: 'https://pic.5tu.cn/uploads/allimg/1807/pic_5tu_big_201807262121198655.jpg' },
  { id: '007', imageUrl: 'https://img.tuguaishou.com/ips_templ_preview/bb/d0/24/lg_106615_1520995037_5aa88add20531.jpg?auth_key=2277648000-0-0-6baac905a94e5e46b4773a815da1865f' },
  { id: '008', imageUrl: 'https://img1.baidu.com/it/u=3405874350,401159039&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=272' },
  { id: '009', imageUrl: 'https://img.5tu.cn/attachments/image_files/month_1801/2018010102038584905.jpg' },
  { id: '010', imageUrl: 'http://www.81.cn/syjdt/attachement/jpg/site351/20221223/1853f70b78e10207393038.jpg' },
  { id: '011', imageUrl: 'https://img-qn-2.51miz.com/Templet/00/17/51/97/175197_8d18995a818a1ed3fcd2c6082c393a7b.jpg' }
  ],
  [{ id: '011', imageUrl: 'https://img-qn-2.51miz.com/Templet/00/17/51/97/175197_8d18995a818a1ed3fcd2c6082c393a7b.jpg' },
  { id: '012', imageUrl: 'https://pic.5tu.cn/uploads/allimg/1807/pic_5tu_big_201807262121198655.jpg' },
  { id: '007', imageUrl: 'https://img.tuguaishou.com/ips_templ_preview/bb/d0/24/lg_106615_1520995037_5aa88add20531.jpg?auth_key=2277648000-0-0-6baac905a94e5e46b4773a815da1865f' },
  { id: '008', imageUrl: 'https://img1.baidu.com/it/u=3405874350,401159039&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=272' },
  { id: '009', imageUrl: 'https://img.5tu.cn/attachments/image_files/month_1801/2018010102038584905.jpg' },
  { id: '010', imageUrl: 'http://www.81.cn/syjdt/attachement/jpg/site351/20221223/1853f70b78e10207393038.jpg' }
  ]
]

export default {
  name: 'Slideshow',
  data() {
    return {
      slideshowList
    }
  },
  mounted() {

  },
  watch: {

  },
  computed: {

  },
  methods: {
    getImageUrl,
    toJournaDetailPage
  }
}
</script>

<style lang="scss" scoped>
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
</style>

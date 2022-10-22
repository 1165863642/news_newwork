<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12" style="height:400px;margin-bottom: 20px;">
        <el-carousel :interval="5000" height="400px" arrow="never" direction="vertical">
          <el-carousel-item v-for="item in slideshowList" :key="item.id">
            <img style="width: 100%;" :src="item.imageUrl">
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="12" style="height:400px;margin-bottom: 20px;">
        <el-tabs v-model="navigationBar1.nameValue" type="card" @tab-click="handleClick1">
          <el-tab-pane v-for="(item) in navigationBar1.list" :key="item.key" :label="item.title" :name="item.key">
            <el-skeleton />
          </el-tab-pane>
        </el-tabs>

      </el-col>
      <el-col :span="12" style="height:400px;margin-bottom: 20px;">
        <el-tabs v-model="navigationBar2.nameValue" type="card" @tab-click="handleClick2">
          <el-tab-pane v-for="(item) in navigationBar2.list" :key="item.key" :label="item.title" :name="item.key">
            {{ item.title }}</el-tab-pane>
        </el-tabs>

      </el-col>
      <el-col :span="12" style="height:400px;margin-bottom: 20px;">
        <el-row>
          <el-col :span="10">
            <img :src="newEra.newEra1" style="width: 100%;">
          </el-col>
          <el-col :span="10">
            <el-row>
              <el-col :span="8"> <img :src="newEra.newEra2" style="width: 100%; height: 200px;"></el-col>
              <el-col :span="8"> <img :src="newEra.newEra3" style="width: 100%;height: 200px;"></el-col>
              <el-col :span="8"> <img :src="newEra.newEra4" style="width: 100%;height: 200px;"></el-col>
              <el-col :span="8"> <img :src="newEra.newEra5" style="width: 100%;height: 200px;"></el-col>
              <el-col :span="8"> <img :src="newEra.newEra6" style="width: 100%;height: 200px;"></el-col>
              <el-col :span="8"> <img :src="newEra.newEra7" style="width: 100%;height: 200px;"></el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import slideshow1 from '../../assets/slideshow/slideshow1.jpeg'
import slideshow2 from '../../assets/slideshow/slideshow2.jpeg'
import slideshow3 from '../../assets/slideshow/slideshow3.jpeg'
import slideshow4 from '../../assets/slideshow/slideshow4.jpeg'
import slideshow5 from '../../assets/slideshow/slideshow5.jpeg'

import newEra1 from '../../assets/newEra/newEra1.jpg'
import newEra2 from '../../assets/newEra/newEra2.jpg'
import newEra3 from '../../assets/newEra/newEra3.jpg'
import newEra4 from '../../assets/newEra/newEra4.png'
import newEra5 from '../../assets/newEra/newEra5.jpg'
import newEra6 from '../../assets/newEra/newEra6.jpg'
import newEra7 from '../../assets/newEra/newEra7.jpg'

const newEra = { newEra1, newEra2, newEra3, newEra4, newEra5, newEra6, newEra7 }

export default {
  name: 'WebHome',
  data() {
    return {
      slideshowList: [
        {
          id: '1',
          imageUrl: slideshow1,
          title: '',
          context: ''
        },
        {
          id: '2',
          imageUrl: slideshow2,
          title: '',
          context: ''
        },
        {
          id: '3',
          imageUrl: slideshow3,
          title: '',
          context: ''
        },
        {
          id: '4',
          imageUrl: slideshow4,
          title: '',
          context: ''
        }, {
          id: '5',
          imageUrl: slideshow5,
          title: '',
          context: ''
        }
      ],
      navigationBar1: {
        nameValue: 'TravelPublic',
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
      navigationBar2: {
        nameValue: 'ManuscriptCondition',
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
          },
          {
            key: 'ManuscriptCondition',
            title: '上稿情况'
          }
        ]
      },
      newEra

    }
  },
  methods: {
    handleClick1() { },
    handleClick2() { }
  }
}
</script>

<style lang="scss">

</style>

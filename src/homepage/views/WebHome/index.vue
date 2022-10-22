<template>
  <div>
    <div class="top-part">
      <img :src="topImage" style="width: 49%;"> <img :src="topImage" style="width: 49%;">
    </div>
    <el-row :gutter="20">
      <el-col :span="12" class="col-item">
        <el-carousel :interval="5000" height="400px" arrow="never" direction="vertical">
          <el-carousel-item v-for="item in slideshowList" :key="item.id">
            <img style="width: 100%;" :src="item.imageUrl">
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="12" class="col-item">
        <el-tabs v-model="navigationBar1.nameValue" type="card" @tab-click="handleClick1">
          <el-tab-pane v-for="(item) in navigationBar1.list" :key="item.key" :label="item.title" :name="item.key">
            <div class="news-list">
              <div v-for="(item, index) in staffData" :key="index">
                <el-image v-if="index == 0" fit="fill"
                  src="http://www.81.cn/attachement/jpg/site351/20221019/e04f4328292b24b9a20605.jpg"
                  style="float: left" />
                <a :href="item.href" target="_blank">{{ item.name }}</a>
              </div>
            </div>

          </el-tab-pane>
        </el-tabs>

      </el-col>
      <el-col :span="12" class="col-item">
        <el-tabs v-model="navigationBar2.nameValue" type="card" @tab-click="handleClick2">
          <el-tab-pane v-for="(item) in navigationBar2.list" :key="item.key" :label="item.title" :name="item.key">
            <div class="news-list">
              <div v-for="(item, index) in staffData" :key="index">
                <el-image v-if="index == 0" fit="fill"
                  src="http://www.81.cn/attachement/jpg/site351/20221019/e04f4328292b24b9a20605.jpg"
                  style="float: left" />
                <a :href="item.href" target="_blank">{{ item.name }}</a>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>

      </el-col>
      <el-col :span="12" class="col-item">
        <el-row :gutter="10">
          <el-col :span="10">
            <img :src="newEra.newEra5" style="width: 100%;height:400px">
          </el-col>
          <el-col :span="12">
            <el-row :gutter="10">
              <el-col :span="8"> <img :src="newEra.newEra2" class="image-book">
              </el-col>
              <el-col :span="8"> <img :src="newEra.newEra3" class="image-book">
              </el-col>
              <el-col :span="8"> <img :src="newEra.newEra4" class="image-book">
              </el-col>
              <el-col :span="8"> <img :src="newEra.newEra1" class="image-book">
              </el-col>
              <el-col :span="8"> <img :src="newEra.newEra6" class="image-book">
              </el-col>
              <el-col :span="8"> <img :src="newEra.newEra7" class="image-book">
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import topImage from '../../assets/top.png'

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
        nameValue: 'IntensifSoldier',
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
      newEra,
      topImage,
      staffData: [
        {
          href: 'http://www.81.cn/yw/2022-10/22/content_10194144.htm',
          name: '解放军和武警部队代表团代表持续热烈讨论党的二十大报告'
        },
        {
          href: 'http://www.81.cn/yw/2022-10/22/content_10194148.htm',
          name: '综述之八丨加快把人民军队建成世界一流军队'
        },
        {
          href: 'http://www.81.cn/yw/2022-10/22/content_10194152.htm',
          name: '基层代表热议履行新时代人民军队使命任务'
        },
        {
          href: 'http://www.81.cn/yw/2022-10/22/content_10194144.htm',
          name: '解放军和武警部队代表团代表持续热烈讨论党的二十大报告'
        },
        {
          href: 'http://www.81.cn/yw/2022-10/22/content_10194148.htm',
          name: '综述之八丨加快把人民军队建成世界一流军队'
        },
        {
          href: 'http://www.81.cn/yw/2022-10/22/content_10194152.htm',
          name: '基层代表热议履行新时代人民军队使命任务'
        }, {
          href: 'http://www.81.cn/yw/2022-10/22/content_10194144.htm',
          name: '解放军和武警部队代表团代表持续热烈讨论党的二十大报告'
        },
        {
          href: 'http://www.81.cn/yw/2022-10/22/content_10194148.htm',
          name: '综述之八丨加快把人民军队建成世界一流军队'
        },
        {
          href: 'http://www.81.cn/yw/2022-10/22/content_10194152.htm',
          name: '基层代表热议履行新时代人民军队使命任务'
        },
        {
          href: 'http://www.81.cn/yw/2022-10/22/content_10194144.htm',
          name: '解放军和武警部队代表团代表持续热烈讨论党的二十大报告'
        }
      ]

    }
  },
  methods: {
    handleClick1() { },
    handleClick2() { }
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
  margin-top: 20px;
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
  color: blue;
}

a:link {
  color: black;
}

a {
  color: black;
  text-decoration: none;
}

.image-book {
  width: 100%;
  height: 150px;
  margin-bottom: 90px;
}
</style>

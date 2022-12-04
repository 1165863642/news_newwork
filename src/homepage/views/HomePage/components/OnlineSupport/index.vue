<template>
  <div>
    <el-divider content-positio="center"> 在线服务 </el-divider>
    <el-row :gutter="20">
      <el-col :span="8" class="container">
        <span class="title">心理咨询</span>
        <div class="news-list">
          <div v-for="(item, index) in staffData" :key="index">
            <el-image v-if="index == 0" fit="fill"
              src="http://www.81.cn/attachement/jpg/site351/20221019/e04f4328292b24b9a20605.jpg" style="float: left" />
            <a :href="item.href" target="_blank">{{ item.name }}</a>
          </div>
        </div>
      </el-col>
      <el-col :span="8" class="container">
        <span class="title">法律援助</span>
        <div class="news-list">
          <div v-for="(item, index) in staffData" :key="index">
            <el-image v-if="index == 0" fit="fill"
              src="http://www.81.cn/attachement/jpg/site351/20221019/e04f4328292b24b9a20605.jpg" style="float: left" />
            <a :href="item.href" target="_blank">{{ item.name }}</a>
          </div>
        </div>
      </el-col>
      <el-col :span="8" class="container">
        <span class="title">服务之窗</span>
        <div class="server">
          <div>
            <el-image class="icon" :src="calc" style="float: left" />
            <div class="line"><span>军人待遇计算器</span></div>
          </div>

          <div>
            <el-image class="icon" :src="zili" style="float: left" />
            <div class="line"><span>资历章编排</span></div>
          </div>
          <div>
            <el-image class="icon" :src="gongjijin" style="float: left" />
            <div class="line"><span>住房公积金贷款查询</span></div>
          </div>

          <div>
            <el-image class="icon" :src="baozhangka" style="float: left" />
            <div class="line"><span>军人标识牌[保障卡]</span></div>
          </div>

          <div>
            <el-image class="icon" :src="daiyu" style="float: left" />
            <div class="line"><span>全军人员生活待遇网</span></div>
          </div>

          <div>
            <el-image class="icon" :src="jundui" style="float: left" />
            <div class="line"><span>全军被装信息平台</span></div>
          </div>
          <div>
            <el-image class="icon" :src="quanjun" style="float: left" />
            <div class="line"><span>全队物资采购网</span></div>
          </div>

          <div>
            <el-image class="icon" :src="piaobao" style="float: left" />
            <div class="line"><span>票报查询验证系统</span></div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import calc from '../../../../assets/calc.png'
import zili from '../../../../assets/zili.png'
import gongjijin from '../../../../assets/gongjijin.png'
import baozhangka from '../../../../assets/baozhangka.png'
import daiyu from '../../../../assets/daiyu.png'
import jundui from '../../../../assets/jundui.png'
import quanjun from '../../../../assets/quanjun.png'
import piaobao from '../../../../assets/piaobao.png'

export default {
  name: 'OnlineSupport',
  data() {
    return {
      calc,
      zili,
      gongjijin,
      baozhangka,
      daiyu,
      jundui,
      quanjun,
      piaobao,
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
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;

  .title {
    border: 2px black solid;
    padding: 5px 26px;
  }

  .news-list {
    margin-top: 20px;
    text-align: left;

    div+div {
      margin-top: 10px;
    }

    .el-image {
      width: 100px;
      height: 100px;
    }
  }
}

.el-divider {
  background-color: #394456;
  height: 10px;
}

.el-divider__text {
  font-size: 25px;
  background-color: #fff;
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

.server {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  .line {
    width: 200px;

    span {
      line-height: 50px;
    }
  }
}

.icon {
  width: 50px;
  height: 50px;
}

.clearfix:after {
  content: '';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
</style>

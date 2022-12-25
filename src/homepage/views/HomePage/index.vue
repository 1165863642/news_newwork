<template>
  <div>
    <div id="WebHome">
      <WebHome />
    </div>
    <div id="JobInstruction">
      <JobInstruction />
    </div>
    <div id="Characteristic">
      <Characteristic />
    </div>

    <div id="OnlineSupport">
      <OnlineSupport />
    </div>
    <div id="GrassRoots">
      <GrassRoots />
    </div>
    <div id="Slideshow">
      <slideshow />
    </div>

    <!-- <div id="CorporationCulture">
      <CorporationCulture />
    </div>
    <div id="TravelPlatform">
      <TravelPlatform />
    </div> -->
    <div class="put_records">
      <el-divider></el-divider>
      <p> 互联网新闻信息服务许可证****** 京ICP备*******号 京公网安备********* 网络涉军违法和不良信息举报电话 : 010-**********</p>
      <p> 本网站刊登的新闻信息和专题专栏资料，来源为*************************</p>
      <p> Copyright ©2022-2022 www.*******.cn All Rights Reserved</p>
    </div>
  </div>

</template>

<script>

import WebHome from './components/WebHome/index'
import GrassRoots from './components/GrassRoots/index'
import Characteristic from './components/Characteristic/index'
import OnlineSupport from './components/OnlineSupport/index'
import JobInstruction from './components/JobInstruction/index'
import CorporationCulture from './components/CorporationCulture/index'
import TravelPlatform from './components/TravelPlatform/index'
import Slideshow from './components/Slideshow/index'

export default {
  name: 'Home',
  components: { WebHome, GrassRoots, Characteristic, OnlineSupport, JobInstruction, CorporationCulture, TravelPlatform, Slideshow },
  data() {
    return {}
  },
  created() {
  },
  methods: {

  }

}
</script>

<style lang="scss">
.put_records {
  margin-bottom: 60px;

  p {
    text-align: center;
    color: #777;
    font-size: 12px;
    margin-bottom: 10px;
  }
}
</style>

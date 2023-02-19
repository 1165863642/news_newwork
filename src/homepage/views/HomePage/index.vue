<template>
  <div>
    <div id="WebHome">
      <WebHome />
    </div>
    <div id="GrassRoots">
      <GrassRoots />
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
      <p style="font-size: 18px;">备案号：LJ2620181025001 开设单位：中国人民解放军陆军31618部队 联系人：李洋 联系电话：0611-969230</p>
      <p style="font-size: 18px;"> 中国人民解放军陆军31618部队强军网 版权所有2022-2023</p>
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

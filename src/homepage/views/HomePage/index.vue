<template>
  <div v-loading="loading">
    <div id="WebHome">
      <WebHome />
    </div>
    <div id="GrassRoots">
      <GrassRoots />
    </div>
    <div id="Characteristic">
      <Characteristic />
    </div>
    <div id="OnlineSupport">
      <OnlineSupport />
    </div>
    <div id="JobInstruction">
      <JobInstruction />
    </div>
    <div id="CorporationCulture">
      <CorporationCulture />
    </div>
    <div id="TravelPlatform">
      <TravelPlatform />
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

export default {
  name: 'Home',
  components: { WebHome, GrassRoots, Characteristic, OnlineSupport, JobInstruction, CorporationCulture, TravelPlatform },
  data() {
    return {
      loading: false
    }
  },
  created() {
  },
  methods: {

  }

}
</script>

<style lang="scss">

</style>

<template>
  <div class="top-news">
    <div class="news-item">
      <img v-if="honeTopNew[0]" :src="getImageUrl(honeTopNew[0].imageUrl)" @click="toJournaDetailPage(honeTopNew[0])" />
    </div>

    <div class="news-item">
      <img v-if="honeTopNew[1]" :src="getImageUrl(honeTopNew[1].imageUrl)" @click="toJournaDetailPage(honeTopNew[1])" />
    </div>
  </div>
</template>

<script>
import { getImageUrl, toJournaDetailPage } from "@/homepage/api/newsType"
import { mapGetters } from 'vuex';
import { getHome } from '@/homepage/api/newsType'
export default {
  name: 'HomeLogo',
  data() {
    return {
    }
  },
  watch: {
  },
  computed: {
    ...mapGetters(['honeTopNew']),
  },
  async mounted() {
    // 挂载
    console.log("honeTopNew", this.honeTopNew)
    if (this.honeTopNew.length === 0) {
      const { code, data, msg } = await getHome();
      if (code !== 200) {
        this.$message.error(msg)
      } else {
        const { other = [], parentType = [], top = [] } = data
        this.$store.commit("setOther", other)
        this.$store.commit("setTop", top)
      }
    }
  },
  methods: {
    getImageUrl,
    toJournaDetailPage
  }
}
</script>

<style lang="scss">
.top-news {
  display: flex;
  justify-content: space-between;
}

.news-item {
  height: 70px;

  img {
    height: 100%;
  }
}
</style>

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
  height: 127px;

  img {
    height: 100%;
  }
}
</style>

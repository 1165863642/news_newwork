<template>
  <div class="journa-lism-content">
    新闻列表{{ this.$route.params.journaType }}
  </div>
</template>

<script>

export default {
  name: 'JournaLism',
  data() {
    return {
      journaType: this.$route.params.journaType
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
.journa-lism-content {}
</style>

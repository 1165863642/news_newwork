import Vue from 'vue'
import router from './router.js'
import homepage from './index.vue'
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(homepage)
}).$mount('#homepage')

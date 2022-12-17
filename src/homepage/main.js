import Vue from 'vue'
import router from './router.js'
import homepage from './index.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
import store from './store'
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(homepage)
}).$mount('#homepage')

import Vue from 'vue'
import router from './router.js'
import homepage from './index.vue'
import 'element-ui/lib/theme-chalk/index.css'
import {
  Container,
  Header, Main, Footer,
  Row, Col, Tabs,
  TabPane
} from 'element-ui'
Vue.config.productionTip = false

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Row)
Vue.use(Col)
Vue.use(Tabs)
Vue.use(TabPane)

new Vue({
  router,
  render: h => h(homepage)
}).$mount('#homepage')

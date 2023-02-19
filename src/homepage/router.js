import Vue from 'vue'
import Router from 'vue-router'
import WebHome from './views/HomePage/index' // WebHome
export const HomeItemList = [
  {
    path: '/WebHome',
    component: WebHome,
    title: '网站首页',
    hidden: true
  },
  {
    path: '/journaLism/:journaType',
    component: () => import('./views/journaLism/index'),
    hidden: true
  },
  {
    path: '/leaveWord',
    component: () => import('./views/leaveWord/index'),
    hidden: true
  }

]

import home from './views/home/index' // WebHome
Vue.use(Router)
export const constantRoutes = [
  {
    path: '/',
    component: home,
    hidden: true,
    redirect: HomeItemList[0].path, // 配置默认打开页面
    children: HomeItemList
  },
  {
    path: '/news/:newsId',
    component: () => import('./views/new/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('./views/404'),
    hidden: true
  },
  /** ........ */
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export default router

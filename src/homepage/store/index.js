import { getInfo } from "@/homepage/api/newsType";
import Vue from "vue";
import Vuex from "vuex";
import { Message } from 'element-ui'
Vue.use(Vuex);

const storeConf = {
  state: {
    other: [],
    top: [],
    loginDialogVisible: false,
    token: '',
    userInfo: null
  },
  getters: {
    //  首页头部新闻
    honeTopNew(state) {
      const data = state.top.filter((item) => item.index === 6)
      return data[0] ? data[0].news : []
    },
    //  头条图片新闻
    headlineImgNews(state) {
      const data = state.top.filter((item) => item.index === 7)
      return data[0] ? data[0].news : []
    },
    //  主页模块一轮播图
    slideshowList(state) {
      const data = state.top.filter((item) => item.index === 0)
      return data[0] ? data[0].news : []
    },
    //  主页模块二
    navigationBar1(state) {
      const data = state.top.filter((item) => item.index === 1) || []
      return data
    },
    //  主页模块三
    navigationBar2(state) {
      const data = state.top.filter((item) => item.index === 2) || []
      return data
    },
    //  主页模块四报刊
    journalList(state) {
      const data = state.top.filter((item) => item.index === 3)
      return data[0] ? data[0].news : []
    },
    // 欢迎图片
    welcomeImage(state) {
      const data = state.top.filter((item) => item.index === 4)
      return data[0] ? data[0].news : []
    },
    // 基层视窗
    basicClassBar(state) {
      const data = state.other.filter((item) => item.id === 1) || []
      return data
    },
    // 特色栏目
    featureClassBar(state) {
      const data = state.other.filter((item) => item.id === 2) || []
      return data
    },
    // 在线服务
    onlineClassBar(state) {
      const data = state.other.filter((item) => item.id === 3) || []
      return data
    },
    // 工作指导
    workClassBar(state) {
      const data = state.other.filter((item) => item.id === 4) || []
      return data
    },
    // 展示墙
    slideshow(state) {
      const data = state.top.filter((item) => item.index === 5)
      return data[0] ? data[0].news : []
    },
  },
  mutations: {
    setOther(state, other) {
      state.other = other
    },
    setTop(state, top) {
      state.top = top
    },
    setLoginDialogVisible(state, loginDialogVisible) {
      state.loginDialogVisible = loginDialogVisible
    },
    setToken(state, token) {
      if (token) {
        state.token = token
        getInfo().then((res) => {
          state.userInfo = res.user
          Message.success("获取用户信息成功！");
        })
      } else {
        state.token = "";
        state.userInfo = null;
        Message.success("退出成功！");
      }

    }
  }
};

const store = new Vuex.Store(storeConf);
export default store;

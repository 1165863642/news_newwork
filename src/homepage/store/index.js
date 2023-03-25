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
    // 首页头部新闻
    honeTopNew(state) {
      const data = state.top.filter((item) => item.index === 6)
      return data[0] ? data[0].news : []
    },
    //  信箱地址
    mailboxDddress(state) {
      const data = state.top.filter((item) => item.index === 9)
      return data[0]?.news?.[0] || ""
    },
    //  头条图片新闻1
    headlineImgNews1(state) {
      const data = state.top.filter((item) => item.index === 7)
      return data[0]?.news || []
    },
    // 头条图片新闻2
    headlineImgNews2(state) {
      const data = state.top.filter((item) => item.index === 8)
      return data[0]?.news || []
    },
    //  主页模块一轮播图
    slideshowList(state) {
      const data = state.top.filter((item) => item.index === 0)
      return data[0]?.news || []
    },
    //  主页模块二
    navigationBar1(state) {
      const data = state.top.filter((item) => item.index === 1) || []
      return data
    },
    //  主页模块三-1
    navigationBar21(state) {
      const data = state.top.filter((item) => item.index === 2) || []
      return data[0] || null
    },
    //  主页模块三-2
    navigationBar22(state) {
      const data = state.top.filter((item) => item.index === 10) || []
      return data[0] || null
    },
    //  主页模块三-3
    navigationBar23(state) {
      const data = state.top.filter((item) => item.index === 11) || []
      return data[0] || null
    },
    //  人物肖像
    humanPortrait(state) {
      const data = state.top.filter((item) => item.index === 12) || []
      return data[0]?.news || []
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
    // 文化角
    slideshow1(state) {
      const data = state.top.filter((item) => item.index === 5)
      return data[0] || null
    },
    slideshow2(state) {
      const data = state.top.filter((item) => item.index === 13)
      return data[0] || null
    },
    slideshow3(state) {
      const data = state.top.filter((item) => item.index === 14)
      return data[0] || null
    }
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
        location.reload();
      }

    }
  }
};

const store = new Vuex.Store(storeConf);
export default store;

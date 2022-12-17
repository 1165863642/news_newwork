import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storeConf = {
    state: {
        other: [],
        top: []
    },
    getters: {
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
    },
    mutations: {
        setOther(state, other) {
            state.other = other
        },
        setTop(state, top) {
            state.top = top
        }
    }
};

const store = new Vuex.Store(storeConf);

export default store;

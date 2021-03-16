// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.config.productionTip = false

Vue.use(Vuex)
// 实例化Vuex
const store = new Vuex.Store({
  // 存
  state: {
    count: 0,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  // 改 立刻得到一种视图状态 因此不能异步操作
  mutations: {
    // (state,payload,)
    addCount (state, payload) {
      state.count += payload
    }
  },
  // 异步
  actions: {
    getAsyncCount (context, params) {
      // 模拟异步请求
      setTimeout(function () {
        context.commit('addCount', params)
      }, 1000)
    }
  },
  getters: {
    // vuex的计算属性
    // es5
    // filterList (state) {
    //   return state.list.filter(item => item > 5)
    // },
    // es6 更常见
    filterList: state => state.list.filter(item => item > 5),
    token: state => state.user.token,
    name: state => state.setting.name
  },
  modules: {
    // 子模块属性
    user: {
      namespaced: true,
      state: {
        token: '12345'
      },
      mutations: {
        updateToken (state) {
          state.token = '678910'
        }
      }
    },
    setting: {
      state: {
        name: 'vuex实例'
      }
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

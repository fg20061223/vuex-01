import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add (state) {
      state.count++
    },
    addN (state, step) {
      state.count += step
    },
    sub (state) {
      state.count--
    },
    subN (state, step) {
      state.count -= step
    }
  },
  actions: {
    addSync (context) {
      setTimeout(() => {
        // 触发mutations中的方法，对state中的数据进行修改
        context.commit('add')
      }, 500)
    },
    addNSync (context, step) {
      setTimeout(() => {
        // 触发mutations中的方法，对state中的数据进行修改
        context.commit('addN', step)
      }, 500)
    },
    subSync (context) {
      setTimeout(() => {
        context.commit('sub')
      }, 500)
    },
    subNSync (context, step) {
      setTimeout(() => {
        context.commit('subN', step)
      }, 500)
    }
  },
  // 用于对store中的数据进行加工处理，形成新的数据，类似于计算属性
  // state中的数据改变，getters中的数据随之改变
  getters: {
    showNum: (state) => {
      return `当前最新的数量是【${state.count}】`
    }
  },
  modules: {}
})

<template>
  <div id="app">
    <!-- 原始形式引用 -->
    <p>原始形式获取state的数据：{{$store.state.count}}</p>
    <p>计算属性获取state的数据：{{count}}</p>
    <p>辅助函数获取state的数据：{{count}}</p>

    <p>原始形式获取state的数据：{{$store.state.list}}</p>
    <child-a></child-a>
    <child-b></child-b>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import ChildA from './components/child-a.vue'
import ChildB from './components/child-b.vue'
export default {
  name: 'App',
  computed: {
    // count () {
    //   // 来源于vuex
    //   return this.$store.state.count
    // },
    // 延展运算符
    ...mapState(['count'])
  },
  components: {
    ChildA,
    ChildB
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

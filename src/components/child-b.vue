<template>
    <div class="">
      <h3>放置子模块的state</h3>
      <div>用户名称:{{$store.state.user.token}}</div>
      <div>应用名称:{{$store.state.setting.name}}</div>
      <h3>使用getter来修饰一下token和name</h3>
      <div>用户名称:{{token}}</div>
      <div>用户名称:{{name}}</div>
      <button @click="updateTo">调用子模块的vuex</button>
      <button @click="updateTo">调用子模块的mutuations</button>
    </div>
</template>

<script type="text/ecmascript-6">
import {createNamespacedHelpers, mapGetters} from 'vuex'
// 臣妾做不到394
const {mapMutations} = createNamespacedHelpers('user')
export default {
  data () {
    return {}
  },
  created () {},
  components: {},
  methods: {
    updateTo () {
      // 加namespace不能调用了
      // return this.$store.commit('updateToken')
      // 1.采用路径形式去调用
      return this.$store.commit('user/updateToken')
      // return this.$store.commit('updateToken')
    },
    // 02.采用辅助函数去调用
    ...mapMutations(['user/updateToken']),
    test () {
      // 不符合规范的玩意
      this['user/updateToken']()
      // this['updateToken']()
    }
    // ...mapMutations(['updateTo'])
  },
  computed: {
    ...mapGetters(['token', 'name'])
  }
}
</script>

<style scoped>
</style>

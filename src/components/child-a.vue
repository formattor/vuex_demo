<template>
    <div class="">
      <button @click="test">+1(原始形式)</button>
      <button @click="addCount(100)">+100(辅助函数)</button><br>
      <button @click="test1">异步调用(原始形式)</button>
      <button @click="getAsyncCount(600)">异步调用(辅助函数)</button>
      <div>
        <p>原始形式getters:{{$store.getters.filterList}}</p>
        <p>辅助函数getters:{{filterList}}</p>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import {mapActions, mapMutations, mapGetters} from 'vuex'
export default {
  data () {
    return {}
  },
  created () {},
  components: {},
  methods: {
    // 原始形式调用
    test () {
      this.$store.commit('addCount', 1)
    },
    ...mapMutations(['addCount']),
    test1 () {
      this.$store.dispatch('getAsyncCount', 123)
    },
    ...mapActions(['getAsyncCount'])

  },
  computed: {
    ...mapGetters(['filterList'])
  }
}
</script>

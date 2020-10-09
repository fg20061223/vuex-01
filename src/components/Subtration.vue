<template>
  <div>
    <!-- state取值方式2 -->
    <h1>这是减法计数器: {{count}}</h1>
    <!-- 触发mutations的方式2.1 -->
    <button @click="subHandler()">-1</button>
    <button @click="subNHandler(6)">-N</button>
    <br>
    <!-- 触发mutations的方式2.2 -->
    <button @click="sub()">-1</button>
    <button @click="subN(6)">-N</button>

    <!-- 触发action的方式2 -->
    <button @click="subSync()">-1 Sync</button>
    <button @click="subNSync(8)">-N Sync</button><br>

    <!-- getters/modules取值方式1 -->
    <b>{{showNum}}</b>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'subtration',
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subSync', 'subNSync']),
    subHandler() {
      this.sub()
    },
    subNHandler(step) {
      this.subN(step)
    }
  },
  computed: {
    // ...mapState(['count']),
    // 如果在根store中注册了module时，需采用如下的方式获取子module中的state数据
    ...mapState({
      count: state => state.count
    }),
    ...mapGetters(['showNum'])
  }
}
</script>

<style scoped>
</style>

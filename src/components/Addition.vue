<template>
  <div>
    <!-- state取值方式1 -->
    <h1>这是加法计数器: {{ $store.state.count }}</h1>
    <!-- 触发mutations的方式1.1 -->
    <button @click="addHandler()">+1</button>
    <button @click="addNHandler(6)">+N</button>
    <br>

    <!-- 触发mutations的方式1.2 -->
    <button @click="() => {$store.commit('add')}">+1</button>
    <button @click="() => {$store.commit('addN',6)}">+N</button>

    <!-- 触发action的方式1 -->
    <button @click="() => {$store.dispatch('addSync')}">+1 Sync</button>
    <button @click="() => {$store.dispatch('addNSync',8)}">+N Sync</button>
    <br>

    <!-- getters/modules取值方式1 -->
    <b>{{$store.getters.showNum}}</b>
  </div>
</template>

<script>
export default {
  name: 'addition',
  methods: {
    addHandler() {
      this.$store.commit('add')
    },
    addNHandler(step) {
      this.$store.commit('addN', step)
    }
  }
}
</script>

<style scoped></style>

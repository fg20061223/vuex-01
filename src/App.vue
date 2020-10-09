<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Addition></Addition>
    <hr>
    <Subtration></Subtration>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Addition from './components/Addition.vue'
import Subtration from './components/Subtration.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Addition,
    Subtration
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p></p>
    <router-view />
    <router-view name='title'/>
    <router-link to="/goods">点击查看商品</router-link>
    <router-view name='image'/>
  </div>
</template>

<script>
export default {
  name: 'App'
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

<template>
  <div>
    <p>{{ $route.params.goodsId }}</p>
    <p>{{ $route.params.name }}</p>
    <router-link to="/goods/Image">点击查看商品的图片</router-link>
    <router-link :to="{name:'title'}">点击查看商品的标题</router-link>
    <button @click="jump">点击跳转到购物车页面</button>
    <div><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  methods: {
    jump () {
      this.$router.push('/cart?id=123')
    }
  }
}
</script>
<style>
</style>
